function Course(props) {
  const skills = props.skills.map((skill, i) => {
    return <li key={i}>{skill}</li>;
  });

  console.log(props);

  return (
    <div className="education__info">
      <h5 className="education__name">{props.name}</h5>
      <p className="education__description">{props.desc}</p>
      <p className="education__result"> Languages & technologies:</p>
      <div className="education__results">
        <ul className="education__skills">{skills}</ul>
        <a
          className="education__certificate-url"
          href={props.certificateUrl}
          target="_blank"
        >
          <img
            className="education__certificate-img"
            src={props.certificateImg}
          />
        </a>
      </div>
    </div>
  );
}

export default Course;
