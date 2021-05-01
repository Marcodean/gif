$('.btn-ver-menu').on('click', function(){
    
    $('.pagina-izquierda').addClass("pagina-izquierda2");
    
})


$('.btn-cerrar').on('click', function(){
    
    setTimeout(function(){
        
    $('.pagina-izquierda').removeClass("pagina-izquierda2");
 
    }, 300)
    
})