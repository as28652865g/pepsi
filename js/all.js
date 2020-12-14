$(document).ready(function(){
    $('.img-group li img').click(function(e)
    {
        $('.txt-img > img').attr('src',$(this).attr('src'));
    });
});

function changeBgColor(color)
{
    var bg = document.querySelector('.bg');
    bg.style.background = color;
}

