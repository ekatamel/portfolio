function Milestone(props) {
  return (
    <div className={props.className}>
      <p className="timeline__date">{props.date}</p>
      <h3 className="timeline__position">{props.position}</h3>
      <p className="timeline__text">{props.text}</p>
    </div>
  );
}

export default Milestone;
