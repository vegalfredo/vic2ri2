// Paso 1: Obtener referencias a los elementos del DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

// Mover la primera miniatura al final (para el efecto de bucle)
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Tiempo de duración de la animación
let timeRunning = 3000;

// Paso 2: Asignar eventos a los botones de flecha
nextDom.onclick = function () {
    showSlider('next');
};

prevDom.onclick = function () {
    showSlider('prev');
};

// Paso 3: Asignar eventos a las miniaturas para selección manual
thumbnailItemsDom.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // Mostrar el slide correspondiente a la miniatura seleccionada
        showSliderToIndex(index);
    });
});

// Función para mostrar el slide correspondiente a una miniatura específica
function showSliderToIndex(index) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    // Mover el slide seleccionado al principio
    SliderDom.prepend(SliderItemsDom[index]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[index]);

    // Añadir clase para la animación
    carouselDom.classList.add('next');

    // Limpiar la animación después de un tiempo
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
    }, timeRunning);
}

// Función principal para mostrar el siguiente o anterior slide
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        // Mover el primer slide al final (efecto de bucle)
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        // Mover el último slide al principio (efecto de bucle)
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Limpiar la animación después de un tiempo
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}