import { useState } from "react";

export const Destination = ({ data }: any) => {
  const [currentSelection, setCurrentSelection] = useState(data[0]);

  return (
    <div>
      {data.map((destination: any, index: number) => (
        <div key={index} onClick={() => setCurrentSelection(destination)} className="mb-6">
          {destination.name}
        </div>
      ))}
      {currentSelection.name}
      {currentSelection.description}
      {currentSelection.distance}
      {currentSelection.travel}
    </div>
  );
};
