$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:
    
    {
        
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6.5   
        }
    }
})
