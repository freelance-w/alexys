$(".testi__slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
});

const menuItem = document.querySelectorAll(".menu__item"); //mobile menu
$("#header__burger").on("click", function () {
    $("#menu").toggleClass("menu-active");

    $(this).toggleClass("header__burger-close");

    if ($(this).hasClass("header__burger-close")) {
        $(menuItem).each(function (index, link) {
            $(link).css(
                "animation",
                `menu__animate .3s ease-out ${index / 9 + 0.05}s forwards`
            );
        });
    } else {
        $(menuItem).each(function (index, link) {
            $(link).css("animation", ``);
        });
    }
});

$(".menu__item").on("click", function () {
    if ($("#menu").hasClass("menu-active")) {
        $("#menu").toggleClass("menu-active");

        $(this).toggleClass("header__burger-close");

        if ($(this).hasClass("header__burger-close")) {
            $(menuItem).each(function (index, link) {
                $(link).css(
                    "animation",
                    `menu__animate .3s ease-out ${index / 9 + 0.05}s forwards`
                );
            });
        } else {
            $(menuItem).each(function (index, link) {
                $(link).css("animation", ``);
            });
        }
    }
});

$("body").on("click", '[href*="#"]', function (e) {
    // var fixed_offset = 87;
    if (screen.width <= 750) {
        var fixed_offset = 60;
    } else {
        var fixed_offset = 74;
    }
    $("html,body")
        .stop()
        .animate(
            {
                scrollTop: $(this.hash).offset().top - fixed_offset,
            },
            1000
        );
    $("#header__menu").toggleClass("menu__active");
    $("#header__burger").toggleClass("header__burger-close");
    e.preventDefault();
});

var wow = new WOW({
    mobile: false,
});
wow.init();

const numberCoffee = function (item, num) {
    console.log(item.text());
    item.text('');
    var itemNum = 0;
    let timer = setInterval(function () {
        if (itemNum < num) {
            itemNum = itemNum + 21;
            item.text(itemNum + '+');
        }
        if(itemNum > num){
            clearInterval(timer);
            item.text(num + '+');
            console.log(2);
        }
        console.log(1);
    }, 30);
};




numberCoffee($("#coffee-1"), 12458);
numberCoffee($("#coffee-2"), 1796);
numberCoffee($("#coffee-3"), 1000);
numberCoffee($("#coffee-4"), 1500);
