$( "document" ).ready(function() {

    $("#hamburger").click(function(){
       $(".smallMobileMenu ul").toggle(200);
        //console.log("hamburger was clocked");
    });

    //Marketing button was clicked
    //timesArea sets up
    $("#Marketing").click(function(){
       $(".bubblesArea").toggle(200);
        $(".timesArea").toggle(200);
    });

    //backArrow button was clocked
    //bubblesArea sets up
    $(".backArrow").click(function(){
        $(".bubblesArea").toggle(200);
        $(".timesArea").toggle(200);
    });

    // report.html -> hover over secw2 changes h2 color
    $( "#mainReports .secw2" ).hover(function() {
        $(this).find("h2").css("color","#f7f6f6");
    });

    // report.html-> mouse leave makes h2 original color
    $( "#mainReports .secw2" ).mouseleave(function() {
        $(this).find("h2").css("color","#821122");
    });

    $(".carousel-control").click(function(){
        $("#myCarousel").carousel( {interval: 999999999} );
        console.log("carousel-control clicked from index");
    });

    //reports.html -> one of the weeks was clicked -> move to diagram.html
    $(".timesArea #LastWeek").click(function(){
        $(".timesArea #LastWeek").hide(500 , function(){
            location.href = 'diagram.html';
        });
    });

    //Parse the JSONF file and puts elemnts inside .leftSide_list
    // $.getJSON("data/list.json" , function(data){
    //     $.each(data.products , function() {
    //         //console.log(data.products);
    //         $('.leftSide_list').append(
    //             "<lable><a href='order.html?robotId="+this.id+"'><section id='little_pic'></section><p id='little_text'>"+ this.name +"</p></a></lable>");
    //     });
    // });

    //Placing the elements in index.html
    $.ajax({
        type : "POST",
        url : "includes/action.php",
        cache : true,
        success:function(data,success){
            var json = JSON.parse(data), i=0;
            console.log(json);
            while(i<json.length){
                var pic = json[i]["r.pic"],
                    id = json[i]["r.id"],
                    name = json[i]["r.name"];
                if(i<6){
                    $("#loader").append("<section class='secw' style='background:url(images/"+pic+")  no-repeat' data-url='order.html?robotId="+id+"'><div id='d1'><h2>"+name+"</h2></div></section>");
                    $(".secw").click(function(){
                        window.location.replace($(this).data('url'));
                    });
                }
                $('.leftSide_list').append(
                    "<lable><a href='order.html?robotId="+id+"'><section id='little_pic' style='background:url(images/"+pic+") 40% 20% no-repeat;background-size:60px 60px'></section><p id='little_text'>"+ name +"</p></a></lable>");

                i++;
            }
           // $("#loader").html(html);
           // $(".secw").click(function(){
           //     window.location.replace($(this).data('url'));
           // });
        }
    });

    //Placing the elements in diagram.html
    $.ajax({
        type : "POST",
        url : "includes/diagramAction1.php",
        cache : true,
        success:function(html){
            $("tbody").html(html);
        }
    });

    //Placing the elements in lifeStyle.html
    $.ajax({
        type : "POST",
        url : "includes/lifeStyleAction1.php",
        cache : true,
        success:function(html){
            $("#lifeStyleDiv").html(html);
        }
    });

    //Placing the elements in others.html
    $.ajax({
        type : "POST",
        url : "includes/othersAction1.php",
        cache : true,
        success:function(html){
            $("#otherDiv").html(html);
        }
    });
});
