$(function () {
    $(".showcase-wrapper")
        .on("mouseover", ShowcaseAnimationStart)
        .on("mouseout", ShowcaseAnimationEnd);
    $("li.genre-button").on("click", ShowGenre).on("click", CollapseGenre);
    $(".reset-genre, div.main").on("click", RestoreGenre);
    $(".clickable")
        .on("mouseover", ClickableIN)
        .on("mouseout", ClickableOUT);
    $(".expander").on("click", ExpandGenre);

    AddImagesinExplanationPage();
    AddImagesinWorkShowcase();
    $("a").addClass("clickable");
});
let PageWidth = window.innerWidth;
$(window).resize(function(){
    PageWidth = window.innerWidth;
})
let expandstate = false;
console.log("Current state is "+expandstate);
function ExpandGenre(){
    let i = this;
    if(PageWidth < 767 && expandstate === false){
        Expand(i);
        $(".reset-genre #sort").html("Filter"); //THIS IS BAD AF
    }
    else if(PageWidth < 767 && expandstate === true){Collapse(i);}
    
}
function CollapseGenre(){
    if(PageWidth < 767 && expandstate === true){
        Collapse($(".expander"));
        $(".reset-genre #sort").html("Filter"); //THIS IS ALSO BAD AF
    }
}
function Expand(i){
    $(i).siblings(".expand-target")
        .stop(true)
        .transition({"display" : "flex"}, 0)
        .transition(
            {scale: [1.0, 1.0]}, 300, 'snap'
        )
    expandstate = true;
    console.log(i);
    console.log("Menu expanded\nCurrent state is "+expandstate);
}
function Collapse(i){
    $(i).siblings(".expand-target")
        .stop(true)
        .transition(
            { scale: [1.0, 0]}, 300, 'snap'
        )
        .transition({"display" : "none"})
    expandstate = false;
    console.log("Menu collapsed\nCurrent state is "+expandstate);
}
function ClickableIN(){
        $(this).stop(true).transition(
            {opacity : 0.7}, 100
            );
    }
function ClickableOUT(){
    $(this).stop(true).transition(
        {opacity : 1}, 50
        );
    }
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
    $(".genre-button").css({"font-weight": "normal"});
    $(this).css({"font-weight": "bold"});
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
    $(".reset-genre #sort").html("Reset");
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
    $(".reset-genre #sort").html("Filter");
}