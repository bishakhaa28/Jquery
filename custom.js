$(document).ready(function() {

    $(".answer")
        .hide();

        $(".first_section .question").click(function() {
            $(this).next('.answer').toggle();
        }
    )
});
        $(".second_section .question").hover(function() {
            $(this).next().show();
        }, function() {
            $(this).next().hide();
        });