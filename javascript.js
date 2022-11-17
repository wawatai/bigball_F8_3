function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }

    catch(e){ return false;}

}
$(function(){
    if(isMobile()){
        $(".bg")
        .css("background","url('./images/bg_mobile.jpg') no-repeat left center");

        $(".logo")
        .css({
            "padding-top" : "22.95%",
            "margin" : "-11% 0 0 9.15%"
        })

        $(".inputBox")
        .css("padding-top","15.64%");

        $(".inputBox button")
        .css({
            "width" : "19%",
            "left" : "28.6%"
        })

        $(".downBtn")
        .css({
            "width" : "38%",
            "padding-top" : "6.13%",
            "margin" : "2% 0 0 13.35%"
        })
    }
})