google.load("jquery", "1.3.1");
google.setOnLoadCallback(function()
{
    $(".colord").click(function(){
        $("link").attr("href", "css/d.css");
        return false;
    });
    $(".colorblue").click(function(){
        $("link").attr("href", "css/blue.css");
        return false;
    });
    
    $(".colorgreen").click(function(){
        $("link").attr("href", "css/green.css");
        return false;
    });
    
    $(".colororange").click(function(){
        $("link").attr("href", "css/orange.css");
        return false;
    });

});