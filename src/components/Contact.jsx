function Contact() {
  return (
    <section id="contact" className="contact">
      <h4 className="contact__title">CONTACT ME</h4>
      <div className="contact__container">
        <form className="contact__inputs">
          <label className="contact__label" htmlFor="name">
            First Name *
            <input className="contact__input" id="name" type="text" />
          </label>
          <label className="contact__label" htmlFor="surname">
            Last Name *
            <input className="contact__input" id="surname" type="text" />
          </label>
          <label className="contact__label" htmlFor="email">
            Email *
            <input className="contact__input" id="name" type="email" />
          </label>
          <label className="contact__label" htmlFor="phone">
            Phone *
            <input className="contact__input" id="phone" type="number" />
          </label>
          <label className="contact__label" htmlFor="message">
            My message *
            <textarea
              className="contact__input"
              name="message"
              id="message"
            ></textarea>
          </label>
        </form>

        <button className="contact__button">Send my message</button>
      </div>
    </section>
  );
}

export default Contact;
