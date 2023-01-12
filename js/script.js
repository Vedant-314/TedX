$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});

    $('#Login').click(function(){
        $('#loginModal').modal('show')
    })

    $('#logdismiss').click(function(){
        $('#loginModal').modal('hide')
    })

    $('#reserve').click(function(){
        $('#ReserveModal').modal('show')
    })

    $('#resdismiss').click(function(){
        $('#ReserveModal').modal('hide')
    })

    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }

    })
    // $('#carousel-play').click(function(){
    //     $('#mycarousel').carousel('cycle');
    // })
})