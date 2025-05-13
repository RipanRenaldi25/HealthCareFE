import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <BlogCard {...blog} />
      ))}
    </>
  );
};

export default BlogList;
