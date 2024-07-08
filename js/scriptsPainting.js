var paintingCarousel = document.querySelector('#carouselPaintingControl')
var paintingModalEl = document.getElementById('paintingModal')

paintingModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(paintingCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})

painting