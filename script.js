document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = [
        "img/01.jpg",
        "img/02.jpg",
        "img/03.png",
        "img/99.png",
        "img/88.jpg",
        "img/77.jpeg"
    ];

    const carouselInner = document.querySelector("#imageGallery .carousel-inner");

    galleryImages.forEach((imageUrl, index) => {
        const slide = document.createElement("div");
        slide.classList.add("carousel-item");
        if (index === 0) {
            slide.classList.add("active");
        }

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Gallery Image";
        img.classList.add("d-block", "w-100");

        slide.appendChild(img);
        carouselInner.appendChild(slide);
    });
});

// Animation on clicking nav links
$(document).ready(function () {
    $('.nav-link-animate').click(function (e) {
        e.preventDefault();

        var link = $(this).attr('href');
        var animateClass = 'slideInRight'; // Change this to 'slideInLeft' if needed

        $('.aniview').addClass('animated ' + animateClass);

        setTimeout(function () {
            window.location.href = link;
        }, 300); // Adjust the delay to match the animation duration

        // Remove the animation class when the animation is done
        $('.aniview').on('animationend', function () {
            $(this).removeClass('animated ' + animateClass);
        });
    });
});

const slider = document.querySelector('.slider');

function slideImages() {
  const firstImage = slider.firstElementChild;
  slider.appendChild(firstImage);
  slider.style.transform = `translateX(-${firstImage.offsetWidth}px)`;
}

setInterval(slideImages, 3000);
