/* Painel de acessibilidade */
function alternarTema() {
  const html = document.documentElement;
  const temaAtual = html.getAttribute("data-tema");
  html.setAttribute("data-tema", temaAtual === "escuro" ? "claro" : "escuro");
}

function alternarContraste() {
  const html = document.documentElement;
  const temaAtual = html.getAttribute("data-tema");
  html.setAttribute("data-tema", temaAtual === "alto-contraste" ? "claro" : "alto-contraste");
}

function aumentarFonte() {
  const atual = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (atual + 2) + "px";
}

function reduzirFonte() {
  const atual = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (atual - 2) + "px";
}

/* função de alerta para conteúdo indisponível */
function emConstrucao () {
  alert("Atenção: Em construção!\nLamentamos o incoveniente.");
}

document.addEventListener('DOMContentLoaded', function () {

  /* Animação de Boas-vindas, é executada uma vez por sessão */
  const jaViu = sessionStorage.getItem('animacao-vista');
  const animacao = document.getElementById('animacao-inicial');

  if (!jaViu && animacao) {
    sessionStorage.setItem('animacao-vista', 'true');

    setTimeout(() => {
      animacao.style.opacity = '0';
      animacao.style.pointerEvents = 'none';
    }, 6000); // tempo total da animação
  } else if (animacao) {
    animacao.remove();
  }


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

    /* VALIDAÇÃO DE FORMULARIO */
	const form =  document.querySelector('form');
    const statusNome = document.querySelector('#nome-status');
    const statusEndereco = document.querySelector('#endereco-status');
    const statusCidade = document.querySelector('#cidade-status');
    const msgEnvio = document.querySelector('#confirmacao');

	if (form) {
		form.addEventListener('submit', (event) => {
      event.preventDefault();	
      const nome = form.querySelector('#nome').value.trim();
      const endereco = form.querySelector('#endereco').value.trim();
      const cidade = form.querySelector('#cidade').value.trim();

        if (nome == '') { 
          statusNome.innerHTML = '<p class="erro">* Campo obrigatório!</p>';
          statusNome.className = 'status-erro';
        } else {
          statusNome.innerHTML = '<p class="sucesso">Okay</p>';
          statusNome.className = 'status-sucesso';
        };
        
        if (endereco == '') { 
          statusEndereco.innerHTML = '<p class="erro">* Campo obrigatório!</p>';
          statusEndereco.className = 'status-erro';
        } else {
          statusEndereco.innerHTML = '<p class="sucesso">Okay</p>';
          statusEndereco.className = 'status-sucesso';
        };

        if (cidade == '') { 
          statusCidade.innerHTML = '<p class="erro">* Campo obrigatório!</p>';
          statusCidade.className = 'status-erro';
        } else {
          statusCidade.innerHTML = '<p class="sucesso">Okay</p>';
          statusCidade.className = 'status-sucesso';
        };

        if (nome == '' || endereco == '' || cidade == '') {
          alert('Por favor, preencha todos os campos corretamente.');        
          msgEnvio.innerHTML = '<p class="erro">Por favor, preencha todos os campos corretamente.</p>';
          msgEnvio.className = 'status-erro';
        } else {          
          msgEnvio.innerHTML = '<p class="sucesso">Formulário enviado com sucesso!</p>';
          msgEnvio.className = 'status-sucesso';
          alert('Formulário enviado com sucesso!');
          form.reset()
          return;
      }
    });
  } 

  /* Código para postagens de comentários na página contato.html */
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
            post.innerHTML += `<div class="container-flex" style="flex-direction:row; gap: 30px; margin-bottom: 15px;"><img src="../assets/icons/favicon-animal-shelter-48.png" alt="Logotipo Animal Shelter" width="32" height="32" loading="lazy"><p>${mensagem}</p></div>`;
            alert('Postagem realizada com sucesso!');
            document.querySelector('#mensagem').value = '';
            return;
        }
	});

  /* Aviso de Inscrição sobre a sucessão da inscrição na página notícias.html */
  document.querySelector('#inscricao').addEventListener('submit', function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
      alert('Inscrição efetuada! Verifique seu e-mail para confirmação da sua inscrição!');
      this.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  });

});
