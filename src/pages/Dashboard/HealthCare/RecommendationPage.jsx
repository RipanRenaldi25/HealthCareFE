import RecommendationLetter from "@/components/Letter/RecommendationLetter";
import React from "react";
import logoPuskesmas from "../../../assets/logo-puskesmas.png";

const RecommendationPage = () => {
  return (
    <article className="relative">
      <img
        src={logoPuskesmas}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 size-96 z-10 pointer-events-none select-none"
      />
      <RecommendationLetter />
    </article>
  );
};

export default RecommendationPage;
