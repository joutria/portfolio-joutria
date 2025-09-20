export default function Header() {
  return (
    <nav className="Header flex align-center">
      <h1>Joutria</h1>
      <ul className="regular-menu">
        <li>
          <a href="#top">About me</a>
        </li>
        <li>
          <a href="#MyStack">My Tech Stack</a>
        </li>
        <li>
          <a href="#Studies">My Studies</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact me</a>
        </li>
      </ul>
    </nav>
  );
}
