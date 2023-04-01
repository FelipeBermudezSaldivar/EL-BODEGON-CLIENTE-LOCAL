import facebook from "../images/facebook.png";
import google from "../images/google.png";
import Git from "../images/Git.png";
import Instagram from "../images/Instagram.png";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div class="container col-12">
      <div class="col-12">
        {/* Footer */}
        <footer class="text-center text-lg-start bg-white text-muted">
          {/* Section: Social media */}
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div class="me-5 d-none d-lg-block">
              <span>VISITA NUESTRAS REDES SOCIALES:</span>
            </div>
            {/* Left */}

            {/* Right */}
            <div className={style.socialmedia}>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-facebook-f">
                  <img src={facebook} alt="facebook" width="30px" />
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-google">
                  <img src={google} alt="" width="25px" />
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-instagram">
                  <img src={Instagram} alt="facebook" width="27px" />
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-github">
                  <img src={Git} alt="facebook" width="27px" />
                </i>
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}

          {/* Section: Links  */}
          <section class="">
            <div class="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div class="row mt-3">
                {/* Grid column */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3 text-secondary"></i>El Bodegón de
                    Tony
                  </h6>
                  <p className={style.descrip_footer}>
                    Nuestro restaurante ofrece una experiencia culinaria única y
                    memorable, disfrute de nuestra amplia selección de platos
                    exquisitos para todos los gustos.
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 class="text-uppercase fw-bold mb-4">Categorias</h6>
                  <p>Asados</p>
                  <p>Pizzas</p>
                  <p>Postres</p>
                  <p>Pizzas</p>
                  <p>¡Y MUCHO MAS!</p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    Enlaces Frecuentes
                  </h6>
                  <p>
                    {/* <a href="#!" class="text-reset"> */}
                    <Link to={"/"} class="text-reset">
                      Inicio
                    </Link>
                  </p>
                  <p>
                    <Link to={"/nosotros"} class="text-reset">
                      Sobre Nosotros
                    </Link>
                  </p>
                  <p>
                    <Link to={"/menu"} class="text-reset">
                      Menú
                    </Link>
                  </p>
                  <p>
                    <Link to={"/account/login"} class="text-reset">
                      Login
                    </Link>
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 class="text-uppercase fw-bold mb-4">Contactanos</h6>
                  <p>
                    <i class="fas fa-home me-3 text-secondary"></i> Buenos Aires
                  </p>
                  <p>
                    <i class="fas fa-envelope me-3 text-secondary"></i>
                    elbodegon@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone me-3 text-secondary"></i> + 54 914
                    567 88
                  </p>
                  <p>
                    <i class="fas fa-print me-3 text-secondary"></i> + 57 310
                    567 89
                  </p>
                  <p>
                    <i class="fas fa-print me-3 text-secondary"></i> + 51 927
                    567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}

          {/* Copyright */}
          <div class="text-center p-4">
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="#"></a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    </div>
  );
};

export default Footer;
