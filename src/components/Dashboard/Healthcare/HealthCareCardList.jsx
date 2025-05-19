import React from "react";
import { HealthCareCard } from "./HealthCareCard";

export const HealthCareCardList = ({ healthCareCards }) => {
  return (
    <section className="grid grid-cols-[1fr_1fr_1fr]  gap-4">
      {healthCareCards.map((card) => (
        <HealthCareCard
          content={card.content}
          icon={card.icon}
          hexColor={card.hexColor}
          title={card.title}
          key={card.title}
        />
      ))}
    </section>
  );
};
