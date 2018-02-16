$(function(){
    var nav = $('#main-nav');
    var body = $('body');
    $('#toggle-menu').on('click',function(){
        nav.add(body).toggleClass('mostrar');
    });
});