// js/navbar.js
// Fügt die Navbar dynamisch in das Element mit der ID 'navbar-container' ein

document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white">
        <div class="container px-5">
            <a class="navbar-brand" href="index.html">
                AMANDA CARMONA BOSCH
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                            <a class="nav-link me-lg-3" href="links-obra.html">OBRA</a>
                        </li>
                    <li class="nav-item">
                        <a class="nav-link me-lg-3" href="biography.html">BIOGRAFIA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-lg-3" href="publicaciones.html">PUBLICACIONES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-lg-3" href="contact.html">CONTACTO</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar  -->
    `;
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = navbarHTML;
    }
});
