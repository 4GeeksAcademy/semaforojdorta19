import React, { useState } from "react";
import Light from "./Light";
import { set } from "lodash";
import Button from "react-bootstrap/Button";

export const Trafficlight = () => {
  const [activeLight, setactiveLight] = useState("red");
  const colores = ["green", "yellow", "red"];
  // const color= activeLight  cambiarColor={setactiveLight};
  const cambiarColor = () => {
    if (activeLight == "green") {
      setactiveLight("yellow");
    }
    if (activeLight == "yellow") {
      setactiveLight("red");
    }
    if (activeLight == "red") {
      setactiveLight("green");
    }
  };
  return (
    <>
      {colores.map((item, index) => {
        return (
          <Light
            color={item}
            activeLight={activeLight}
            colorSet={setactiveLight}
          />
        );
      })}

      <Button
        onClick={() => {
          cambiarColor();
        }}
        variant="primary"
      >
        Change
      </Button>
    </>
  );
};
