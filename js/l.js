

$(document).ready(function(){

    $(".back-to-top").hide();

    $(function (){
        $(window).scroll(function (){
            if ($(this).scrollTop() > 100){
                $('.back-to-top').fadeIn();
            } else{
                $('.back-to-top').fadeOut();
            }
        });

        $('.back-to-top').click(function (){
            $('body,html').animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});




