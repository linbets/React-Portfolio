export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Lindsey Betsinger</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">
           
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="AboutMe">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Projects">Featured Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Contact">Contact</a>
        </li>
     </ul>
    </div>
  </div>
</nav>
  );
}
