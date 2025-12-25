/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// ===== DARK / LIGHT MODE TOGGLE =====
const themeToggles = Array.from(document.querySelectorAll("[data-theme-toggle]"));
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

function syncThemeToggles(isDark) {
  themeToggles.forEach((toggle) => {
    const icon = toggle.querySelector("i");
    if (icon) {
      icon.className = isDark ? "bi bi-sun" : "bi bi-moon";
    }
    toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
  });
}

if (themeToggles.length) {
  syncThemeToggles(document.body.classList.contains("dark-mode"));
  themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      syncThemeToggles(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
}

document.querySelectorAll(".form-control-message").forEach((field) => {
  const resizeField = () => {
    field.style.height = "auto";
    field.style.height = `${field.scrollHeight}px`;
  };

  resizeField();
  field.addEventListener("input", resizeField);
});

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) {
    return;
  }
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) {
    return;
  }
  modal.style.display = "none";

  const openModalFound = Array.from(document.querySelectorAll(".modal")).some(
    (item) => item.style.display === "flex"
  );
  if (!openModalFound) {
    document.body.classList.remove("modal-open");
  }
}

document.querySelectorAll(".project-card[data-modal-target]").forEach((card) => {
  const target = card.getAttribute("data-modal-target");
  if (!target) {
    return;
  }

  card.addEventListener("click", () => openModal(target));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(target);
    }
  });
});

// Tutup modal jika klik di luar konten
window.addEventListener("click", (event) => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  const openModalFound = Array.from(modals).some(
    (item) => item.style.display === "flex"
  );
  if (!openModalFound) {
    document.body.classList.remove("modal-open");
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.display = "none";
  });
  document.body.classList.remove("modal-open");
});
