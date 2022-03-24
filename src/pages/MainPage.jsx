import React, {useCallback, useEffect, useState} from "react";
import {Button} from "@mui/material";

function MainPage() {
  const [test, setTest] = useState(1);

  const handleClick = () => {
    setTest(test + 1);
  };

  useEffect(() => {
    console.log("rerender");
  }, []);

  // useCallback()

  return (
    <React.Fragment>
      <Button variant="text" onClick={(e) => handleClick()}>
        Click => {test}
      </Button>
    </React.Fragment>
  );
}

export default MainPage;
