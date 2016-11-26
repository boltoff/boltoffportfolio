        $('#exitmenubutton').on('click', function(){
            $("#mobilebar").animate({'left':'-300px'}, 500);
            $("#mobnav").animate({'left':'-300px'}, 500);
            $("#mobsoclinks").animate({'left':'-305px'}, 500);
            $("#rightcolumn").animate({'left':'0px'}, 500);
            $("#topbar").animate({'left':'0px'}, 500);
            $(this).css("display", "none");
            $("#menubutton").css("display", "inline-table");
        });

        $("#menubutton").on('click', function(){
            if ($('body').width() <= 1030 && $('body').width() > 400) 
                {
                    $("#mobilebar").animate({'left':'-1px'}, 500);
                    $("#mobnav").animate({'left':'-26px'}, 500);
                    $("#mobsoclinks").animate({'left':'-26px'}, 500);
                    $("#rightcolumn").animate({'left':'300px'}, 500);
                    $("#topbar").animate({'left':'300px'}, 500);
                }
            if ($('body').width() <= 400 && $('body').width() > 320) 
                {
                    $("#mobilebar").animate({'left':'-80px'}, 500);
                    $("#mobnav").animate({'left':'-26px'}, 500);
                    $("#mobsoclinks").animate({'left':'-26px'}, 500);
                    $("#rightcolumn").animate({'left':'220px'}, 500);
                    $("#topbar").animate({'left':'220px'}, 500);
                    $("#mobnav ul").css("margin-left", "30px");
                }
            if ($('body').width() <= 320)
                {
                    $("#mobilebar").animate({'left':'-120px'}, 500);
                    $("#mobnav").animate({'left':'-26px'}, 500);
                    $("#mobsoclinks").animate({'left':'-26px'}, 500);
                    $("#rightcolumn").animate({'left':'180px'}, 500);
                    $("#topbar").animate({'left':'180px'}, 500);
                    $("#mobnav ul").css("margin-left", "8px");
                }
            $(this).css("display", "none");
            $("#exitmenubutton").css("display", "inline-table");
        });