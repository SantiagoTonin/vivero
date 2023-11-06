import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import css from "./AddProduct.module.css";
import imgLogo from "../../assets/logoVivero.png";
import fondo from "../../assets/fondo-vivero.jpg";
import axios from "axios";
import FormData from 'form-data';



function AddProduct() {
  const [preImg, setpreImg] = useState([]);
  const [imagenFile, setimagenFile] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const changeInput = (e) => {
    let indexImg;

    if (preImg.length > 0) {
      indexImg = preImg[preImg.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifile(e, indexImg);
    let newImgsState = [...preImg, ...newImgsToState];
    setpreImg(newImgsState);

  };




  function readmultifile(e, indexImg) {
    const files = e.currentTarget.files;

    const arrayImages = [];
    const arrayFiles = [];


    Object.keys(files).forEach((i) => {
      const file = files[i];

      arrayFiles.push(file)
      let url = URL.createObjectURL(file);

      arrayImages.push({
        index: indexImg,
        name: file.name,
        url,
        file,
      });
      indexImg++;
    });
    setimagenFile(arrayFiles)
    return arrayImages;
  }


  function deleteImg(indice) {
    const newImgs = preImg.filter(function (element) {
      return element.index !== indice;
    });
    setpreImg(newImgs);
  }

  const [text, setText] = useState("Bienvenido");
  const texts = [
    "Vende tus Productos",
    "De Forma Segura",
    "Rapido y Facil!",
    "Sin Complicaciones",
  ];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(texts[index]);
      // eslint-disable-next-line
      index = (index + 1) % texts.length;
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  
  const datos = async (datas) => {
    
    navigate("/");
    const formData = new FormData();
    imagenFile.forEach(file => {
      
      formData.append("image", file);
    })
    
    
    const respuesta = await axios.post("http://localhost:4000/api/products", datas);
    formData.append("id", respuesta.data.id)
    await axios.post("http://localhost:4000/api/images", formData) 
    
  };

  const validarImg = () => {
    return preImg.length > 0;
  };

  const handleReset = () => {
    reset();
    setpreImg([]);
  };



  return (
    <div className={css.container_form}>
      <div className={css.container_info}>
        <img src={fondo} alt="vivero" className={css.imagenFondo} />
        <img src={imgLogo} alt="logo" className={css.logo} />
        <div className={css.cajaTexto}>
          <p className={css.texto}>{text}</p>
        </div>
      </div>
      <div className={css.form_product}>
        <form noValidate onSubmit={handleSubmit(datos)}>
          <div className={css.input_group}>
            <input
              {...register("title", { required: true, maxLength: 20 })}
              required=" "
              type="text"
              className={css.inputs}
            />
            <label className={css.user_label}>Title</label>
          </div>
          {errors.title?.type === "required" && (
            <p className={css.errorText}>*El campo no puede estar vacio</p>
          )}
          {errors.title?.type === "maxLength" && (
            <p className={css.errorText}>*Maximo de caracteres es de 20</p>
          )}

          <div className={css.input_group}>
            <input
              required=" "
              type="text"
              {...register("summary", { required: true, maxLength: 20 })}
              className={css.inputs}
            />
            <label className={css.user_label}>Summary</label>
          </div>
          {errors.summary?.type === "required" && (
            <p className={css.errorText}>*El campo no puede estar vacio</p>
          )}
          {errors.summary?.type === "maxLength" && (
            <p className={css.errorText}>*Maximo de caracteres es de 20</p>
          )}
          <div className={css.input_group}>
            <input
              required=" "
              type="text"
              {...register("price", { required: true, pattern: /^[0-9][^,0-9]/ })}
              className={css.inputs}
            />
            <label className={css.user_label}>Precio</label>
          </div>
          {errors.price?.type === "required" && (
            <p className={css.errorText}>*El campo no puede estar vacio</p>
          )}
          {errors.price?.type === "pattern" && (
            <p className={css.errorText}>*Caracter no valido</p>
          )}
          <div className={css.input_group}>
            <input
              required=" "
              type="text"
              {...register("discount", { required: true, pattern: /^[0-9]/ })}
              className={css.inputs}
            />
            <label className={css.user_label}>Descuento</label>
          </div>
          {errors.discount?.type === "required" && (
            <p className={css.errorText}>*El campo no puede estar vacio</p>
          )}
          {errors.discount?.type === "pattern" && (
            <p className={css.errorText}>*Solo Digitos</p>
          )}
          <div className={css.input_group}>
            <input
              required=" "
              type="text"
              {...register("quantity", { required: true, pattern: /^[0-9]/ })}
              className={css.inputs}
            />
            <label className={css.user_label}>Unidades disponibles</label>
          </div>
          {errors.quantity?.type === "required" && (
            <p className={css.errorText}>*El campo no puede estar vacio</p>
          )}
          {errors.quantity?.type === "pattern" && (
            <p className={css.errorText}>*Solo Digitos</p>
          )}
          <label className={css.btnLabel}>
            <div className={css.btnSelector}>
              <span>Agregar Imagen </span>
              <input
                {...register("data", { value: [], validate: validarImg })}
                type="file"
                multiple
                name="data"
                hidden
                onChange={changeInput}
              />
            </div>
          </label>
          {errors.data && (
            <p className={css.errorText}>*El campo no puede estar vacio</p>
          )}
          {preImg.length > 0 && (
            <div className={css.filaImg}>
              {preImg.map((imagen) => {
                return (
                  <div className={css.caja} key={imagen.index}>
                    <button
                      className={css.btnDelete}
                      onClick={deleteImg.bind(this, imagen.index)}
                    >
                      X
                    </button>
                    <img
                      alt="algo"
                      src={imagen.url}
                      data-toggle="modal"
                      data-target="#ModalPreViewImg"
                      className={css.img_responsive}
                    ></img>
                  </div>
                );
              })}
            </div>
          )}
          <div className={css.input_group}>
            <textarea
              {...register("content", { required: false, minLength: 20 })}
              className={css.textoDescriptivo} cols="50" rows="10" placeholder="Ingrese  una descripcion del producto"></textarea>
          </div>
          {errors.content?.type === "minLength" && (
            <p className={css.errorText}>*El minimo de caracteres es de 20</p>
          )}
          <div className={css.btnUnder}>
            <button type="submit" className={css.btnSend}>
              Aceptar
            </button>
            <button type="button" onClick={handleReset} className={css.btnSend}>
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
