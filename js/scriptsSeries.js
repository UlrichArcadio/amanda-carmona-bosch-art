var seriesCarousel = document.querySelector('#carouselSeriesControl')
var seriesModalEl = document.getElementById('seriesModal')
seriesModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(seriesCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})