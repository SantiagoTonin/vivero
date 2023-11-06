import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import css from "./Signup.module.css";
import { createUserRequest } from "../../api/user.api";
import { Form, Formik } from "formik";
import { LOGIN } from "../../config/routes/paths";

function Signup() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          admin: 0,
          vendor: 1,
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createUserRequest(values);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className={css.mainContainerSignup}>
              <div className={css.signupContainer}>
                <div className={css.logoTitle}>
                  <h1>Crea una cuenta</h1>
                </div>
                <div className={css.formContainer}>
                  <label>
                    Nombre: <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    required
                  />

                    <label>
                      Apellidos: <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      required
                    />

                    <label>
                      Correo: <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      required
                    />

                  <label>
                    Contraseña: <span>*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                  <input type="submit" value="Registarse" />
                </div>
                <p>
                  ¿Ya tienes una cuenta? <Link to={LOGIN}>Ingresar</Link>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
