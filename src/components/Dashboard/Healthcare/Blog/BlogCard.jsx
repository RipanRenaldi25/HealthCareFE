import React from "react";
import { MdOutlineModeComment } from "react-icons/md";
import thumbnail from "../../../../../public/a.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { getDateDifference } from "@/lib/utils";

const BlogCard = ({
  imgUrl = thumbnail,
  title = "title",
  content = "content",
  createdAt = new Date().toISOString(),
}) => {
  return (
    <section className="flex gap-2 relative cursor-pointer hover:bg-gray-200 transition-colors p-2">
      <div className="size-16 bg-red-500 overflow-hidden rounded-md">
        <img
          src={imgUrl}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <i>
              <MdOutlineModeComment />
            </i>
            <p>12</p>
          </div>
          <div className="size-1 bg-black rounded-full"></div>
          <p>{getDateDifference(createdAt)}</p>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2">
        <i>
          <FaAngleRight />
        </i>
      </div>
    </section>
  );
};

export default BlogCard;
