$(document).ready(function() {
    $(".li_subnav").on("click",function(e){
        $(".subnav").toggle();
        $(".settings").hide();
    });
    $(".li_set").on("click",function(e){
        $(".settings").toggle();
        $(".subnav").hide();
    });
    $("#content").on("click",function(e){
           $(".subnav").hide();
           $(".settings").hide();
    });
});
