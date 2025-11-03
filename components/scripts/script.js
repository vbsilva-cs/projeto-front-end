document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu-itens');
  const any = document.querySelector('.main');

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("aberto");
      const expanded = menu.classList.contains("aberto");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }

  menu.addEventListener("mouseout", () => {
      any.addEventListener("mouseover", () => {
        if (menu.classList.contains("aberto")) {
        menu.classList.toggle("aberto");
        const expanded = menu.classList.contains("aberto");
        toggle.setAttribute("aria-expanded", expanded);
        }  
      });
    });
  });
