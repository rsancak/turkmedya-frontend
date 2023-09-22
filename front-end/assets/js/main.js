$(document).ready(function () {
    /* Header Breaking News Slider */
    $('.bn-slider').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoWidth: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2200,
        mouseDrag: false,
        dots: false
    });

    /* Main Slider */
    var mainSlider = $('.main-slider');
    mainSlider.on('initialized.owl.carousel', function (event) {
        setTimeout(function(){
            $('.owl-dot').each(function(){
                let text = $(this).find('p').text();
                $(this).find('p').text(text.slice(0,30)+'...')                
            });
        },100); 
    })    
    mainSlider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        autoplayTimeout: 1800,
        dots: true,
        dotsData: true
    })
    mainSlider.find('.owl-dot').hover(function() {
        $(this).click();
    });
    
});