"use client";
import React, { useState } from "react";
import { electronicaData } from "../electronicaData";

export const ElectronicaList = ({
  allProducts,
  setAllProducts,
  total, 
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.title === product.title)) {
      alert("Este producto ya ha sido agregado al carrito.")
    }
    else {
      setAllProducts([...allProducts, product]);
      setTotal(total + product.price * product.quantity)
    }
  };

  return (
    <>
      <h2 className="titulo-seccion">Sección de Electrónica</h2>
      <div className="container-items">
        {electronicaData.map((item) => (
          <div className="item" key={item.id}>
            <figure>
              <img src={item.urlImage} alt={item.title} className="imgItem"/>
            </figure>
            <div className="info-product">
              <h2 className="titulo-producto-carrito">{item.title}</h2>
              <p className="item-description">{item.description}</p>
              <p className="price">${item.price}</p>
              <button
                className="btn add-cart"
                onClick={() => onAddProduct(item)}
              >
                Añadir al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
