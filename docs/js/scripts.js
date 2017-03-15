(function (global) {
    $(window).on("load", function () {


        var lastScrollTop = 0;
        $(window).scroll(function(event){
            var header =  $('#menu');
            var st = $(this).scrollTop();
            if (st < 1) {
                header.removeClass('is-scrolled');
                header.removeClass('scrolled-by');
            }
            else if (st >= lastScrollTop) { header.addClass('is-scrolled'); }
            else {
                header.addClass('scrolled-by');
                header.removeClass('is-scrolled');
            }
            lastScrollTop = st;
        });



        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })



    });
})(this);

