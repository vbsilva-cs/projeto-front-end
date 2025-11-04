document.addEventListener('DOMContentLoaded', function () {	

  /* ATIVACAO DO MENU HAMBURGUER TOGGLE */
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

  /* COMPLEMENTO: FECHAR MENU AO AFASTAR O CURSOR DO MENU ABERTO*/
  menu.addEventListener("mouseout", () => {
      any.addEventListener("mouseover", () => {
        if (menu.classList.contains("aberto")) {
        menu.classList.toggle("aberto");
        const expanded = menu.classList.contains("aberto");
        toggle.setAttribute("aria-expanded", expanded);
        }  
      });
    });
    
    /* Código para realizaçõa de postagens na página contato.html */
	const form = document.querySelector('form');
	const post = document.querySelector('#comentarios');
	
    form.addEventListener('submit', (event) => {
        event.preventDefault();	

        const mensagem = document.querySelector('#mensagem').value.trim();
        let x = 0;

        if (mensagem == '') {
            alert('Preencha o campo antes de enviar uma mensagem.');
        } else {
            if (post.innerHTML.trim() == '<p>Nenhum comentário.</p>') {
                post.innerHTML = '';
            }
            post.innerHTML += '<div class="container-flex" style="flex-direction:row; gap: 30px; margin-bottom: 15px;"><img src="../assets/icons/favicon-animal-shelter-48.png" alt="Logotipo Animal Shelter" width="32" height="32" loading="lazy"><p>' + mensagem + '</p></div>';
            alert('Postagem realizada com sucesso!');
            form.reset
            return;
        }
	});
});
