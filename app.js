const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
  if (e.detail < 2) {
    panels.forEach((panel) => {
      if (panel !== this) {
        panel.classList.remove("open");
      }
    });
    this.classList.toggle("open");
  }
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    // panels.forEach(panel => {
    //     panel.classList.remove("open-active");
    // });
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
