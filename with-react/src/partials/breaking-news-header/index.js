import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.scss';
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
let owl_carousel = require('react-owl-carousel');
window.fn = owl_carousel;

$(document).ready(function () {
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
});

function BreakingNewsHeader() {
        return (
            <div className="breaking-news">
                <div className="container d-flex">
                    <div className="bn-title">
                        SON<br />
                        DAKİKA
                    </div>
                    <div className="bn-slider owl-carousel owl-theme">
                        <a href="#" className="item"><span>15:30</span> Cumhurbaşkanı Erdoğan: Azerbaycan adımı attı!</a>
                        <a href="#" className="item"><span>15:30</span>Yevlah'taki kritik görüşmenin detayları belli oldu! </a>
                        <a href="#" className="item"><span>15:30</span>Bakan Tunç'tan yalanda ısrar eden Kılıçdaroğlu'na belgeli
                            cevap!
                        </a>
                        <a href="#" className="item"><span>15:30</span>AB Konseyi Başkanı Michel: BM sisteminde reform
                            yapılmalı!</a>
                        <a href="#" className="item"><span>15:30</span>Biden duyuracak: ABD'den Ukrayna'ya yeni askeri yardım
                            paketi!
                        </a>
                    </div>
                </div>
            </div>
        );
    }

export default BreakingNewsHeader;