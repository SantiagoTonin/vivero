import React, { useEffect, useState } from "react";
import { getCustomProductRequest } from "./../../api/product.api";

function VerProductos() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const response = await getCustomProductRequest();
      setImageList(response.data);
    }

    loadImages();
  }, []);

  // const [product, setProduct] = useState([]);

  // useEffect(() => {

  //     async function loadProducts() {
  //         const response = await getCustomProductRequest();
  //         setProduct(response.data);
  //         console.log(response.data);
  //     }

  //     loadProducts();

  // }, [])

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          {imageList.map(
            (
              product,
              i //"i" es la iteración de map.
            ) => (
              <div className="card" key={i}>
                {/* <img src={"http://localhost:4000/" + product}
                                className="card-img-top" 
                                alt="..."
                                style={{scale: ".75"}}/> */}
                <img
                  src={product.data}
                  className="card-img-top"
                  alt="..."
                  style={{ scale: ".75" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.summary}</p>
                  <p className="card-text">$ {product.price}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default VerProductos;
