class LivroCard extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const titulo = this.getAttribute("titulo");
      const autor = this.getAttribute("autor");
      const preco = this.getAttribute("preco");
      const imagem = this.getAttribute("imagem");
  
      this.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${imagem}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">
              Autor: ${autor} <br>
              Preço: ${preco}
            </p>
            <a href="#" class="btn btn-outline-dark">Adicionar ao carrinho</a>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("livro-card", LivroCard);
  
  
  
  