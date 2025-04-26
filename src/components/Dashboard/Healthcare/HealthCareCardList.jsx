import React from "react";
import { HealthCareCard } from "./HealthCareCard";

export const HealthCareCardList = ({ healthCareCards }) => {
  return (
    <section className="flex justify-between">
      {healthCareCards.map((card) => (
        <HealthCareCard
          content={card.content}
          icon={card.icon}
          hexColor={card.hexColor}
          title={card.title}
        />
      ))}
    </section>
  );
};
