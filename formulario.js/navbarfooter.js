let footer = document.getElementById("footer");
let navbar = document.getElementById("navbar");

window.addEventListener("load", function (event) {
    event.preventDefault();

    navbar.insertAdjacentHTML("beforeend",
    ` <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <ul>
      <li><a href="./index.html">ASL</a></li>
      <li><a href="./contacto.html">Contácto</a></li>

    </ul>
  </nav>
    `);

    footer.insertAdjacentHTML("beforeend",
    ` <div class="container">
    <footer class="footer flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg class="bi" width="30" height="24">
            <use xlink:href="#bootstrap" />
          </svg>
        </a>
        <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Generation</span>
      </div>
    </footer>
  </div>
    
    
    `);
    

});//windowlow