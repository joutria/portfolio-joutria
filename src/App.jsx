import "./css/styles.css";
import "./css/Animation.css";
import "./css/MediaQuery.css";
import "./css/ContactForm.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import BurgerMenu from "./components/BurgerMenu";
import MyStack from "./components/MyStack";
import Studies from "./components/Studies";
import { useState, useEffect } from "react";

export default function App() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/joutria/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching GitHub repos:', error));
  }, []);

  console.log('GitHub Repos:', repos);

  return (
    <div className="App">
      <div className="bg-img"></div>
      <Header />
      <BurgerMenu />
      <About />
      <MyStack />
      <Studies />
      <Projects repos={repos} />
      <Contact />
    </div>
  );
}
