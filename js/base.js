$(document).ready(function() {
    $(".li_subnav").hover(function(e){
        if($(".subnav").css("display")=="none"){
        $(this).css("backgroundColor","#666");}
    },function(e){
        if($(".subnav").css("display")=="none"){
        $(this).css("backgroundColor","#2d2d2d");}
    });
    $(".li_set").hover(function(e){
        if($(".settings").css("display")=="none"){
        $(this).css("backgroundColor","#666");}
    },function(e){
        if($(".settings").css("display")=="none"){
        $(this).css("backgroundColor","#2d2d2d");}
    });

    $(".li_subnav").on("click",function(e){
        $(".subnav").toggle();
        $(".settings").hide();
        $(".li_set").css("backgroundColor","#222");
        if($(".subnav").css("display")=="none"){
            $(this).css("backgroundColor","#222");
            $(this).css("boardColor","#2d2d2d");
            $(this).find("a").css("color","#ccc");
        }else{
            $(this).css("backgroundColor","#fff");
            $(this).css("boardColor","#bebebe");
            $(this).find("a").css("color","#36c");
        }
    });

    $(".li_set").on("click",function(e){
        $(".settings").toggle();
        $(".subnav").hide();
        $(".li_subnav").css("backgroundColor","#222");
        if($(".settings").css("display")=="none"){
            $(this).css("backgroundColor","#222");
            $(this).css("boardColor","#2d2d2d");
            $(".login li div").css("backgroundPosition","0 0");
        }else{
            $(this).css("backgroundColor","#fff");
            $(this).css("boardColor","#bebebe");
            $(".login li div").css("backgroundPosition","-6px -22px");
        }
    });
    $("#content").on("click",function(e){
        $(".subnav").hide();
        $(".settings").hide();
        $(".li_subnav").css("backgroundColor","#222").css("boardColor","#2d2d2d").find("a").css("color","#ccc");
        $(".li_set").css("backgroundColor","#222").css("boardColor","#2d2d2d");
        $(".login li div").css("backgroundPosition","0 0");
    });


    $("#search_text").on("focus",function(e){
        $(this).css("borderColor","#36c");
    });
    $("#search_text").on("blur",function(e){
        $(this).css("borderColor","#bebebe");
    });


});
