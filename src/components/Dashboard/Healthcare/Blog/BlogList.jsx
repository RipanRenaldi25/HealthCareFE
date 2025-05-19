import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog, i) => (
        <BlogCard {...blog} key={i} />
      ))}
    </>
  );
};

export default BlogList;
