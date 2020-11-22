$(function () {
  OnLoad(); //Load all the state when document ready
  $(".work-wrapper").on("mouseover", WorkHoverIn).on("mouseout", WorkHoverOut);
  $(".genre-button").on("click", ShowGenre);

  $(document).on("click", ".modal-close", ModalClose);
  $(document).on("click", ".showcase .image", ModalOpen);
  function ModalClose() {
    $(".modal").css({ display: "none" });
    $(".modal .modal-image").html("");
    $(".modal .modal-title").html("");
  }
  function ModalOpen() {
    let imageSource = $(this).html();
    let imageTitle = $(this).find("img").attr("alt");
    $(".modal .modal-image").html(imageSource);
    $(".modal .modal-title").html(imageTitle);
    $(".modal").css({ display: "block" });
  }
});
function OnLoad() {
  $(".hide-load").css({ opacity: "0" });
  $(".genre-button[data-genre='all']").css({
    "background-color": "var(--clr-box)",
  });
}
function WorkHoverIn() {
  $(this).find(".hide-load").stop(true).transition({ opacity: 1 }, 200);
  $(this).find(".work-box-image").stop(true).transition({ scale: 1.1 });
}
function WorkHoverOut() {
  $(this).find(".hide-load").stop(true).transition({ opacity: 0 }, 200);
  $(this).find(".work-box-image").stop(true).transition({ scale: 1 });
}
function ShowGenre() {
  let source = $(this).attr("data-genre"); //data-genre of clicked button
  //box that will be changed
  $(".genre-button")
    .stop(true)
    .transition({ "background-color": "rgba(0, 0, 0, 0)" });
  $(this).stop(true).transition({ "background-color": "rgba(0, 0, 0, 0.1)" });
  console.log("Showing work of " + source);
  for (i = 0; i < $(".work-wrapper").length; i++) {
    let target = $(".work-wrapper").eq(i).attr("data-genre");
    if (!target.includes(source)) {
      $(".work-wrapper").eq(i).hide();
    } else if (target.includes(source)) {
      $(".work-wrapper").eq(i).show();
    }
  }
}
