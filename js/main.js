$(document).ready(function () {
    $('.slider').bxSlider({
        mode: 'horizontal',
        speed: 2000,
        auto: true,
        pause: 7000,
        hideControlOnEnd: true,
        pager: false,
        adaptiveHeight: true,
        slideMargin: 2
    });
});
var $scrollBtn = $('#scroll-to-top-btn');
var $window = $(window);
$window.scroll(function () {
    var scrollPosition = $window .scrollTop();
    if(scrollPosition > 500){
        $scrollBtn.show();
    } else{
        $scrollBtn.hide();
    }
});
$scrollBtn.click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);

});
$(document).ready(function () {
    $('#main-menu-toggle').click(function () {
        $('#main-menu').toggle();
    });
    var updateHeaderPlaceholder = function () {
        var hdr_h = $('#main-header').outerHeight();
        $('header-placeholder').height(hdr_h);
    };
    updateHeaderPlaceholder();
    var $window = $(window);
    $window.resize(function () {
        updateHeaderPlaceholder();

    });
    var $projects = $('.projects');
    $projects.isotope({
        itemSelector: '.project-item',
        percentPosition: true,
        masonry:{
            columnWidth: '.grid-sizer'
        }
    });

    $('.projects-filter ul li a').click(function (e) {
        e.preventDefault();
        var filterType = $(this).data('filter');
        if(filterType === 'all'){
            $projects.isotope({ filter:'*' });
            return  false;
        }
        $projects.isotope({ filter:'.' + filterType });
    });

});







