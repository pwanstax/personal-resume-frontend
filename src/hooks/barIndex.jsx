import { useState } from "react";

const useBarIndexHook = (val) => {
  const [barIndex, setBarIndex] = useState(val);
  return { barIndex, setBarIndex };
};

export default useBarIndexHook;
