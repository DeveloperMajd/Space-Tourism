import { useState } from "react";

export const Technology = ({ data }: any) => {
  const [currentSelection, setCurrentSelection] = useState(data[0].name);
  return <div>Technology</div>;
};
