import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.scss';
import mainSlideImage from '../../assets/img/slider/slider-1.jpg';
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
let owl_carousel = require('react-owl-carousel');
window.fn = owl_carousel;

$(document).ready(function () {
    var mainSlider = $('.main-slider');
    mainSlider.on('initialized.owl.carousel', function (event) {
        setTimeout(function () {
            $('.owl-dot').each(function () {
                let text = $(this).find('p').text();
                $(this).find('p').text(text.slice(0, 30) + '...')
            });
        }, 100);
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
    mainSlider.find('.owl-dot').hover(function () {
        $(this).click();
    });
});


function MainSlider() {
    return (
        <section>
            <div className="container">
                <div className="main-slider owl-carousel owl-theme">
                    <a href="#" className="item"
                        data-dot={'<button role="button" class="owl-dot"><div class="rounded-circle"><img src='+mainSlideImage+' alt="Slider 1"></div><p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p></button>'}>
                        <img src={mainSlideImage} alt="Slider 1" />
                        <p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p>
                    </a>
                    <a href="#" className="item"
                        data-dot={'<button role="button" class="owl-dot"><div class="rounded-circle"><img src='+mainSlideImage+' alt="Slider 1"></div><p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p></button>'}>
                        <img src={mainSlideImage} alt="Slider 1" />
                        <p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p>
                    </a>
                    <a href="#" className="item"
                        data-dot={'<button role="button" class="owl-dot"><div class="rounded-circle"><img src='+mainSlideImage+' alt="Slider 1"></div><p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p></button>'}>
                        <img src={mainSlideImage} alt="Slider 1" />
                        <p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p>
                    </a>
                    <a href="#" className="item"
                        data-dot={'<button role="button" class="owl-dot"><div class="rounded-circle"><img src='+mainSlideImage+' alt="Slider 1"></div><p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p></button>'}>
                        <img src={mainSlideImage} alt="Slider 1" />
                        <p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p>
                    </a>
                    <a href="#" className="item"
                        data-dot={'<button role="button" class="owl-dot"><div class="rounded-circle"><img src='+mainSlideImage+' alt="Slider 1"></div><p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p></button>'}>
                        <img src={mainSlideImage} alt="Slider 1" />
                        <p>Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default MainSlider;