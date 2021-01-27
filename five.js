var cont = 0

function cambia() {
    cont++;
    switch (cont % 3 + 1) {
        case 1:
            document.getElementById("fotocambia").src = "fotos/image_5 (1) (1).jpg";
            break;
        case 2:
            document.getElementById("fotocambia").src = "fotos/image_6.jpg";
            break;
        case 3:
            document.getElementById("fotocambia").src = "fotos/image_4.jpg";
            break;
    }

}

function inicio() {
    setInterval(cambia, 3000);
}
window.onload = inicio;