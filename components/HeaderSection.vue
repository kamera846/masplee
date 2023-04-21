<template>
	<header class="wrapper bg-gray">
      <nav class="navbar navbar-expand-lg fancy navbar-light navbar-bg-light">
        <div class="container">
          <div class="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
            <div class="navbar-brand w-100">
              <a href="/">
                <h3 class="text-dark fs-30 mb-0">MASPLE</h3>
              </a>
            </div>
            <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div class="offcanvas-header d-lg-none">
                <h3 class="text-white fs-30 mb-0">MASPLE</h3>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                <ul class="navbar-nav">
                  <li class="nav-item py-5 px-5">
					<a class="nav-link hover-2 p-0" href="#">About</a>
				  </li>
                  <li class="nav-item py-5 px-5">
					<a class="nav-link hover-2 p-0" href="#">Skills</a>
				  </li>
                  <li class="nav-item py-5 px-5">
					<a class="nav-link hover-2 p-0" href="#">Portfolio</a>
				  </li>
                </ul>
                <!-- /.navbar-nav -->
                <div class="offcanvas-footer d-lg-none">
                  <div>
                    <a href="mailto:first.last@email.com" class="link-inverse">info@email.com</a>
                    <br> 00 (123) 456 78 90 <br>
                    <nav class="nav social social-white mt-4">
                      <a href="#"><i class="uil uil-twitter"></i></a>
                      <a href="#"><i class="uil uil-facebook-f"></i></a>
                      <a href="#"><i class="uil uil-dribbble"></i></a>
                      <a href="#"><i class="uil uil-instagram"></i></a>
                      <a href="#"><i class="uil uil-youtube"></i></a>
                    </nav>
                    <!-- /.social -->
                  </div>
                </div>
                <!-- /.offcanvas-footer -->
              </div>
              <!-- /.offcanvas-body -->
            </div>
            <!-- /.navbar-collapse -->
            <div class="navbar-other w-100 d-flex ms-auto">
              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <li class="nav-item">
                  <nav class="nav social social-muted justify-content-end text-end">
                    <a href="#"><i class="uil uil-twitter"></i></a>
                    <a href="#"><i class="uil uil-facebook-f"></i></a>
                    <a href="#"><i class="uil uil-dribbble"></i></a>
                    <a href="#"><i class="uil uil-instagram"></i></a>
                  </nav>
                  <!-- /.social -->
                </li>
                <li class="nav-item d-lg-none">
                  <button class="hamburger offcanvas-nav-btn"><span></span></button>
                </li>
              </ul>
              <!-- /.navbar-nav -->
            </div>
            <!-- /.navbar-other -->
          </div>
          <!-- /.navbar-collapse-wrapper -->
        </div>
        <!-- /.container -->
      </nav>
      <!-- /.navbar -->
    </header>
</template>