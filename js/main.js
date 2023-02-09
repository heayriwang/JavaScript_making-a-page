//top banner

const TOP_BANNER = document.querySelector('#header .topBanner');
const TOP_BANNER_BTN = document.querySelector('#header i');

const MAIN_SLIDE_NAV = document.querySelector('#mainVisual .slide_nav');
const MAIN_SLIDE_NAV_LI = document.querySelectorAll('#mainVisual .slide_nav>li');

const MAIN_SLIDE_NUM = document.querySelector('#mainVisual .num');

const TOP_BANNER_HANDLER = () => {
    TOP_BANNER.classList.add('on');
}

TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_HANDLER);

const TOP_BANNER_SLIDE_OPTION = {
    loop: true,
    pagination: {
        el: ".dots",
        clickable: true,
    },
}

const TOP_BANNER_SLIDE = new Swiper('.topBanner', TOP_BANNER_SLIDE_OPTION);

//gnb

const HD_WRAP = document.querySelector('#header .hdWap');

const HD_WRAP_HANDLER = () => {
    let SCT = window.scrollY;
    SCT > 0
        ? HD_WRAP.classList.add('on')
        : HD_WRAP.classList.remove('on');
}

window.addEventListener('scroll', HD_WRAP_HANDLER);

const MAIN_VISUAL_SLIDE_OPTION = {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // navigation: {
    //     nextEl: "#mainVisual .arrows>div:nth-child(1)",
    //     prevEl: "#mainVisual .arrows>div:nth-child(2)",
    // },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this, this.realIndex, MAIN_SLIDE_NAV_LI);
            let idx = this.realIndex;
            let total = this.slides.length;
            MAIN_SLIDE_NAV_LI.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_NAV_LI[idx].classList.add('on');
            MAIN_SLIDE_NUM.innerHTML = `<strong>${idx < 9 ? 0 : ''}${idx + 1}</strong> / <span>${total - 2}</span>`;
        }
    }
}

const MAIN_VISUAL_SLIDE = new Swiper('.mainSlide', MAIN_VISUAL_SLIDE_OPTION);

const MAIN_VISUAL_SLIDE_ARROWS = document.querySelectorAll('#mainVisual .arrows>div');
console.log(MAIN_VISUAL_SLIDE_ARROWS[0]);

MAIN_VISUAL_SLIDE_ARROWS[0].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev();
});
MAIN_VISUAL_SLIDE_ARROWS[1].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext();
});

//이벤트의 위임... e.target --> 

const MAIN_SLIDE_NAV_HANDLER = e => {
    e.preventDefault();
    //console.log(e.target);
    // for (let i = 0; i < MAIN_SLIDE_NAV_LI.length; i++) {
    //     MAIN_SLIDE_NAV_LI[i].classList.remove('on')
    // }
    const TG = e.target.parentElement;
    //console.log(MAIN_SLIDE_NAV_LI, [...MAIN_SLIDE_NAV_LI]);
    const I = [...MAIN_SLIDE_NAV_LI].indexOf(TG);
    //console.log(I)
    //$(this).parent().index();
    //TG.classList.add('on');
    MAIN_VISUAL_SLIDE.slideTo(I + 1);
}


MAIN_SLIDE_NAV.addEventListener('click', MAIN_SLIDE_NAV_HANDLER);

const PF_LEFT_SLIDE_OPTION = {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // watchSlidesProgress: true,
    // autoplay: {
    //     delay: 3000,
    // },
}
const PF_LEFT_SLIDE = new Swiper('.pf_left_slide', PF_LEFT_SLIDE_OPTION);

const PF_RIGHT_SLIDE_OPTION = {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    // watchSlidesProgress: true,
    // thumbs: {
    //     swiper: PF_LEFT_SLIDE,
    // },
}
const PF_RIGHT_SLIDE = new Swiper('.pf_right_slide', PF_RIGHT_SLIDE_OPTION);

PF_LEFT_SLIDE.controller.control = PF_RIGHT_SLIDE;
PF_RIGHT_SLIDE.controller.control = PF_LEFT_SLIDE;


