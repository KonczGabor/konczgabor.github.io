var transparent = true;
var hasTransparent = false;


$(document).ready(function(){
   if($('nav[role="navigation"]').hasClass('navbar-transparent')){
        hasTransparent = true;
   }    
});

$(document).scroll(function() {
   if(hasTransparent){
        if( $(this).scrollTop() > 260 ) {
            if(transparent) {
                transparent = false;
                $('nav[role="navigation"]').removeClass('navbar-transparent');
            }
        } else {
            if( !transparent ) {
                transparent = true;
                $('nav[role="navigation"]').addClass('navbar-transparent');
            }
        }
    }
});













