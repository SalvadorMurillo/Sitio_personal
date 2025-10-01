const hobbiesData = [
  {
    id: 1,
    title: "Videojuegos",
    description: "Los videojuegos me ayudan a mantener mi mente creativa y pensante, me ayuda a vivir diferentes experiencias. Disfruto especialmente los juegos con una historia.",
    image: "https://media.istockphoto.com/id/1560833158/photo/game-controller-with-purple-lit-keyboard-amidst-various-wireless-devices.jpg?s=2048x2048&w=is&k=20&c=kYYxzGPxzHpom6fsJwVHoa2mZRLzJ769zSK-PqGLMT8=",
    skills: ["Estrategía", "Agilidad Mental", "Coordinacion"]
  },
  {
    id: 2,
    title: "FutBol",
    description: "El futbol ha sido mi pasión desde joven. Me fascina el deporte. Soy hincha de un equipo de españa llamado Real Madrid no me pierdo ningun partido en la tv.",
    image: "https://cdn.pixabay.com/photo/2020/08/21/13/03/soccer-5506110_1280.jpg",
    skills: ["Compañerismo", "Táctica", "Análisis de juego"]
  }
];

const HobbyCard = ({ hobby }) => {
  return (
    <article className="hobby-card">
      <div className="hobby-image-container">
        <img
          src={hobby.image}
          alt={hobby.title}
          className="hobby-image"
        />
      </div>
      <div className="hobby-content">
        <h3 className="hobby-title">{hobby.title}</h3>
        <p className="hobby-description">{hobby.description}</p>
        <div className="hobby-skills">
          {hobby.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Hobbies = () => {
  return (
    <section className="hobbies" id="pasatiempos">
      <div className="section-container">
        <h2 className="section-title">Mis Pasatiempos</h2>
        <p className="section-subtitle">
          Actividades que me inspiran y mantienen mi mente creativa
        </p>
        <div className="hobbies-grid">
          {hobbiesData.map((hobby) => (
            <HobbyCard key={hobby.id} hobby={hobby} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
