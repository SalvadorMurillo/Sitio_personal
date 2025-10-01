const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          {currentYear} Salvador Murillo Desarrollador
        </p>
        <div className="footer-links">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
