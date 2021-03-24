$(document).ready(function(){

    //Sticky-Section
    $(".js-service-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });

    //Mixitup-Portfolio section
    var mixer = mixitup('.project');

    // Active class
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    })
});
function openNav(){
    document.getElementById("my-nav").style.width = "100%";
}
function closeNav(){
    document.getElementById("my-nav").style.width = "0%";
}