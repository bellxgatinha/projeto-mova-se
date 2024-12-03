//slider
$(document).ready(function () {
    //iniciando o plugin
    $('#destaque').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
});

//Interação Menu
function clickMenu(){
    if(itens.style.display =='block'){
        itens.style.display ='none'
    }else{
        itens.style.display = 'block'
    }
}


// // Modal
// var modalBtn = document.getElementById("modal");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("open-modal");
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const modals = document.querySelectorAll('.modal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close');

    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});


//  script.js 
document.addEventListener('DOMContentLoaded', () => { const modal = document.getElementById('image-slider');
 const modalImage = document.getElementById('slider-image'); const closeModal = document.querySelector('.close');
  const prevSlide = document.getElementById('prev-slide'); const nextSlide = document.getElementById('next-slide');

   // Seleciona somente os botões "Fotos" para abrir o slider
    const buttonsFotos = document.querySelectorAll('.pac-fotos .open-slider');
     const images = Array.from(document.querySelectorAll('.card-img')); let currentIndex = 0;

      // Adiciona evento somente aos botões "Fotos" 
      buttonsFotos.forEach((button, index) => { button.addEventListener('click', (event) => { event.preventDefault();

          currentIndex = index; openModal(); }); }); 

          // Função para abrir o modal
           function openModal() { modalImage.src = images[currentIndex].src; modal.style.display = 'flex'; }

            // Fecha o modal
             closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
             
              // Navega para o slide anterior
               prevSlide.addEventListener('click', () => { currentIndex = (currentIndex - 1 + images.length) % images.length; modalImage.src = images[currentIndex].src; }); 

               // Navega para o próximo slide
                nextSlide.addEventListener('click', () => { currentIndex = (currentIndex + 1) % images.length; modalImage.src = images[currentIndex].src; });

                 // Fecha o modal ao clicar fora da imagem
                  modal.addEventListener('click', (e) => { if (e.target === modal) { modal.style.display = 'none'; }
                 });

                 });