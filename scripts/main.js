$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage']
    });

    var hamburger = document.querySelector("[data-hamburger]");
    hamburger.addEventListener("click", (event) => {
        event.preventDefault();
    });

    var $hamburger = $("[data-hamburger-icon]");
    $hamburger.on("click", (event) => {
        $verticalNav = $("[data-vertical-nav]");
        event.preventDefault();
        if ($verticalNav.hasClass("hidden")) {
            $verticalNav.removeClass("hidden");
        } else {
            $verticalNav.addClass("hidden");
        }
    });
});