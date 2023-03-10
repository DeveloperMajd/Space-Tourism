import { useState } from "react";

export const Crew = ({ data }: any) => {
  const [currentSelection, setCurrentSelection] = useState(data[0].name);

  return <div>Crew</div>;
};
