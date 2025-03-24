import "./scss/Card.scss"

export default function Card({ card }) {
  const { color, header, content, icon, id } = card;

  return (
    <>
      <article className={`card-border ${color} ${id}`}>
        <section className="card-box">
          <h2 className="box-item font-600">{header}</h2>
          <p className="box-item">{content}</p>
          <img src={`./images/icon-${icon}.svg`} alt="icon" className="icon" />
        </section>
      </article>
    </>
  );
}
