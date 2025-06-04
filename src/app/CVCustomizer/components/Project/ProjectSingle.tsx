import { Projects } from "@/app/types/formTypes";
import React, { Dispatch, SetStateAction } from "react";
import { Bullets } from "../Bullets/Bullets";
import { Autocomplete, TextField, Chip } from "@mui/material";

type ProjectSingleProps = {
  project: Projects;
  setProjectArr: Dispatch<SetStateAction<Projects[]>>;
  index: number;
};

export const ProjectSingle = ({
  index,
  project,
  setProjectArr,
}: ProjectSingleProps) => {
  const handleChange = (
    index: number,
    fieldName: keyof Projects,
    value: string
  ) => {
    setProjectArr((prev) => {
      return prev.map((entry, i) => {
        if (index === i) {
          return { ...entry, [fieldName]: value };
        }
        return entry;
      });
    });
  };

  const removeProject = (index: number) => {
    setProjectArr((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  };

  const setBullets: Dispatch<SetStateAction<string[]>> = (value) => {
    setProjectArr((prev) =>
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

  const handleTechnologiesChange = (_event: any, newValue: string[]) => {
    setProjectArr((prev) =>
      prev.map((entry, i) => {
        if (i === index) {
          return { ...entry, technologies: newValue };
        }
        return entry;
      })
    );
  };

  return (
    <>
      {Object.entries(project).map(([fieldName, value]) => {
        if (fieldName === "bullets") return null;

        if (fieldName === "technologies") {
          return (
            <div key={fieldName}>
              <label>{fieldName}</label>
              <Autocomplete
                multiple
                freeSolo
                options={[]} 
                value={project.technologies}
                onChange={handleTechnologiesChange}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, idx: number) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index: idx })}
                      key={idx}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="Technologies" />
                )}
              />
            </div>
          );
        }

        return (
          <div key={fieldName}>
            <label>{fieldName}</label>
            <input
              placeholder={fieldName}
              value={value as string}
              onChange={(e) =>
                handleChange(index, fieldName as keyof Projects, e.target.value)
              }
            />
          </div>
        );
      })}

      <Bullets
        bullets={project.bullets}
        setBullets={setBullets}
        bulletType="Projects"
      />

      <button onClick={() => removeProject(index)}>X</button>
    </>
  );
};
