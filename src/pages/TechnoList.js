import React from "react";
import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
    const { technos, handleDeleteTechno } = props;
  return (
    <div className="card">
      <h1>Display all posts</h1>
        {technos.map((techno) => (
          <TechnoItem
            key={techno.technoid}
            techno={techno}
            handleDeleteTechno={handleDeleteTechno}
          />
        ))}
    </div>
  );
}
