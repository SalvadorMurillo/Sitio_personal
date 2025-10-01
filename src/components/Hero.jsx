const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hola, soy Salvador Murillo</h1>
          <p className="hero-subtitle">Estudiante de Desarrollo y Gestion de Software </p>
          <p className="hero-description">
            Apasionado por crear excelentes aplicaciones y soluciones a problemas modernos.
           Me especializo en desarrollo backend y siempre estoy buscando
            aprender nuevas tecnologías y enfrentar nuevos desafíos creativos.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="./Foto_perfil.png"
            alt="Foto de perfil profesional"
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
