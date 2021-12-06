console.log("Your index.js file is loaded correctly!");

$(".btn").hover(function(){
    $(this).toggleClass("active")
});

 $(".projImg").hover(function() {
     $(this).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      })
})