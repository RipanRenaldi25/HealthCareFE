import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BlogList from "./BlogList";

const HealthBlog = () => {
  const [blogs, setBlogs] = useState([1, 2]);
  return (
    <div className="p-4 flex flex-col gap-2">
      <header className="flex justify-between">
        <h1>Health blog updates</h1>
        <NavLink to="" className="text-blue-500">
          View All
        </NavLink>
      </header>
      <section>
        <BlogList blogs={blogs} />
      </section>
    </div>
  );
};

export default HealthBlog;
