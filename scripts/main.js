

$(document).ready(function() {
	$("#fullpage").fullpage({
        anchors:["firstPage", "secondPage", "thirdPage", "fourthPage"]
    });


    var $hamburger = $("[data-hamburger-icon]");
    $hamburger.on("click", (event) => {
        $nav = $(".header-nav");
        event.preventDefault();
        if ($nav.css("display") === "none") {
            $nav.css({
                display: "flex"
            });
        } else {
            $nav.css({display: "none"});
        }
    });
});