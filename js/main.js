const galleryCat = document.querySelectorAll(".gallery ul li");
const galleryItemLength = galleryCat.length;
const images = document.querySelectorAll(".gallery .imgs .row div");
const imagesLength = images.length;
for (let i = 0; i < galleryItemLength; i++) {

    galleryCat[i].addEventListener("click", function () {
        let type = galleryCat[i].getAttribute("data-type");
        for (let k = 0; k < imagesLength; k++) {
            if (type === images[k].getAttribute("data-type") || type ==="all") {
                images[k].classList.add("show");
                images[k].classList.remove("hide");
            } else {
                images[k].classList.remove("show");
                images[k].classList.add("hide");

            }
        }
    });

}

// owl carouser 
$(".owl-carousel").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        767:{
            items:4
        },
        1100:{
            items:6
        },
    }
});