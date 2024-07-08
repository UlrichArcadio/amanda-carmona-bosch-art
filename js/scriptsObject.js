var objectCarousel = document.querySelector('#carouselObjectControl')
var objectModalEl = document.getElementById('objectModal')
objectModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(objectCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})