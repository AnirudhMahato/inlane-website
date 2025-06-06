import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
// ... other imports remain the same

const Blog = () => {
  // ... existing state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const debounceTimerRef = useRef(null);
  
  // ... other existing state and variables

  // Memoized category field mapping to prevent recreation on every render
  const categoryFieldMap = useMemo(() => ({
    "Everything Cars 🚗": "everythingCars",
    "RTO Queries❓": "rtoQueries",
    "The New Driver's Circle 😊🛞": "theNewDriversCircle",
    "Lane Updates 📧": "laneUpdates",
    "Road trips🛣️": "roadTrips",
  }), []);

  // Optimized search handler with input validation
  const handleSearch = useCallback((e) => {
    const value = e.target.value;
    
    // Immediate UI update
    setSearchQuery(value);

    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer for debounced search
    debounceTimerRef.current = setTimeout(() => {
      // Only trigger search if value actually changed
      setDebouncedSearchQuery(prevQuery => {
        if (prevQuery !== value) {
          setCurrentPage(1); // Reset to first page only when search actually changes
          return value;
        }
        return prevQuery;
      });
    }, 300);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  // Memoized query parameters builder
  const buildQueryParams = useCallback((page, category, searchTerm) => {
    const queryParams = {
      content_type: "blog",
      limit: postsPerPage,
      skip: (page - 1) * postsPerPage,
    };

    // Add category filter if not "All"
    if (category !== "All") {
      const contentfulField = categoryFieldMap[category];
      if (contentfulField) {
        queryParams[`fields.${contentfulField}`] = true;
      }
    }

    // Add search query if present
    if (searchTerm && searchTerm.trim()) {
      queryParams.query = searchTerm.trim();
    }

    return queryParams;
  }, [categoryFieldMap, postsPerPage]);

  // Memoized post transformer
  const transformPost = useCallback((item) => ({
    id: item.sys.id,
    title: item.fields.title || "Untitled",
    excerpt:
      item.fields.blogSummary?.content?.[0]?.content?.[0]?.value ||
      "No description available",
    categories: getPostCategories(item.fields),
    image: item.fields.image?.fields?.file?.url || null,
    contentType: item.sys.contentType.sys.id,
    miniBlog: item.fields.miniBlog || false,
  }), []);

  // Optimized useEffect for fetching posts
  useEffect(() => {
    let isActive = true;
    let timeoutId;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const queryParams = buildQueryParams(currentPage, selectedCategory, debouncedSearchQuery);
        const response = await contentfulClient.getEntries(queryParams);

        if (!isActive) return;

        setTotalItems(response.total);

        const transformedPosts = response.items.map(transformPost);
        setPosts(transformedPosts);

      } catch (error) {
        if (!isActive) return;
        console.error("Error details:", error);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    // Small delay to batch rapid state changes
    timeoutId = setTimeout(fetchPosts, 50);

    return () => {
      isActive = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentPage, selectedCategory, debouncedSearchQuery, buildQueryParams, transformPost]);

  // Optimized category change handler
  const handleCategoryChange = useCallback((category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      setCurrentPage(1);
    }
  }, [selectedCategory]);

  // ... rest of your component remains the same

  return (
    <>
      {/* ... existing JSX ... */}
      
      <div className="relative mb-6 mx-auto w-full md:w-1/2 max-w-4xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-16 pr-4 sm:py-2 border placeholder:text-2xl border-gray-300 bg-[#D1B3FF] opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D1B3FF] placeholder:font-blog placeholder:font-semibold h-[60px] placeholder:pl-6 placeholder:text-black text-xl transition-all duration-200"
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search blog posts"
          autoComplete="off"
          spellCheck="false"
        />
        <SearchIcon
          className="absolute left-1.5 top-1/2 transform -translate-y-1/2 text-white bg-[#B28fff] p-2 rounded-full pointer-events-none"
          size={48}
          aria-hidden="true"
        />
      </div>

      {/* Optimized category buttons */}
      <div className="flex flex-wrap gap-2 mb-10 sm:mb-12 justify-center items-center mt-4 sm:mt-8">
        <div className="max-w-3xl flex flex-wrap sm:gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`px-4 sm:py-3 py-1.5 rounded-full font-blog sm:text-2xl text-md font-medium transition-colors border m-1 ${
                categoryBorderColors[category]
              } ${
                selectedCategory === category
                  ? "!bg-[#D9FF7A] text-gray-700"
                  : " hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryChange(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ... rest of your JSX remains the same ... */}
    </>
  );
};

export default Blog;