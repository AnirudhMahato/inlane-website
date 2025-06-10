import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Helmet } from "react-helmet-async";
import { useMediaQuery, useTheme, Box, TextField, Button, FormControlLabel, Radio, RadioGroup, Typography, FormControl, Select, MenuItem, Autocomplete, CircularProgress } from "@mui/material";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import pitCrewTag from "../assets/images/PitCrew_Tag.svg";
import Rocket from "../components/SVGs/Rocket";
import { Link, useNavigate } from "react-router-dom";
import debounce from 'lodash/debounce';
import ScrollToTop from '../components/ScrollToTop';
import { useLocation } from 'react-router-dom';
import LocationSelector from '../components/locationSelector';
import { APIProvider } from '@vis.gl/react-google-maps';

// Fetch country codes and flags
const fetchCountryCodes = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data.map(country => ({
      code: `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`,
      name: country.name.common,
      flag: country.flags?.svg || ''
    }));
  } catch (error) {
    console.error('Error fetching country codes:', error);
    return [];
  }
};

// Search locations
const searchLocations = async (query, type, selectedCity = '') => {
  if (!query || query.length < 2) return [];
  
  try {
    const timestamp = new Date().getTime();
    const searchQuery = type === 'area' && selectedCity 
      ? `${query}, ${selectedCity}, india`
      : `${query}, india`;

    const url = `https://nominatim.openstreetmap.org/search?` +
      `q=${encodeURIComponent(searchQuery)}&` +
      `format=json&` +
      `addressdetails=1&` +
      `limit=10&` +
      `countrycodes=in&` +
      `_=${timestamp}`;

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'InLane Driving School Website',
        'Accept': 'application/json',
      }
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();

    if (type === 'city') {
      return data
        .filter(item => (
          item.type === 'city' ||
          item.type === 'town' ||
          item.type === 'administrative' ||
          (item.address && (
            item.address.city ||
            item.address.town ||
            item.address.municipality
          ))
        ))
        .map(item => ({
          label: (
            item.address?.city ||
            item.address?.town ||
            item.address?.municipality ||
            item.display_name.split(',')[0]
          ).trim(),
          state: item.address?.state || '',
          value: item.place_id
        }))
        .filter((item, index, self) => 
          index === self.findIndex((t) => t.label === item.label)
        );
    } else {
      return data
        .filter(item => (
          item.type === 'suburb' ||
          item.type === 'neighbourhood' ||
          item.type === 'residential' ||
          (item.address && (
            item.address.suburb ||
            item.address.neighbourhood ||
            item.address.residential
          ))
        ))
        .map(item => ({
          label: (
            item.address?.suburb ||
            item.address?.neighbourhood ||
            item.address?.residential ||
            item.display_name.split(',')[0]
          ).trim(),
          value: item.place_id
        }))
        .filter((item, index, self) => 
          index === self.findIndex((t) => t.label === item.label)
        );
    }
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
};

// Form field component - Memoized to prevent unnecessary re-renders
const FormField = React.memo(({ label, children, bgColor }) => (
  <div className={`rounded-2xl p-4 md:p-6 ${bgColor}`}>
    <label className="block text-lg font-bold mb-2">{label}</label>
    {children}
  </div>
));

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [utmSource, setUtmSource] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    city: null,
    area: null,
    license: 'yes',
    countryCode: '+91'
  });

  const [countryCodes, setCountryCodes] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [areaOptions, setAreaOptions] = useState([]);
  const [loading, setLoading] = useState({
    city: false,
    area: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize theme and screen size checks to prevent unnecessary recalculations
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  
  // Memoize icon styles to prevent object recreation on every render
  const iconStyles = useMemo(() => ({
    small: { color: "#FFFFFF", width: 16, height: 16 },
    medium: { color: "#FFFFFF", width: 34, height: 34 },
    large: { color: "#FFFFFF", width: 40, height: 40 }
  }), []);

  const IconStyle = useMemo(() => {
    return isSmallScreen
      ? iconStyles.small
      : isMediumScreen
      ? iconStyles.medium
      : iconStyles.large;
  }, [isSmallScreen, isMediumScreen, iconStyles]);

  // Extract UTM source from URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const source = params.get('utm_source') || 'direct';
    setUtmSource(source);
  }, [location.search]);

  // Load country codes on component mount
  useEffect(() => {
    let isMounted = true;
    
    const loadCountryCodes = async () => {
      try {
        const codes = await fetchCountryCodes();
        if (isMounted) {
          setCountryCodes(codes);
        }
      } catch (error) {
        console.error('Failed to load country codes:', error);
      }
    };
    
    loadCountryCodes();
    
    return () => {
      isMounted = false;
    };
  }, []);

  // Optimized debounced search functions with proper cleanup
  const debouncedCitySearch = useCallback(
    debounce(async (query) => {
      if (!query || query.length < 2) {
        setCityOptions([]);
        return;
      }

      setLoading(prev => ({ ...prev, city: true }));
      try {
        const results = await searchLocations(query, 'city');
        setCityOptions(results);
      } catch (error) {
        console.error('City search failed:', error);
        setCityOptions([]);
      } finally {
        setLoading(prev => ({ ...prev, city: false }));
      }
    }, 500), // Increased debounce time for better performance
    []
  );

  const debouncedAreaSearch = useCallback(
    debounce(async (query) => {
      if (!formData.city || !query || query.length < 2) {
        setAreaOptions([]);
        return;
      }
      
      setLoading(prev => ({ ...prev, area: true }));
      try {
        const results = await searchLocations(query, 'area', formData.city.label);
        setAreaOptions(results);
      } catch (error) {
        console.error('Area search failed:', error);
        setAreaOptions([]);
      } finally {
        setLoading(prev => ({ ...prev, area: false }));
      }
    }, 500), // Increased debounce time for better performance
    [formData.city]
  );

  // Cleanup debounced functions on unmount
  useEffect(() => {
    return () => {
      debouncedCitySearch.cancel();
      debouncedAreaSearch.cancel();
    };
  }, [debouncedCitySearch, debouncedAreaSearch]);

  // Optimized form input handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow numbers and limit to 10 digits
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }, []);

  // Memoize phone validation function
  const isPhoneValid = useCallback((phone) => {
    return phone.length === 10;
  }, []);

  // Optimized form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    // Validation
    if (!formData.email || !formData.name || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    if (!isPhoneValid(formData.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitToGoogleSheets(formData);
      navigate('/thank-you', { 
        state: { 
          name: formData.name,
          email: formData.email 
        } 
      });
    } catch (error) {
      alert('Submission might have failed. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting, isPhoneValid, navigate]);

  // Optimized form submission function
  const submitToGoogleSheets = useCallback(async (formData) => {
    try {
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbz45poihO1GSt_f-UxHHWltKWHh8mDNyaXPcFzbIURMvTVKj1qPn9STBILUaMiGme7r/exec';
      const payload = {
        email: formData.email,
        name: formData.name,
        phone: `${formData.countryCode}${formData.phone}`,
        license: formData.license === 'yes' ? 'yes' : 'no',
        locality: `${formData?.city || '' }, ${formData?.area || ''}`,
        adName: 'Signup Form',
        leadSource: 'Website-'+utmSource,
      };
      
      // Submit to Google Sheets
      const googleSheetsPromise = fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Submit to Cratio webhook
      const cratioPayload = {
        ...payload,
        source: utmSource,
        timestamp: new Date().toISOString()
      };

      const cratioPromise = fetch(import.meta.env.VITE_CRATIO_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(cratioPayload)
      });

      // Execute both requests in parallel for better performance
      const [googleResponse, cratioResponse] = await Promise.all([
        googleSheetsPromise,
        cratioPromise
      ]);
      
      if (cratioResponse.type === 'opaque') {
        console.log('Cratio webhook request sent successfully');
      }

      return { status: 'success' };
    } catch (error) {
      console.error('Form submission error:', error);
      throw error;
    }
  }, [utmSource]);

  // Memoize static styles
  const scrollingTextStyle = useMemo(() => ({
    '.animate-scroll': {
      animation: 'scroll 60s linear infinite'
    },
    '@keyframes scroll': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' }
    }
  }), []);

  return (
    <div className="bg-logoWhite">
      <ScrollToTop />
      <Helmet>
        <title>Sign Up - InLane Driving School</title>
        <meta
          name="description"
          content="Sign up for driving lessons with InLane - India's modern driving school."
        />
      </Helmet>
      <Navbar2 backgroundColor='#FFFFFF' logo='./LANE_LOGO.svg' burgerMenu='/PurpleHamburger.png' />

      <div className="w-full overflow-hidden flex justify-center items-center mt-28 mb-24">
        <div className="inline-flex whitespace-nowrap">
          <div className="animate-scroll flex sm:gap-16 gap-10">
            {[...Array(7)].map((_, index) => (
              <span 
                key={index} 
                className="text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#00CE84]"
              >
                By Your Side, Every Ride 🚗
              </span>
            ))}
          </div>
        </div>
        <style>{`
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      <Box className="text-left mx-4 md:mx-40 bg-white p-4 md:p-8 rounded-lg border border-gray-200">
        <div className="font-['Bricolage_Grotesque'] max-w-2xl mx-auto text-left font-bold">
          <p className="text-2xl md:text-3xl lg:text-4xl font mb-4">
            We offer 
            <span className="font relative inline-block mx-2">
              <img
                src={pitCrewTag}
                alt="crew"
                className="absolute inset-0 z-10"
              />
              <span className="relative z-20">fun lessons</span>
            </span>
             with cool cars & instructors that match your vibe 🚗
          </p>
        </div>
        <form 
          className="w-full max-w-2xl mx-auto font-['Bricolage_Grotesque']"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4 md:space-y-6 my-8 md:my-16">
            {/* Email Field */}
            <FormField label="Your Email Id" bgColor="bg-[#D1B3FF]">
              <TextField
                fullWidth
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                className="bg-transparent"
                placeholder="Enter your email"
                inputProps={{
                  'aria-label': 'Email',
                  style: { fontFamily: "Bricolage Grotesque" }
                }}
                InputLabelProps={{ style: { fontFamily: "Bricolage Grotesque" } }}
              />
            </FormField>
            <div className="h-6"></div>
            {/* Name Field */}
            <FormField label="Your Name" bgColor="bg-[#D9FF7A]">
              <TextField
                fullWidth
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent"
                placeholder='Enter your name'
                inputProps={{ 
                  'aria-label': 'Name',
                  style: { fontFamily: "Bricolage Grotesque" } 
                }}
                InputLabelProps={{ style: { fontFamily: "Bricolage Grotesque" } }}
              />
            </FormField>
            <div className="h-6"></div>
            {/* Phone Number Field with Country Code */}
            <FormField label="Your Phone Number" bgColor="bg-[#00CE84]">
              <div className="flex gap-2">
                <FormControl className="w-28">
                  <Select
                    value={formData.countryCode}
                    name="countryCode"
                    onChange={handleChange}
                    className="w-28"
                    renderValue={(selected) => {
                      const country = countryCodes.find(c => c.code === selected);
                      return (
                        <div className="flex items-center">
                          {country && country.flag && <img src={country.flag} alt={country.name} className="w-6 h-4 mr-2" />}
                          {country ? country.code : selected}
                        </div>
                      );
                    }}
                  >
                    {countryCodes.map(country => (
                      <MenuItem key={country.code} value={country.code}>
                        <div className="flex items-center">
                          {country.flag && <img src={country.flag} alt={country.name} className="w-6 h-4 mr-2" />}
                          {country.code} - {country.name}
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  name="phone"
                  type="tel"
                  className='flex-1'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  error={formData.phone.length > 0 && !isPhoneValid(formData.phone)}
                  helperText={formData.phone.length > 0 && !isPhoneValid(formData.phone) ? "Please enter a valid 10-digit number" : ""}
                  placeholder="Enter phone number"
                  InputLabelProps={{ style: { fontFamily: "Bricolage Grotesque" } }}
                  inputProps={{
                    'aria-label': 'Phone Number',
                    maxLength: 10,
                    style: { fontFamily: "Bricolage Grotesque" }
                  }}
                />
              </div>
            </FormField>
            <div className="h-6"></div>
            {/* License Radio Group */}
            <FormField label="Do You Have A Four Wheeler (4W) Driver's License?" bgColor="bg-[#D1B3FF]">
              <RadioGroup
                row
                name="license"
                value={formData.license}
                onChange={handleChange}
                aria-label="License"
              >
                <FormControlLabel 
                  value="yes" 
                  control={<Radio className="text-[#00CE84]" />} 
                  label={<Typography className="font-['Bricolage_Grotesque']">Yes</Typography>} 
                />
                <FormControlLabel 
                  value="no" 
                  control={<Radio className="text-[#00CE84]" />} 
                  label={<Typography className="font-['Bricolage_Grotesque']">No</Typography>}  
                />
              </RadioGroup>
            </FormField>
            <div className="h-6"></div>
            {/* City and Area Selection */}
            <FormField label="Which Locality Are You Based out of?" bgColor="bg-[#D9FF7A]">
              <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={["places"]}>
                <LocationSelector formData={formData} setFormData={setFormData} />
              </APIProvider>
            </FormField>
            <div className="h-6"></div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <Rocket color={IconStyle} />
                  )
                }
                sx={{
                  background: isSubmitting 
                    ? "rgba(0, 206, 132, 0.7)" 
                    : "linear-gradient(90deg, #00CE84 0%, #00BC78 100%)",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Bricolage Grotesque",
                  textDecoration: "none",
                  textTransform: "none",
                  "&:hover": {
                    background: isSubmitting 
                      ? "rgba(0, 206, 132, 0.7)" 
                      : "linear-gradient(90deg, #00CE84 0%, #00BC78 100%)",
                  },
                  "&:disabled": {
                    color: "white",
                    cursor: "not-allowed",
                  },
                  border: "2px solid #FFFFFF",
                  borderRadius: "50px",
                  padding: {
                    xs: "10px 20px",
                    md: "6px 68px",
                  },
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "24px" },
                  whiteSpace: "nowrap",
                  boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.35)",
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </div>
        </form>
      </Box>
      
      <div className="flex justify-center items-center mt-52">
      </div>
      <Footer />
    </div>
  );
};

export default Signup;