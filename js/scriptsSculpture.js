
var sculptureCarousel = document.querySelector('#carouselSculptureControl')
var sculptureModalEl = document.getElementById('sculptureModal')
sculptureModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(sculptureCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})