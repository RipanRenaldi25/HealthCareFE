import React from "react";

export const HealthCareCard = ({
  icon,
  title,
  content,
  hexColor,
  customClass,
}) => {
  return (
    <section
      className={`flex gap-2 p-3 items-center bg-white text-sm lg:w-48 shadow-md rounded-lg ${customClass}`}
    >
      <div className={`text-[${hexColor}] text-3xl `}>{icon}</div>
      <div>
        <h1>{title}</h1>
        <p className={`text-[${hexColor}]`}>{content}</p>
      </div>
    </section>
  );
};
