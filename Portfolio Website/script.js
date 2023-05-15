$(document).ready(function(){
    $(window).scroll(function(){  //Kullanıcı sayfayı kaydırdıkça, bu fonksiyon çalışacak.

        // STICKY NAVBAR ON SCROLL SCRIPT
        //"sticky" sınıfı, bir öğeyi sayfada belirli bir noktada sabitlemek için kullanılır. 
        if(this.scrollY > 20){    //Kullanıcı sayfayı 20 piksel veya daha fazla kaydırdığında, "navbar" sınıfına sahip olan HTML öğesine "sticky" sınıfını ekler.
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){    //Kullanıcı sayfayı 500 piksel veya daha fazla kaydırdığında, "scroll-up-btn" sınıfına sahip olan HTML öğesine "show" sınıfını ekler.
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // SLIDE-UP SCRIPT
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});  //sayfayı en üstüne kaydırır.
         // Kaydırma davranışını devre dışı bırakır
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // Menü bağlantılarına tıklanınca kaydırma davranışını smooth hale getirir
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: [""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});