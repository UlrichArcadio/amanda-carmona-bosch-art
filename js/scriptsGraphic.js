var graphicCarousel = document.querySelector('#carouselGraphicControl')
var graphicModalEl = document.getElementById('graphicModal')
graphicModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(graphicCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})