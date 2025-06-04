import React, { Dispatch, SetStateAction } from "react";

// so this will be a seperate component, but will get it list from the outside
type BulletsProps = {
  bullets: string[];
  setBullets: Dispatch<SetStateAction<string[]>>;
  bulletType: "Projects" | "Experience";
};
export const Bullets = ({ bullets, setBullets, bulletType }: BulletsProps) => {
  const addBullets = () => {
    setBullets((prev) => [...prev, ""]);
  };
  const handleChange = (index: number, value: string) => {
    setBullets((prev) => {
      return prev.map((entry, i) => {
        if (i === index) {
          return value;
        }
        return entry;
      });
    });
  };
  const removeBullets = (index:number)=>{
    setBullets((prev)=>{
        return prev.filter((_,i)=>i!=index)
    })
  }
  return (
    <div>
        <h3>Pointers</h3>
      <button onClick={addBullets}>+</button>
      <div>
        {bullets.map((entry, index) => {
          return (
            <div key={`${bulletType} bullet#${index}`}>
              <input
                placeholder={`Bullet ${index}`}
                value={entry}
                onChange={(e) => {
                  handleChange(index, e.target.value)
                }}
              />
              <button onClick={()=>{
                removeBullets(index)
              }}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
