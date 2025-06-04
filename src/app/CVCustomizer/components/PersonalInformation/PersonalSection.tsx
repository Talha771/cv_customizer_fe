import { PersonalInfo } from "@/app/types/formTypes";
import React, { Dispatch, SetStateAction } from "react";

type PersonalSectionProps = {
  personalInfo: PersonalInfo;
  setPersonalInfo: Dispatch<SetStateAction<PersonalInfo>>;
};
export const PersonalSection = ({
  personalInfo,
  setPersonalInfo,
}: PersonalSectionProps) => {
  return (
    <div id="Personal Information">
      <h1>Personal Information</h1>
      <div>
        {Object.entries(personalInfo).map(([fieldName, value]) => {
          return (
            <div key={fieldName}>
              <label>{fieldName}</label>
              <input
                placeholder={fieldName}
                value={value}
                onChange={(e) =>
                  setPersonalInfo((prev) => {
                    return {
                      ...prev,
                      [fieldName]: e.target.value,
                    };
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
