"use client";
import React from "react";

const NoAmbiental = ({ proyectoData }) => {
  return (
    <div>
      <div className="eleProyect">
        <p className="bold">{proyectoData.descripcion}</p>
        <p className="bold">${proyectoData.inversion}</p>
      </div>
      <div className="eleProyect">
        <p>Categoría: {proyectoData.catSel}</p>
        <p>{proyectoData.fechaInicio}</p>
      </div>
    </div>
  );
};

export default NoAmbiental;
