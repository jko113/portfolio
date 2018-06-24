

$(document).ready(function() {
	$("#fullpage").fullpage({
        anchors:["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"]
    });


    var $hamburger = $("[data-hamburger-icon]");
    $hamburger.on("click", (event) => {
        $nav = $(".header-nav");
        event.preventDefault();
        if ($nav.hasClass("hidden")) {
            $nav.removeClass("hidden");
        } else {
            $nav.addClass("hidden");
        }
    });
});