function addTo() {
   console.log(5);
    alert(`Added to cart!`);
}



document.addEventListener('DOMContentLoaded', function() {

    const brandWords = document.querySelectorAll('.brand-words span');


    brandWords.forEach(word => {

        word.addEventListener('click', function() {
            const brandName = this.textContent.toLowerCase(); 
            const shoes = document.querySelectorAll(`.items .shoe${brandName}`); 
            console.log(shoes, `.items .shoe${brandName}` );

            document.querySelectorAll('.items li').forEach(shoe => {
                shoe.style.display = 'none';
            });

            shoes.forEach(shoe => {
                shoe.style.display = 'block';
            });
        });
    });
});

function rotate(clas) {
    var images = document.querySelectorAll('.' + clas);
    
    images.forEach(function(image) {
        image.classList.add('rotate');
        image.style.transform = 'scaleX(-1)';
        image.style.transitionDuration = '2s';
    });
}

function resetRotation(clas) {
    var images = document.querySelectorAll('.' + clas);
    
    images.forEach(function(image) {
        image.classList.remove('rotate');
        image.style.transform = 'scaleX(1)';
        image.style.transitionDuration = '2s';
    });
}
function showAlert() {
    alert('This feature will be available soon.');
}

function scrollToDiv() {
    var targetDiv = document.querySelector('.about-section');
    console.log(targetDiv,"targetDiv")
    var targetPosition = targetDiv.offsetTop;
    console.log('targetPosition',targetPosition)
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' 
    });
}
function scrollToShop() {
    var targetDiv = document.querySelector('.shopFace');
    var targetPosition = targetDiv.offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' 
    });
}