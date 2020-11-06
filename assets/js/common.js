$(function () {
    $(".showcase-wrapper").on("mouseover", ShowcaseAnimationStart);
    $(".showcase-wrapper").on("mouseout", ShowcaseAnimationEnd);
    $("li.genre-button").on("click", ShowGenre);
    $("button.reset-genre, div.main").on("click", RestoreGenre);
    AddImagesinExplanationPage();
    AddImagesinWorkShowcase();
});
function ShowcaseAnimationStart() {
    let target = $(this);
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
function ShowGenre(){
    let source = $(this).attr("data-genre");
    let target = $(".showcase-wrapper");
    for (let i = 0; i < $(".showcase-wrapper").length; i++){
        if (!target.eq(i).attr("data-genre").includes(source)){
            target.eq(i).stop(true)
            .transition(
                {"opacity" : "0"}, 400
            )
            .transition(
                {"display":"none"}
            )
            ;
            console.log("Removed showcase for " + target.eq(i).attr("id"));
        }else if(target.eq(i).attr("data-genre").includes(source)){
            target.eq(i).stop(true)
            .transition(
                {"display":"flex"}
            )
            .transition(
                {"opacity" : "100"}, 400
            )
            ;
            console.log("Added showcase for " + target.eq(i).attr("id"));
        }
    }
}
function RestoreGenre(){
    $(".showcase-wrapper").stop(true)
    .transition(
        {"display":"flex"}
    )
    .transition(
        {"opacity" : "100"}, 400
    )
    ;
}