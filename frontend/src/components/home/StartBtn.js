import * as React from "react";
import Button from "@mui/material/Button";

function StartBtn(props) {
  return (
    <div>
      {props.subtitle}
      <br />
      <Button
        variant="contained"
        color="primary"
        size="large"
        href={props.to}
        style={{ width: "300px " }}
      >
        <span style={{ fontSize: "20px" }}>{props.title}</span>
      </Button>
    </div>
  );
}

export default StartBtn;
