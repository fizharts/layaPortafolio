"use-strict";


const modal = document.querySelector(".modal"),
    abrirModal = document.querySelector("#abrirModal"),
    galeriaItem = document.querySelectorAll(".galeriaItem"),
    infoImg = document.querySelectorAll(".infoImg"),
    redonda = document.querySelectorAll(".redonda"),
    tituloModal = document.querySelector('.tituloModal'),
    contenidoModal = document.querySelector('.contenidoModal'),
    videoModal = document.querySelector('.videoModal'),
    spinner = document.querySelector('.spinner'),
    modalContenido = document.querySelector('.modal-contenido'),
    contenedorVideo = document.querySelector('.contenedorVideo')

modal.style.visibility = "hidden";
$('#spinnersito').show()

console.log(galeriaItem);

redonda.forEach((red) => {
    let padre = red.parentElement;
    red.style.padding = "10px";
    padre.parentElement.style.paddingTop = "5px";
    padre.style.paddingBottom = "5px";
    padre.style.paddingRight = "30px";
    let menos = red.width * 0.4;
    let medida = red.width - menos;
    red.height = medida;
    red.width = medida;
    red.style.border = "5px solid rgba(255,255,255,0.7)";
    let redondito = medida / 2;
    red.style.borderRadius = `${redondito}px`;



    red.addEventListener("mouseover", (e) => {
        let item = e.target
        let texto = item.parentElement.querySelector('.infoImg')
        item.classList.add('filtro')
        item.classList.add('animate__animated', 'animate__bounce')
        texto.classList.add('animate__animated', 'animate__bounce')


    });

    red.addEventListener("mouseleave", (e) => {
        let itemDos = e.target
        let texto = itemDos.parentElement.querySelector('.infoImg')
        itemDos.classList.remove('filtro')
        itemDos.classList.remove('animate__animated', 'animate__bounce')
        texto.classList.remove('animate__animated', 'animate__bounce')
    })

    red.addEventListener("click", (e) => {
        e.target.classList.remove('filtro')
        modal.style.visibility = "visible";

    })
});


galeriaItem.forEach((Gitem) => {
    Gitem.style.backgroundColor = "#e575e3";

    Gitem.addEventListener("click", (e) => {
        let item = e.target

        let fichaTecnica = item.parentElement.querySelector('.des').innerHTML
        let titulo = item.parentElement.querySelector('.infoImg').innerHTML
        let tituloVideo = item.parentElement.querySelector('.infoImg').dataset.video
        let imgs = item.dataset.carrusel
        let ligaVideo = item.dataset.liga

        obtenerLigua(ligaVideo, contenedorVideo, imgs)



        tituloModal.innerHTML = titulo + '<div style="float:right;" id="cerrar">X</div>'
        contenidoModal.innerHTML = fichaTecnica

        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        modal.classList.remove('animate__animated', 'animate__fadeOutDown', 'animate__fast')
        modal.classList.add('animate__animated', 'animate__slideInUp', 'animate__fast')

        const cerrar = document.querySelector('#cerrar')
        cerrar.addEventListener("click", (e) => {

            modal.classList.remove('animate__animated', 'animate__slideInUp', 'animate__fast')
            modal.classList.add('animate__animated', 'animate__fadeOutDown', 'animate__fast')

            modal.style.opacity = "0";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0)";



        });






    });
});


const obtenerLigua = (liga, contenedorVideo, imgs) => {
    contenedorVideo.src = ''
    const galeria = document.querySelector('#galeria')

    imgs ?

        ponerGaleria(galeria, imgs, contenedorVideo) :
        ponerVideo(contenedorVideo, liga, galeria)


    $('#spinnersito').hide()

}

const ponerGaleria = (galeria, imgs, contenedorVideo) => {
    $('#spinnersito').show()
    contenedorVideo.src = ""
    galeria.innerHTML = galeriaCompleta()

    const imagenesThum = galeria.querySelectorAll('.imagenesThum')


    imagenesThum.forEach(element => {
        element.addEventListener('click', (e) => {
            let url = e.target.dataset.url


            console.log(e.target.dataset.url);

            imagenTarget.innerHTML = `<img src="${url}"  style="width:70%;">`


        })
    })
}

const galeriaCompleta = () => {

    return `
    <div id="imagenTarget"><img src="img/enfermeria/banner_congreso.jpg"  style="width:70%;"></div>
    
            <br>
            <div style="flex-wrap: wrap;">
            <img src="img/enfermeria/banner_congreso.jpg" class="imagenesThum" data-url="img/enfermeria/banner_congreso.jpg" style="width:70px;">
            <img src="img/enfermeria/constancia.jpg" class="imagenesThum" data-url="img/enfermeria/constancia.jpg" style="width:70px;">
            <img src="img/enfermeria/triptico.jpg" class="imagenesThum" data-url="img/enfermeria/triptico.jpg"  style="width:70px;">
            <img src="img/enfermeria/triptico_frente.jpg" class="imagenesThum" data-url="img/enfermeria/triptico_frente.jpg"  style="width:70px;">
            <img src="img/enfermeria/triptico_vuelta.jpg" class="imagenesThum" data-url="img/enfermeria/triptico_vuelta.jpg" style="width:70px;">
            </div>
    `

}

const ponerVideo = (contenedorVideo, liga, galeria) => {
    $('#spinnersito').show()
    galeria.innerHTML = ''
    contenedorVideo.src = liga
}