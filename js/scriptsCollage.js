
var collageCarousel = document.querySelector('#carouselCollageControl')
var collageModalEl = document.getElementById('collageModal')
collageModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(collageCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})
