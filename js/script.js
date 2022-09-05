$('html').css('--theme-color',localStorage.getItem("data-theme-code"));
$('.Navbar-Portion').dblclick(function(event) {
    document.documentElement.requestFullscreen();
});
/* MODE CHANGER */
$('.Mode-Changer').click(function(event) {
    if ($('.Mode-Changer').html() == 'dark_mode') {
        $('body').addClass('Dark-Mode');
        $('.Mode-Changer').html('light_mode');
    }else if($('.Mode-Changer').html() == 'light_mode'){
        $('body').removeClass('Dark-Mode');
        $('.Mode-Changer').html('dark_mode');
    }
});
/* MENU BUTTON */
$('.small-drop-down').hide(0);
$('.menu-icon').click(function(event) {
    $('.small-drop-down').fadeToggle(300);
});
/* OWL CAROUSEL */
$('.client-review').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay : true,
    autoplayTimeout : 3000,
    autoplaySpeed : 1000,
    stagePadding: 5,
    loop:true,
    margin:24,
    navText: ['<span class="material-icons-outlined">chevron_left</span>','<span class="material-icons-outlined">chevron_right</span>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        568:{
            items:2,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        }
    }
});
/* OWL CAROUSEL */
$('.my-work').owlCarousel({
    stagePadding: 5,
    loop:true,
    margin:24,
    navText: ['<span class="jam jam-arrow-left"></span>','<span class="jam jam-arrow-right"></span>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        568:{
            items:2,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        }
    }
});
// SCROLL TO TOP
$('.scroll-to-top').click(function(event) {
    $(document).scrollTop(0);
});
$(document).scroll(function(event) {
    if ($(document).scrollTop() > 500) {
        $('.scroll-to-top').fadeIn(400);
    }else if ($(document).scrollTop() < 500) {
        $('.scroll-to-top').fadeOut(400);
    }     
});
// STICKEY NAVBAR
$(document).scroll(function(event) {
    if ($(document).scrollTop() > 150) { // document scroll is > 200
        $('.Navbar-Portion').addClass('stickey-nav');
    }else if($(document).scrollTop() < 150){
        $('.Navbar-Portion').removeClass('stickey-nav');
    }
});
// THEME CHANGER
/* LOCAL STORAGE */
//localStorage.setItem("data-theme-code", "#4070F4"); 
$('.Theme-Portion .theme-box').hide(0);
$('.Theme-Portion .theme-btn').click(function(event) {
    $('.Theme-Portion .theme-box').fadeToggle(300);
});
$('.theme-box span').click(function(event) {
    localStorage.clear();
    localStorage.setItem("data-theme-code", $(this).attr('data-theme-code'));  
    $('html').css('--theme-color', $(this).attr('data-theme-code'));
});
$(document).click(function(e){
    if($(e.target).closest('.theme-btn,.menu-icon,.service-card a,.modal-box').length != 0) return false;
    $('.theme-box,.small-drop-down,.Modal-Bg').fadeOut(300);
});
$('.close-btn').click(function(event) {
    $('.Modal-Bg').fadeOut(300);
});
$('.service-card a').click(function(event) {
    $('.Modal-Bg').fadeIn(300);    
});
// REMOVE AOS
if ($(window).width() <= 966) {
    $('div').removeAttr('data-aos');
}