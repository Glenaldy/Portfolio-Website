$(function () {
    $(".showcase-wrapper").on("mouseover", ShowcaseAnimationStart);
    $(".showcase-wrapper").on("mouseout", ShowcaseAnimationEnd);
    AddImagesinExplanationPage();
    AddImagesinWorkShowcase();
});
function ShowcaseAnimationStart() {
    let target = $(this)
    Show(target);
    IncreaseSize(target);
}
function ShowcaseAnimationEnd() {
    let target = $(this)
    Hide(target);
    DecreaseSize(target);
}
function AddImagesinExplanationPage(){
    //Add images in explanation page automatically
    let ImageCount = $(".showcase-expand-img").length;
    console.log("number of big image in this page is "+ ImageCount);
    for(let i = 0 ; i < ImageCount ; i++){
        let targetPage = $("body").attr("id");
        $(".showcase-expand-img").eq(i).append('<img src="assets/images/projects/'+targetPage+'/image'+ (i+1) +'.jpg" alt="" />');
        console.log("added image " + (i+1));
    }
}
function AddImagesinWorkShowcase(){
    //Add images in showcase index automatically
    let showcaseCount = $(".showcase-wrapper").length;
    console.log("number of showcase in this page is "+ showcaseCount);
    for(let i = 0 ; i < showcaseCount ; i++){
        let targetDiv = $(".showcase-wrapper").eq(i).attr("id");
        $(".showcase-wrapper").eq(i).find(".showcase-image").append('<img class="toggle-size" src="assets/images/projects/'+targetDiv+'/thumbnail.jpg" alt="" />');
        console.log("added showcase background of "+targetDiv);
    }
}
function Show(i) {
    let target = i.find(".hover-show");
    target.stop(true)
        .transition(
            { opacity: 100 }
        );
}
function Hide(i) {
    let target = i.find(".hover-show");
    target.stop(true)
        .transition(
            { opacity: 0 }
        );
}
function IncreaseSize(i) {
    let target = i.find(".hover-size");
    target.stop(true)
        .transition(
            { scale: 1.1 }
        );
}
function DecreaseSize(i) {
    let target = i.find(".hover-size");
    target.stop(true)
        .transition(
            { scale: 1 }
        );
}