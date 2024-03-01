"use client";
import React, { useState } from "react";

export const Headers = ({ allProducts, setAllProducts, total, setTotal }) => {
  const [active, setActive] = useState(false);
  const [cantidadProducto, setCantidadProducto] = useState({});

  const onDeleteProduct = (product) => {
    const confEliminar = window.confirm(
      "¿Desea eliminar este elemento del carrito?"
    );

    if (confEliminar) {
      const results = allProducts.filter(
        (item) => item.title !== product.title
      );

      const totalEliminado =
        product.price * (cantidadProducto[product.title] || 1);
      setTotal(total - totalEliminado);
      setAllProducts(results);
    }
  };

  const onClearCart = () => {
    const confEliminarCart = window.confirm("¿Desea vaciar el carrito?");

    if (confEliminarCart) {
      setAllProducts([]);
      setTotal(0);
      setCantidadProducto({});
    }
  };

  //Manejas los cambios en la cantidad del input del carrito
  const handleQuantityChange = (event, product) => {
    const nuevaCantidad = parseInt(event.target.value) || 1;
    const cantidadesAct = {
      ...cantidadProducto,
      [product.title]: nuevaCantidad,
    };


    //calcula el total cuando se actualiza la cantidad de producto
    setCantidadProducto(cantidadesAct);
    const actualizarTotal = allProducts.reduce((productViejo, productNuevo) => {
      return (
        productViejo +
        productNuevo.price * (cantidadesAct[productNuevo.title] || 1)
      );
    }, 0);

    setTotal(actualizarTotal);
  };

  return (
    <header>
      <h1>Almacen Super Mario</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">{allProducts.length}</span>
          </div>
        </div>
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        <label className="lblQuantity">Cantidad:</label>
                        <input
                          className="inpQuantity"
                          type="number"
                          name="quantity"
                          min={1}
                          value={cantidadProducto[product.title] || 1}
                          onChange={(event) =>
                            handleQuantityChange(event, product)
                          }
                        />
                      </span>
                      <div>
                        <img
                          src={product.urlImage}
                          alt={product.title}
                          className="imgCart"
                        />
                      </div>
                      <p className="titulo-producto-carrito">{product.title}</p>
                      <span className="precio-producto-carrito">
                        ${product.price * (cantidadProducto[product.title] || 1)}
                      </span>
                    </div>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    />
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-clear-all" onClick={onClearCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
