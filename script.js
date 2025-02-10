const showGalleryButton = document.getElementById('show-gallery');
const gallery = document.getElementById('gallery');
const closeGalleryButton = document.getElementById('close-gallery');

// Открыть галерею
showGalleryButton.addEventListener('click', function() {
    gallery.style.display = 'block';
});

// Закрыть галерею
closeGalleryButton.addEventListener('click', function() {
    gallery.style.display = 'none';
});

const furryImage = document.getElementById('furry-image');

// Функция для проверки позиции курсора
function checkMousePosition(event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Проверка, близко ли курсор к краям экрана
    const margin = 30; // допустимое расстояние от края экрана

    // Если курсор в пределах заданного расстояния от края экрана, показываем картинку
    if (mouseX < margin || mouseX > windowWidth - margin || mouseY < margin || mouseY > windowHeight - margin) {
        furryImage.style.opacity = 1; // Показываем картинку
        furryImage.style.left = mouseX < windowWidth / 2 ? '10px' : `${windowWidth - 160}px`; // Перемещаем влево или вправо
    } else {
        furryImage.style.opacity = 0; // Скрываем картинку
    }
}

// Слушаем движение мыши
window.addEventListener('mousemove', checkMousePosition);
