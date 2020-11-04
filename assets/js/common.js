$(function(){
    $(".showcase-wrapper").on("mouseover", ShowcaseAnimationStart);
    $(".showcase-wrapper").on("mouseout", ShowcaseAnimationEnd);
    function ShowcaseAnimationStart(){
        let firingelem_id = "#"+$(this).attr('id');
        Show(firingelem_id);
        IncreaseSize(firingelem_id);
        console.log("Showcase " + firingelem_id + " is shown");
    }
    function ShowcaseAnimationEnd(){
        let firingelem_id = "#"+$(this).attr('id');
        Hide(firingelem_id);
        DecreaseSize(firingelem_id);
        console.log("Showcase " + firingelem_id + " is hidden");
    }
    function Show(i){
        $(i+" .hover-show")
            .stop(true)
            .transition(
                {opacity : 100}
            );
    }
    function Hide(i){
        $(i+" .hover-show")
            .stop(true)
            .transition(
                {opacity : 0}
            );
    }
    function IncreaseSize(i){
        $(i+" .hover-size")
            .stop(true)
            .transition(
                {scale : 1.1}
            );
    }
    function DecreaseSize(i){
        $(i+" .hover-size")
            .stop(true)
            .transition(
                {scale : 1}
            );
    }
  });
