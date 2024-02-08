import React from 'react';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/homepage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="homepage">
      <div className="background">
        <Slider {...settings}>
          <div>
            <StaticImage src="../images/imagen1.jpg" alt="imagen1" />
          </div>
          <div>
            <StaticImage src="../images/imagen2.jpg" alt="imagen2" />
          </div>
        </Slider>
        <div className="school-info">
          <h2 className="school-info-heading">Bienvenido a la Escuela de Fútbol</h2>
          <p className="school-info-paragraph">
            Somos una academia líder en fútbol dedicada a fomentar el talento joven y promover los valores de trabajo en equipo, disciplina y deportividad.
            <br />
            <br />
            Nuestra misión es brindar a los atletas aspirantes entrenamiento de primera clase y apoyo para ayudarles a alcanzar su máximo potencial tanto dentro como fuera del campo.
            <br />
            <br />
            En la Escuela de Fútbol, visualizamos un futuro en el que cada jugador tenga la oportunidad de destacar y tener un impacto positivo en el mundo a través del hermoso juego del fútbol.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

