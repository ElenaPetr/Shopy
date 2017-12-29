$(function(){
	
var handle = $( "#custom-handle" );
  var handle1 = $( "#custom-handle_1" );
$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1100,
      values: [ 100, 1000 ],
      create: function() {
        handle.text( $( this ).slider( "values" , 0 )   +  "$" );
        handle1.text( $( this ).slider( "values" , 1 )  +  "$"  );
      },
      slide: function( event, ui ) {
        handle.text ( ui.values [ 0 ] + "$" );
         handle1.text ( ui.values [ 1 ] + "$" );
      }
      
    });
     
      $("input#amount").change(function(){
        var value1 = $(this).val();
        // var value2 = $("input#amount_1").val();
        // if( parseInt(value1) > parseInt(value2) ){
        //   value1 = value2;
        //   $("input#amount").val(value1);
        // }
       $("#slider-range").slider("values", 0, value1);
      });

      $("input#amount_1").change(function(){
        // var value1 = $("input#amount").val();
        var value2 = $(this).val();
        // if( parseInt(value1) > parseInt(value2) ){
        //   value2 = value1;
        //   $("input#amount").val(value2);
        // }
        $("#slider-range").slider("values", 1, value2);
      });
      $("#amount,#amount_1").keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});
});