export default function Projects({ images }) {
  return (
    <section id="Projects" className="Projects flex column justify-center">
      <h2>Projects</h2>
      {images && (
        <div className="slider flex">
          {images.map((x, i) => (
            <div className="card flex column align-center" key={i}>
              <img src={x} alt="github" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, eos voluptate doloribus iure in cumque rem dolorem
                asperiores consequuntur? Aut ab exercitationem illo numquam non
                facilis animi placeat, recusandae iure!
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
