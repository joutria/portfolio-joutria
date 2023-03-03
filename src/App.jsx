import "./css/styles.css";
import "./css/Animation.css";
import "./css/MediaQuery.css";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import BurgerMenu from "./BurgerMenu";

export default function App() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s"
  ];

  return (
    <div className="App">
      <div className="bg-img"></div>
      <Header />
      <BurgerMenu />
      <About />
      <Projects images={images} />
      <Contact />
    </div>
  );
}
