const productConItems = document.getElementsByClassName("product-con-item");
const productTabItems = document.getElementsByClassName("product-tab-item");

console.log(productConItems);

function onMenuChange(item) {
    for (let i = 0; i < productConItems.length; i++) {
        productConItems[i].classList.add("manuHidden");
        productTabItems[i].classList.remove("active");
    }

    // switch (item) {
    //     case "all":
    //         productConItems[0].classList.remove("manuHidden");
    //         productTabItems[0].classList.add("active");
    //         break;
    //     case "paint":
    //         productConItems[1].classList.remove("manuHidden");
    //         productTabItems[1].classList.add("active");
    //         break;
    //     case "minicup":
    //         productConItems[2].classList.remove("manuHidden");
    //         productTabItems[2].classList.add("active");
    //         break;
    //     case "stickbar":
    //         productConItems[3].classList.remove("manuHidden");
    //         productTabItems[3].classList.add("active");
    //         break;
    //     case "dessert":
    //         productConItems[4].classList.remove("manuHidden");
    //         productTabItems[4].classList.add("active");
    //         break;
    // }

    if (item == "all") {
        productConItems[0].classList.remove("manuHidden");
        productTabItems[0].classList.add("active");
    } else if (item == "paint") {
        productConItems[1].classList.remove("manuHidden");
        productTabItems[1].classList.add("active");
    } else if (item == "minicup") {
        productConItems[2].classList.remove("manuHidden");
        productTabItems[2].classList.add("active");
    } else if (item == "stickbar") {
        productConItems[3].classList.remove("manuHidden");
        productTabItems[3].classList.add("active");
    } else if (item == "dessert") {
        productConItems[4].classList.remove("manuHidden");
        productTabItems[4].classList.add("active");
    }
}

const $align = $(".align-button > li");
const $alignMenu = $(".align-menu");
const duration = 300;

$align.on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active");

    $alignMenu.stop().slideDown(duration);
});

$align.on("mouseleave", function (e) {
    e.preventDefault();
    $(this).removeClass("active");

    $alignMenu.stop().slideUp(duration);
});
