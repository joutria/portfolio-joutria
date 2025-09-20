export default function About() {
  return (
    <section
      className="About flex column align-center justify-space"
      id="About"
    >
      <img
        className="profile"
        src="/photo.png"
        alt="joutria"
      />
      <h3 className="text-gradient">My name is Jose David Utria</h3>
      <p className="description">
        As a web developer, I am passionate about crafting beautiful and
        functional websites that make a difference. With my knowledge in front-end
        and back-end development, I have a well-rounded skill set that allows me
        to create impactful digital experiences. Let's work together!
      </p>
      <a className="curriculum" href="https://fast-api-curriculum.vercel.app/download/curriculum.pdf" download="JoseUtria">View My Curriculum</a>
    </section>
  );
}
