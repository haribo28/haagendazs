$(function () {
    const $productTab = $(".product-tab > li");
    const $productCon = $(".product-con-item");
    const $storeTab = $(".store-sub > li");

    // 처음 세팅
    // tabAction(0);

    // 탭메뉴를 클릭했을 때
    $productTab.on("click", function (e) {
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        // tabAction(tabIdx);
    });

    // // 공통의 동작을 함수로 정의
    // function tabAction(index) {
    //     // 탭메뉴 활성화
    //     $productTab.removeClass("active");
    //     $productTab.eq(index).addClass("active");

    //     // 인덱스에 해당하는 $tabCon 보이기
    //     $productCon.hide();
    //     $productCon.eq(index).show();
    // }

    // // 공통의 동작을 함수로 정의
    // function tabAction(index) {
    //     // 탭메뉴 활성화
    //     $productTab.removeClass("active");
    //     $productTab.eq(index).addClass("active");

    //     // 인덱스에 해당하는 $tabCon 보이기
    //     $productCon.hide();
    //     $productCon.eq(index).show();
    // }

    $storeTab.on("click", function (e) {
        e.preventDefault();

        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
    });

    const topSlider = new Swiper(".top-slider", {
        loop: true,

        slidesPerView: "auto",
        mousewheel: true,
        // centeredSlides: true,

        scrollbar: {
            el: ".rwd-scrollbar",
        },
    });

    // const bottomSlider = new Swiper(".bottom-slider", {
    //     loop: false,

    //     slidesPerView: "auto",
    //     mousewheel: true,
    //     // centeredSlides: true,

    //     scrollbar: {
    //         el: ".rwd-scrollbar",
    //     },
    // });

    let bottomSlider;

    initMySlider();

    function initMySlider() {
        if (window.innerWidth < 1100) {
            initSwiper();
        } else {
            destroySwiper();
        }
    }

    window.addEventListener("resize", initMySlider);

    function initSwiper() {
        if (!bottomSlider) {
            bottomSlider = new Swiper(".bottom-slider", {
                loop: false,
                slidesPerView: "auto",
                spaceBetween: 10,
                breakpoints: {
                    500: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                    },
                },
            });
        }
    }

    function destroySwiper() {
        if (bottomSlider) {
            bottomSlider.destroy(true, true);
            bottomSlider = null;
        }
    }
});
