"use client";
import React, { useState } from "react";
import Ambiental from "./Ambientales";
import NoAmbiental from "./NoAmbientales";
import "bootstrap/dist/css/bootstrap.min.css";

const Registro = () => {
  const [tipoProyecto, setTipoProyecto] = useState("ambiental");
  const [categoria, setCategoria] = useState("");
  const [inversion, setInversion] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [catPersonalizada, setCatPersonalizada] = useState("");
  const [proyectosAmbi, setProyectosAmbi] = useState([]);
  const [proyectosNoAmbi, setProyectosNoAmbi] = useState([]);

  const handleTipoProyectoChange = (event) => {
    setTipoProyecto(event.target.value);
    setCategoria("");
  };

  const handleCategoriaChange = (event) => {
    const catSelec = event.target.value;
    setCategoria(catSelec);
    if (catSelec !== "Personalizada") {
      setCatPersonalizada("");
    }
  };

  const handleInversionChange = (event) => {
    setInversion(event.target.value);
  };

  const handleFechaInicioChange = (event) => {
    setFechaInicio(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleCatPersoChange = (event) => {
    setCatPersonalizada(event.target.value);
  };

  const totalAmbientales = () => {
    const totAmbiental = proyectosAmbi.reduce(
      (total, proyecto) => total + proyecto.inversion,
      0
    );
    return totAmbiental;
  };

  const totalNoAmbientales = () => {
    const totNoAmbiental = proyectosNoAmbi.reduce(
      (total, proyecto) => total + proyecto.inversion,
      0
    );
    return totNoAmbiental;
  };

  const total = () => {
    const totAm = totalAmbientales();
    const totNoAm = totalNoAmbientales();
    return totAm + totNoAm;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const catSel = categoria === "Personalizada" ? catPersonalizada : categoria;
    const proyecto = {
      tipoProyecto: tipoProyecto,
      catSel: catSel,
      inversion: parseFloat(inversion),
      fechaInicio: fechaInicio,
      descripcion: descripcion,
    };
    if (tipoProyecto == "ambiental") {
      setProyectosAmbi([...proyectosAmbi, proyecto]);
    } else {
      setProyectosNoAmbi([...proyectosNoAmbi, proyecto]);
    }

    setTipoProyecto("ambiental");
    setCategoria("");
    setInversion("");
    setFechaInicio("");
    setDescripcion("");
    setCatPersonalizada("");
  };

  const eliminarProyecto = (index, tipoProyecto) => {
    if (tipoProyecto === "ambiental") {
      const newProyectosAmbi = [...proyectosAmbi];
      newProyectosAmbi.splice(index, 1);
      setProyectosAmbi(newProyectosAmbi);
    } else {
      const newProyectosNoAmbi = [...proyectosNoAmbi];
      newProyectosNoAmbi.splice(index, 1);
      setProyectosNoAmbi(newProyectosNoAmbi);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Presupuesto Proyectos</h1>
        <h1>Total ${total()}</h1>
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="form-label">
                Tipo de Proyecto:
                <select
                  className="form-control"
                  value={tipoProyecto}
                  onChange={handleTipoProyectoChange}
                >
                  <option value="ambiental">Ambiental</option>
                  <option value="no_ambiental">No Ambiental</option>
                </select>
              </label>
            </div>
            <div className="input-group">
              <label className="form-label">
                Categoría:
                <select
                  className="form-control"
                  value={categoria}
                  onChange={handleCategoriaChange}
                >
                  <option value="" disabled hidden>
                    Seleccione una categoría
                  </option>
                  {tipoProyecto === "ambiental" ? (
                    <>
                      <option value="Alimentacion">Alimentación</option>
                      <option value="Transporte">Transporte</option>
                      <option value="Vivienda">Vivienda</option>
                      <option value="Personalizada">Personalizada</option>
                    </>
                  ) : (
                    <>
                      <option value="Desarrollo de Software">
                        Desarrollo de Software
                      </option>
                      <option value="Campaña de Marketing">
                        Campaña de Marketing
                      </option>
                      <option value="Construcción de Infraestructura">
                        Construcción de Infraestructura
                      </option>
                      <option value="Servicios Financieros">
                        Servicios Financieros
                      </option>
                      <option value="Personalizada">Personalizada</option>
                    </>
                  )}
                </select>
                {categoria === "Personalizada" && (
                  <input
                    type="text"
                    value={catPersonalizada}
                    className="form-control"
                    onChange={handleCatPersoChange}
                    placeholder="Ingrese una categoría personalizada"
                    required
                  />
                )}
              </label>
            </div>
            <div className="input-group">
              <label className="form-label">
                Inversión:
                <input
                  type="number"
                  value={inversion}
                  min={1}
                  step={0.01}
                  className="form-control"
                  onChange={handleInversionChange}
                  required
                />
              </label>
            </div>
            <div className="input-group">
              <label className="form-label">
                Fecha de Inicio:
                <input
                  type="date"
                  value={fechaInicio}
                  className="form-control"
                  onChange={handleFechaInicioChange}
                  required
                />
              </label>
            </div>
            <div className="input-group">
              <label className="form-label">
                Descripción:
                <textarea
                  value={descripcion}
                  className="form-control"
                  onChange={handleDescripcionChange}
                  required
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Registrar Proyecto
            </button>
          </form>
        </div>
        <div className="col-6">
          <div className="cardProyecto">
            <h2>Ambientales: ${totalAmbientales()}</h2>
            {proyectosAmbi.map((proyecto, index) => (
              <div key={index}>
                <img
                  src="https://cdn.icon-icons.com/icons2/936/PNG/512/trash_icon-icons.com_73364.png"
                  className="imgEli"
                  onClick={() => eliminarProyecto(index, proyecto.tipoProyecto)}
                />
                <Ambiental proyectoData={proyecto} />
              </div>
            ))}
          </div>
          <div className="cardProyecto">
            <h2>No Ambientales: ${totalNoAmbientales()}</h2>
            {proyectosNoAmbi.map((proyecto, index) => (
              <div key={index}>
                <img
                  src="https://cdn.icon-icons.com/icons2/936/PNG/512/trash_icon-icons.com_73364.png"
                  className="imgEli"
                  onClick={() => eliminarProyecto(index, proyecto.tipoProyecto)}
                />
                <NoAmbiental proyectoData={proyecto} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
