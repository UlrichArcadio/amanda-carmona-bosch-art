var myCarousel1 = document.querySelector('#carouselWorksControl1')
var myModalEl1 = document.getElementById('worksModal1')

myModalEl1.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(myCarousel1)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})

var myCarousel2 = document.querySelector('#carouselWorksControl2')
var myModalEl2 = document.getElementById('worksModal2')

myModalEl2.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(myCarousel2)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})

















