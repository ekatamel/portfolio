function Navbar() {
  return (
    <header className="navigation">
      <nav className="navigation__top">
        <a href="" className="navigation__link">
          <img className="navigation__logo" src="" alt="" />
          Image
        </a>

        <ul className="navigation__links">
          <li className="navigation__item">
            <a className="navigation__link" href="#timeline">
              TIMELINE
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#skills">
              SKILLS
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#portfolio">
              PORTFOLIO
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#about">
              ABOUT ME
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
