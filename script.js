$(".meredith").hide();
$(".derek").hide();
$(".jackson").hide();
$(".april").hide();
$(".headh").hide();
$(".headi").hide();
$(".headb").hide();
$(".headt").hide();
$(".heading2").hide();
$(".q1").hide();
$(".q2").hide();
$(".but").hide();
$(".question1").hide();
$(".question2").hide();
$(".rest").hide();

$(".b1").click(function() {
    $(".heading").hide();
    $(".img1").hide();
    $(".b1").hide();
    $(".heading2").show();
    $(".q1").show();
    $(".q2").show();
    $(".but").show();
    $(".question1").show();
    $(".question2").hide();
    $("p").show();

});

$(".firste").click(function() {
    var ans1 = $(".firstq").val();
    var ans2 = $(".secq").val();
    
    if (ans1 === "Introverted") {
        if (ans2 >= 6) {
            $(".derek").show();
            $(".heading2").hide();
            $(".q1").hide();
            $(".q2").hide();
            $(".but").hide();
            $(".question1").hide();
            $(".headi").show();
        }}
    
    if (ans1 === "Introverted") {
        if (ans2 < 6) {
            $(".april").show();
            $(".hulk").hide();
            $(".heading2").hide();
            $(".q1").hide();
            $(".q2").hide();
            $(".but").hide();
            $(".question1").hide();
            $(".headt").show();
            $(".headh").hide();
        }}
    
    if (ans1 === "Extroverted") {
        if (ans2 >= 6) {
            $(".meredith").show();
            $(".heading2").hide();
            $(".q1").hide();
            $(".q2").hide();
            $(".but").hide();
            $(".question1").hide();
            $(".headh").show();
        }}
    
    if (ans1 === "Extroverted") {
        if (ans2 < 6) {
            $(".jackson").show();
            $(".derek").hide();
            $(".heading2").hide();
            $(".q1").hide();
            $(".q2").hide();
            $(".but").hide();
            $(".question1").hide();
            $(".headb").show();
            $(".headh").hide();
        }}
});

