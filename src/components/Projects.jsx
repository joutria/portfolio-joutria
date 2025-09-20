export default function Projects({ repos }) {

  return (
    <section id="Projects" className="Projects flex column justify-center">
      <h2 className="text-gradient">Projects</h2>
      {repos && (
        <div className="slider flex">
          {repos.map((x, i) => (
            <div className="card flex column align-center" key={i}>
              <img src={"projectPictures/" + x.name + ".png"} className="repoPic" alt="github project" />
              <p className="repoName">
                {repos[i] ? x.name.charAt(0).toUpperCase() + x.name.slice(1) : ""}
              </p>
              <p className="repoDesc">
                {repos[i] ? x.description : "No description"}
              </p>
              <div className="techStack flex">
                {x.topics && x.topics.map((topic, idx) => (
                  <span key={idx} className="topic">{topic}</span>
                ))}
              </div>
              <div className="links flex justify-space align-center">
                <a target="_blank" className="githubLink flex column" href={x.html_url}><img src="github-icon.png" alt="GitHub" /> GitHub</a>
                <a target="_blank" className="liveLink flex column" href={x.homepage}><img src="live-demo-icon.png" alt="Live Demo" /> Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
