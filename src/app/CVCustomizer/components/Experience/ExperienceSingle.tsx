import { Experience } from "@/app/types/formTypes";
import React, { Dispatch, SetStateAction, use, useState } from "react";
import { Bullets } from "../Bullets/Bullets";

type ExperienceSingleProps = {
  index: number;
  experience: Experience;
  setExperience: Dispatch<SetStateAction<Experience[]>>;
//   bullets: string[];
//   setBullets: Dispatch<SetStateAction<string[]>>;
};
export const ExperienceSingle = ({
    index,
    experience,
    setExperience,
  }: ExperienceSingleProps) => {
    const handleChange = (
      index: number,
      field: keyof Experience,
      value: string
    ) => {
      setExperience((prev) =>
        prev.map((entry, i) =>
          i === index ? { ...entry, [field]: value } : entry
        )
      );
    };
  
    const removeExperience = (index: number) => {
      setExperience((prev) => prev.filter((_, i) => i !== index));
    };
    const setBullets: Dispatch<SetStateAction<string[]>> = (value) => {
        setExperience((prev) =>
          prev.map((entry, i) => {
            if (i !== index) return entry;
            const newBullets =
              typeof value === "function" ? value(entry.bullets || []) : value;
            return {
              ...entry,
              bullets: newBullets,
            };
          })
        );
      };
      
    return (
      <>
        {Object.entries(experience)
          .filter(([key]) => key !== "bullets")
          .map(([fieldName, value]) => (
            <div key={fieldName}>
              <label>{fieldName}</label>
              <input
                placeholder={fieldName}
                value={value}
                onChange={(e) =>
                  handleChange(index, fieldName as keyof Experience, e.target.value)
                }
              />
            </div>
          ))}
        <Bullets
          bullets={experience.bullets}
          setBullets={setBullets}
          bulletType="Experience"
        />
        <button onClick={() => removeExperience(index)}>X</button>
      </>
    );
  };
  
