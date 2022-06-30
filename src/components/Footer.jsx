function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__line"></div>
        <h6 className="footer__title">NICE TO MEET YOU</h6>
        <div className="footer__line"></div>
      </div>

      <div className="footer__images">
        <img className="footer__image" src="img/github_grey.png" alt="" />
        <img className="footer__image" src="img/linkedin_grey.png" alt="" />
        <img className="footer__image" src="img/instagram_grey.png" alt="" />
      </div>

      <p className="footer__copyright">
        Copyright &copy;Ekaterina Melnichuk 2022
      </p>
    </footer>
  );
}

export default Footer;
