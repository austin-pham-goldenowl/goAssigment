import React from "react";
import _Drawer from "../common/_Drawer";

const CategoryDrawerComp = () => {
  const genreList = [
    "Action",
    "Action-adventure",
    "Adventure",
    "Role-playing",
    "Simulation",
    "Strategy",
    "Sports",
    "Other notable genres",
    "Idle gaming"
  ];
  return <_Drawer list={genreList} text="Category"/>;
};

export default CategoryDrawerComp;
