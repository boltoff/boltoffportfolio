//$("#menubutton").click(function(){
//    $("#mobilebar").animate({'left':'-1px'}, 500);
//    $("#rightcolumn").animate({'left':'300px'}, 500);
//});

$('#exitmenubutton').on('click', function(){
    $("#mobilebar").animate({'left':'-300px'}, 500);
    $("#rightcolumn").animate({'left':'0px'}, 500);
    $(this).css("display", "none");
    $("#menubutton").css("display", "block");
});

$("#menubutton").on('click', function(){
    $("#mobilebar").animate({'left':'-1px'}, 500);
    $("#rightcolumn").animate({'left':'300px'}, 500);
    $(this).css("display", "none");
    $("#exitmenubutton").css("display", "block");
});

