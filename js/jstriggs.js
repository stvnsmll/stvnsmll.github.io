window.onload = function () {
    $(".menuButton").click(function() {
        $(this).toggleClass("open");
        $(".sideMenu").toggleClass("menuShow");
        $(".fullScreenTilt").toggleClass("angled");
    })
}
