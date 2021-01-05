var minhaImagem = "./imagem.jpg";

function createImage(caminhoDaImagem) {
    var imgElement = document.createElement("img");
    imgElement.src = caminhoDaImagem;
    return imgElement;
}

function addClassName(element, className){
    element.classList.add(className);
}

function appendToDom(info){
    document.body.append(info);
}

var imgTag = createImage(minhaImagem);
addClassName(imgTag, "minhaImagem");

var container = document.createElement("div");
addClassName(container, "container");

container.append(imgTag);
appendToDom(container);
