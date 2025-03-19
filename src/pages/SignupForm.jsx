import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeu8zq1RNz7RTAyoEYf9LAtuJ6EWkEzCw67Rqv7J2Gd-rDqMQ/viewform?embedded=true"
        className="w-full max-w-2xl h-[90vh] border-none"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
    
  );
};

export default Page;