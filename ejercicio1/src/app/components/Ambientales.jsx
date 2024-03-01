"use client";
import React from "react";

const Ambiental = ({ proyectoData }) => {
  return (
    <div>
      <div className="eleProyect">
      <p className="bold">{proyectoData.catSel}</p>
        <p className="bold">${proyectoData.inversion}</p>
      </div>
      <div className="eleProyect">
        <p className="bold">{proyectoData.descripcion}</p>
        <p>{proyectoData.fechaInicio}</p>
      </div>
    </div>
  );
};

export default Ambiental;
