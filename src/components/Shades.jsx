import React, { useEffect, useState, useRef } from "react";
import Values from "values.js";
import isColor from "is-color";
import Shade from "./Shade";

const Shades = ({ color }) => {
  const [shades, setShades] = useState([]);

  const audioRef = useRef();

  const createShades = () => {
    const shades = new Values(color).shades(1);
    setShades(shades);
  };

  useEffect(() => {
    if (isColor(color)) {
      createShades();
    }
  }, [color]);

  const onColorCopy = () => {
    audioRef.current.play();
  };

  return (
    <div className="shades">
      <audio ref={audioRef} src={require("../assets/audio.mp3")}></audio>
      {shades.map((shade) => (
        <Shade shade={shade} onColorCopy={onColorCopy} />
      ))}
    </div>
  );
};

export default Shades;
