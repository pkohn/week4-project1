
$(document).ready(function(){

//question 1...how to make it come back?

  $(".hideMe").click(function(){
	 	$(".hideMe").hide();
	});

//question 2

  $(".changeColor").click(function() {
    
     $("li:nth-child(3)").css({
       "color": "red"
      });

  });

//question 3...why does it paste so many more?

  $("li:nth-child(4)").click(function() {
    
  $(this).append($(this).clone());

  });

  //my test for #3

  $("li:nth-child(3)").click(function() {
    
     $(this).animate({
    fontSize: "+=1px"
     });

  });

    //question 4...huh???...when to do .removeLi and when just removeLI

  $(".removeLi").click(function() {
    
     $("li:nth-child(2)").remove();

  });

    //question 5...is this right??

  $("li:last").click(function() {
    
    for (var i = 0; i < 4; i++){

        $("li:nth-child(1)").remove();

         $("li").css("font-size", "40px")

     }

  });

  //question 6...not working...why?

   $(".cute").click(function() {
    
       $(this).append($(this).clone(false));

  });

    //question 7...why doesnt this work??

   $("*").dblclick(function() {
          
       $("makeSquare").css("border-radius", "131px");

  });

     //question 8...not working?? when to do use #?

   $("#dontClick").click(function() {
    
       alert("NOOOOOOOO!!!");

    });

    //question 9...not working

   $(".swatch.black").click(function() {
    
       $("*").css("background-color", "#000")

    });

   //question 10

   $("#hover").hover(function() {
    
       $(this).css("background-color", "red")

     });

});


