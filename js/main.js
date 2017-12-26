$(function(){

	$(".owl-carousel").owlCarousel({
  	loop:true,
  	items:1,
  	//nav:true,
  	smartSpeed: 800,
    animateIn: 'slideInUp',
    animateOut: 'slideOutUp',
  })

	$(".best-sales").hover(function()
	{
		 $(this).find('.card-span').hide();
        $(this).find('.btn-add').show();
    },function(){
    	 $(this).find('.card-span').show();
       $(this).find('.btn-add').hide();
        
    });

  
	
});
   