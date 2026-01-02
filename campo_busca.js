const campoBusca = document.getElementById("campoBusca");
const produtos = document.querySelectorAll(".produto");



campoBusca.addEventListener("keyup", function () {
    const termo = campoBusca.value.toLowerCase();

    console.log("Termo buscado:", termo); // Verifica o que está sendo digitado
    console.log("Total de produtos:", produtos.length); // Verifica quantidade

    produtos.forEach(produto => {
       // const nome = produto.textContent.toLowerCase();

       const nome = produto.querySelector("h3").textContent.toLowerCase();

        if (nome.includes(termo)) {
            produto.style.display = "block";
                    // Para debug:
        console.log(`"${nome}" inclui "${termo}"? ${nome.includes(termo)}`);
        } else {
            produto.style.display = "none";
        }
    });
});