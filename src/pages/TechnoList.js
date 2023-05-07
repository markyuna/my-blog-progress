import React from "react";
import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
    const { technos, handleDeleteTechno } = props;
  return (
    <div className="card wrap">
      <h1>Display all posts</h1>
      <div className="techno-list">
        {technos.map((techno) => (
          <TechnoItem
            key={techno.technoid}
            techno={techno}
            handleDeleteTechno={handleDeleteTechno}
          />
        ))}
      </div>
    </div>
  );
}
