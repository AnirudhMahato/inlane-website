import React, { useState, useEffect, useCallback } from "react";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { createClient } from "contentful";
import { useNavigate } from "react-router-dom";

// Create client instance outside component to prevent re-creation
const contentfulClient = createClient({
  space: "m7qe3du2pj2h",
  accessToken: "9B9TTpmwujLpTufPBXwU7FKpPpmmt-lpMTtsGvmzkVE",
});

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [contentTypes, setContentTypes] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const categories = [
    "All",
    "Everything Cars 🚗",
    "RTO Queries❓",
    "The New Driver's Circle 😊🛞",
    "Lane Updates 📧",
    "Road trips🛣️",
  ];
  const categoryBorderColors = {
    "Everything Cars 🚗": "border-[#00CE84]",
    "RTO Queries❓": "border-[#D1B3FF]",
    "The New Driver's Circle 😊🛞": "border-green-300",
    "Lane Updates 📧": "border-yellow-300",
    "Road trips🛣️": "border-orange-400",
    All: "border-lime-400", // Default color for "All"
  };
  const postsPerPage = 6;
  const totalPages = Math.ceil(totalItems / postsPerPage);

  // Helper function to get categories for a post
  const getPostCategories = (fields) => {
    const categoryMap = {
      everythingCars: "Everything Cars 🚗",
      rtoQueries: "RTO Queries❓",
      theNewDriversCircle: "The New Driver's Circle 😊🛞",
      laneUpdates: "Lane Updates 📧",
      roadTrips: "Road trips🛣️",
    };

    return Object.entries(categoryMap)
      .filter(([key]) => fields[key] === true)
      .map(([, value]) => value);
  };

  // Handler for blog post click
  const handleBlogClick = useCallback(
    (postId) => {
      navigate(`/blog/${postId}`);
    },
    [navigate]
  );

  // Fetch content types only once on mount
  useEffect(() => {
    const fetchContentTypes = async () => {
      try {
        const response = await contentfulClient.getContentTypes();
        setContentTypes(response.items);
      } catch (error) {
        console.error("Error fetching content types:", error);
        setError(
          "Failed to load content structure. Please check your Contentful configuration."
        );
      }
    };

    fetchContentTypes();
  }, []);

  // Fetch posts when filters change
  useEffect(() => {
    let isActive = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        let queryParams = {
          content_type: "blog",
          limit: postsPerPage,
          skip: (currentPage - 1) * postsPerPage,
        };

        // Add category filter if not "All"
        if (selectedCategory !== "All") {
          const categoryFieldMap = {
            "Everything Cars 🚗": "everythingCars",
            "RTO Queries❓": "rtoQueries",
            "The New Driver's Circle 😊🛞": "theNewDriversCircle",
            "Lane Updates 📧": "laneUpdates",
            "Road trips🛣️": "roadTrips",
          };

          const contentfulField = categoryFieldMap[selectedCategory];
          if (contentfulField) {
            queryParams[`fields.${contentfulField}`] = true;
          }
        }

        // Add search query if present
        if (searchQuery) {
          queryParams.query = searchQuery;
        }

        const response = await contentfulClient.getEntries(queryParams);

        const totalItems = response.total; // Get the total number of posts
        setTotalItems(totalItems); // Update the state

        if (!isActive) return;

        const transformedPosts = response.items.map((item) => {
          console.log("Item", item);
          return {
            id: item.sys.id,
            title: item.fields.title || "Untitled",
            excerpt:
              item.fields.blogSummary?.content?.[0]?.content?.[0]?.value ||
              "No description available",
            categories: getPostCategories(item.fields),
            image: item.fields.image?.fields?.file?.url || null,
            contentType: item.sys.contentType.sys.id,
            miniBlog: item.fields.miniBlog || false,
          };
        });

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

    const timeoutId = setTimeout(fetchPosts, 300);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [currentPage, selectedCategory, searchQuery]);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
          <h2 className="font-bold mb-2">Error Loading Posts</h2>
          <p>{error}</p>
        </div>
        {contentTypes.length > 0 && (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Available Content Types:</h3>
            <ul className="list-disc list-inside">
              {contentTypes.map((type) => (
                <li key={type.sys.id}>
                  {type.name} ({type.sys.id})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-w-[320px] flex flex-col justify-center">
      <h1 className="text-6xl font-semibold mb-8 text-center text-[#00CE84] hidden sm:block">
        By Your Side, Every Ride 🚗
        <br />
        Every Ride 🚗 By Your Side,
      </h1>

      <h1 className="text-6xl font-semibold p-4 mb-8 text-start text-[#00CE84] sm:hidden block">
        By Your Side
        <br />
        Every Ride 🚗
      </h1>

      <div className="relative mb-6 mx-auto w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="w-full pl-12 pr-4 py-2 border placeholder-gray-900 border-gray-300 bg-[#D1B3FF] opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D1B3FF]"
          value={searchQuery}
          onChange={handleSearch}
        />
        <SearchIcon
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-[#D1B3FF] p-2 rounded-full"
          size={36}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8 justify-center items-center">
        <div className="max-w-2xl flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border-2 ${
                categoryBorderColors[category]
              } ${
                selectedCategory === category
                  ? "bg-[#D9FF7A] text-gray-700"
                  : "bg-transparent hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[600px] relative">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}

        {!loading && posts.length === 0 ? (
          <div className="text-center text-gray-600 py-12">
            <p className="text-xl">
              {selectedCategory !== "All"
                ? `No blogs found in the "${selectedCategory}" category.`
                : searchQuery
                ? `No blogs found matching "${searchQuery}".`
                : "No blog posts found."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-3 mb-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-[450px] cursor-pointer"
                onClick={() => handleBlogClick(post.id)}
              >
                <div className="h-48">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover p-4 rounded-3xl"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 hover:text-[#00CE84] transition-colors mt-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  {post.miniBlog && (
                    <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                      Mini Blog
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {posts.length > 0 && (
        <div className="flex justify-center items-center space-x-4">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1 || loading}
          >
            <ChevronLeftIcon size={24} />
          </button>
          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={loading || currentPage === totalPages}
          >
            <ChevronRightIcon size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
