$(document).ready(function() {
    $(".li_subnav").on("click",function(e){
        $(".subnav").show();
    })
    $(".subnav").on("mouseleave",function(e){
        $(".subnav").hide();
    })
});
