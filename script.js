// script.js
document.addEventListener('DOMContentLoaded', function() {
    const productImage = document.querySelector('.product-image');
    const overlay = document.querySelector('.overlay');

    productImage.addEventListener('mouseover', function() {
        productImage.style.filter = 'brightness(50%)';
        overlay.style.display = 'block';
    });

    productImage.addEventListener('mouseout', function() {
        productImage.style.filter = 'brightness(100%)';
        overlay.style.display = 'none';
    });
});
