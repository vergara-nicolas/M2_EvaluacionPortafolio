document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("contactAlert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alertBox.classList.remove("d-none");
    form.reset();
    setTimeout(() => alertBox.classList.add("d-none"), 2500);
  });
});

$(function () {
  $('a.nav-link[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 72 }, 350);
  });

  $("#btnAddProject").on("click", function () {
    const card = `
      <article class="col-12 col-md-6 col-lg-4">
        <div class="card text-bg-dark h-100 shadow-sm border-secondary">
          <div class="card-body">
            <h3 class="h5 card-title text-white">Proyecto Demo (jQuery)</h3>
            <p class="card-text text-light-strong">
              Tarjeta agregada dinámicamente con jQuery para cumplir el requisito.
            </p>
            <span class="badge text-bg-primary">jQuery</span>
            <span class="badge text-bg-primary">DOM</span>
            <span class="badge text-bg-primary">Eventos</span>
          </div>
        </div>
      </article>`;
    $("#projectsRow").prepend(card);
  });
});
