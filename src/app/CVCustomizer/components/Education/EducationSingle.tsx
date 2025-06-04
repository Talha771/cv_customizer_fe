import { Education } from "@/app/types/formTypes";
import React, { Dispatch, SetStateAction } from "react";

// Define the props for the component
interface EducationSingleProps {
  education: Education; // Education entry, should be an object, e.g., { school: 'Some School', degree: 'BSc' }
  index: number;
  setEducationArr: Dispatch<SetStateAction<Education[]>>;
}

export const EducationSingle: React.FC<EducationSingleProps> = ({
  education,
  index,
  setEducationArr,
}) => {
  // Handle change to update the education entry
  const handleChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    setEducationArr((prev) => {
      return prev.map((entry, i) => {
        if (index === i) {
          return { ...entry, [field]: value };
        }
        return entry;
      });
    });
  };

  const removeEducation = (index: number) => {
    setEducationArr((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      {Object.entries(education).map(([fieldName, value]) => (
        <div key={fieldName}>
          <label>{fieldName}</label>
          <input
            placeholder={fieldName}
            value={value}
            onChange={(e) => {
              handleChange(index, fieldName as keyof Education, e.target.value);
            }}
          />
        </div>
      ))}
      <button onClick={() => removeEducation(index)}>X</button>
    </>
  );
};
