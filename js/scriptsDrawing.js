var drawingCarousel = document.querySelector('#carouselDrawingControl')
var drawingModalEl = document.getElementById('drawingModal')
drawingModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(drawingCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})