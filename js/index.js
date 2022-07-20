let corpo = document.body
let arrayCategorias = ["Todos", "Acessórios", "Calçados", "Camisetas"]
let arrayDeBusca = []
let carrinhoCompras = []

function renderizarSite() {
    let main = document.createElement("main")
    let containerProdutos = document.createElement("section")
    containerProdutos.setAttribute("class", "containerProdutos")

    let containerCarrinho = document.createElement("section")
    containerCarrinho.setAttribute("class", "containerCarrinho")

    main.append(containerProdutos, containerCarrinho)

    corpo.append(main)

}

function renderizarVitrine(array, categoriaSelecionada) {
    let containerProdutos = document.querySelector(".containerProdutos")
    containerProdutos.innerText = ""

    if (categoriaSelecionada == "Todos") {
        array.forEach(elem => {

            let cardProduto = document.createElement("div")
            cardProduto.setAttribute("class", "cardProduto")


            let imgProduto = document.createElement("img")
            imgProduto.setAttribute("src", elem.img.slice(1))

            let categoriaTipo = document.createElement("span")
            if (elem.tag[0] == "Camisetas") {
                categoriaTipo.setAttribute("class", "cardCamiseta")
            } else {
                categoriaTipo.setAttribute("class", "cardAcessorio")
            }
            let categoriaNome = document.createElement("p")
            categoriaNome.innerText = elem.tag[0]
            categoriaTipo.appendChild(categoriaNome)

            let nomeProduto = document.createElement("h2")
            let descricaoProduto = document.createElement("p")
            let precoProduto = document.createElement("h3")
            let btnProduto = document.createElement("button")

            btnProduto.setAttribute("id", elem.id)
            nomeProduto.innerText = elem.nameItem
            descricaoProduto.innerText = elem.description
            precoProduto.innerText = `R$ ${elem.value.toFixed(2)}`
            btnProduto.innerText = elem.addCart

            cardProduto.append(imgProduto, categoriaTipo, nomeProduto, descricaoProduto, precoProduto, btnProduto)
            containerProdutos.appendChild(cardProduto)
        })

    } else {
        array.forEach(elem => {
            if (elem.tag[0] == categoriaSelecionada) {

                let cardProduto = document.createElement("div")
                cardProduto.setAttribute("class", "cardProduto")

                let imgProduto = document.createElement("img")
                imgProduto.setAttribute("src", elem.img.slice(1))

                let categoriaTipo = document.createElement("span")
                if (elem.tag[0] == "Camisetas") {
                    categoriaTipo.setAttribute("class", "cardCamiseta")
                } else {
                    categoriaTipo.setAttribute("class", "cardAcessorio")
                }
                let categoriaNome = document.createElement("p")
                categoriaNome.innerText = elem.tag[0]
                categoriaTipo.appendChild(categoriaNome)

                let nomeProduto = document.createElement("h2")
                let descricaoProduto = document.createElement("p")
                let precoProduto = document.createElement("h3")
                let btnProduto = document.createElement("button")

                btnProduto.setAttribute("id", elem.id)
                nomeProduto.innerText = elem.nameItem
                descricaoProduto.innerText = elem.description
                precoProduto.innerText = `R$ ${elem.value.toFixed(2)}`
                btnProduto.innerText = elem.addCart

                cardProduto.append(imgProduto, categoriaTipo, nomeProduto, descricaoProduto, precoProduto, btnProduto)
                containerProdutos.appendChild(cardProduto)
            }
        })
    }
}

function renderizarCarrinho() {
    let containerCarrinho = document.querySelector(".containerCarrinho")
    containerCarrinho.innerText = ""

    let containerPesquisa = document.createElement("section")
    containerPesquisa.setAttribute("class", "containerPesquisa")
    let inputPesquisa = document.createElement("input")
    inputPesquisa.setAttribute("placeholder", "Digite aqui sua pesquisa")
    let buttonPesquisa = document.createElement("button")
    buttonPesquisa.innerText = "Pesquisar"
    containerPesquisa.append(inputPesquisa, buttonPesquisa)

    let carrinhoDeCompras = document.createElement("section")
    carrinhoDeCompras.setAttribute("class", "carrinhoDeCompras")
    let tituloCarrinho = document.createElement("h2")
    tituloCarrinho.innerText = "Carrinho de Compras"

    let listaProdutos = document.createElement("div")
    listaProdutos.setAttribute("class", "listaProdutos")
    let detalhesCart = document.createElement("div")
    detalhesCart.setAttribute("class", "detalhesCart")

    let carrinhoVazio = document.createElement("p")
    carrinhoVazio.innerText = "Carrinho Vázio"
    let adicioneItens = document.createElement("p")
    adicioneItens.innerText = "Adicione itens"
    listaProdutos.append(carrinhoVazio, adicioneItens)
    carrinhoDeCompras.append(tituloCarrinho, listaProdutos, detalhesCart)
    containerCarrinho.append(containerPesquisa, carrinhoDeCompras)

}

function renderizar() {
    renderizarSite()
    renderizarVitrine(data, "Todos")
    renderizarCarrinho()
}

renderizar()

let secaoVitrine = document.querySelector(".containerProdutos")
let secaoCart = document.querySelector(".listaProdutos")
let navigation = document.querySelector(".menu-direita")
let inputBusca = document.querySelector(".containerPesquisa input")
let buttonBusca = document.querySelector(".containerPesquisa button")
secaoVitrine.addEventListener("click", adicionandoProduto)
secaoCart.addEventListener("click", removerProduto)
navigation.addEventListener("click", produtosPorCategorias)
buttonBusca.addEventListener("click", buscaProdutos)


function adicionandoProduto(event) {
    if (event.target.tagName == "BUTTON") {
        let listaProdutos = document.querySelector(".listaProdutos")
        let numeroID = event.target.id

        listaProdutos.innerText = ""


        data.forEach(elem => {
            if (elem.id == numeroID) {
                carrinhoCompras.push(elem)
            }
        })
        renderizarCart()
    }

}

function removerProduto(event) {
    if (event.target.tagName == "BUTTON") {
        carrinhoCompras.splice(event.target.id, 1)
    }
    renderizarCart()
}

function renderizarCart() {
    if (carrinhoCompras.length > 0) {
        let listaProdutos = document.querySelector(".listaProdutos")
        let detalhesCart = document.querySelector(".detalhesCart")
        listaProdutos.innerText = ""
        detalhesCart.innerText = ""
        carrinhoCompras.forEach((elem, index) => {

            let produtoCart = document.createElement("div")
            produtoCart.setAttribute("class", "produtoCart")


            let imgCart = document.createElement("img")
            imgCart.setAttribute("src", elem.img.slice(1))
            let descricoes = document.createElement("div")
            let tituloCart = document.createElement("h3")
            tituloCart.innerText = elem.nameItem
            let precoCart = document.createElement("p")
            precoCart.innerText = `R$ ${elem.value.toFixed(2)}`
            let btnCart = document.createElement("button")
            btnCart.setAttribute("id", index)
            btnCart.innerText = "Remover"

            descricoes.append(tituloCart, precoCart, btnCart)

            produtoCart.append(imgCart, descricoes)
            listaProdutos.appendChild(produtoCart)
        })


        let quantidadeContainer = document.createElement("section")
        let totalContainer = document.createElement("section")
        let quantidadeTexto = document.createElement("p")
        let quantidadeValor = document.createElement("p")
        let totalTexto = document.createElement("p")
        let totalValor = document.createElement("p")

        quantidadeTexto.innerText = "Quantidade:"
        totalTexto.innerText = "Total:"
        quantidadeValor.innerText = carrinhoCompras.length
        totalValor.innerText = "R$ " + (carrinhoCompras.reduce((valorFinal, elem) => valorFinal + elem.value, 0)).toFixed(2)

        quantidadeContainer.append(quantidadeTexto, quantidadeValor)
        totalContainer.append(totalTexto, totalValor)
        detalhesCart.append(quantidadeContainer, totalContainer)

    } else {

        let listaProdutos = document.querySelector(".listaProdutos")
        let detalhesCart = document.querySelector(".detalhesCart")
        listaProdutos.innerText = ""
        detalhesCart.innerText = ""
        let carrinhoVazio = document.createElement("p")
        carrinhoVazio.innerText = "Carrinho Vázio"
        let adicioneItens = document.createElement("p")
        adicioneItens.innerText = "Adicione itens"
        listaProdutos.append(carrinhoVazio, adicioneItens)
    }
}

function produtosPorCategorias(event) {
    if (event.target.tagName == "BUTTON") {

        for (let i = 0; i < arrayCategorias.length; i++) {
            if (i == Number(event.target.id)) {
                renderizarVitrine(data, arrayCategorias[i])
            }
        }
    }
}


function buscaProdutos() {
    let valorBusca = inputBusca.value.toLowerCase()
    arrayDeBusca.length = 0
    data.forEach(elem => {
        if (elem.nameItem.toLowerCase().includes(valorBusca) == true) {
            arrayDeBusca.push(elem)
        }
    })
    renderizarVitrine(arrayDeBusca, "Todos")
}
