$(function () {
  //Add Images in Main Page
  for (i = 0; i < $(".work-wrapper").length; i++) {
    let target = $(".work-wrapper").eq(i);
    if (target.attr("id") == "") {
      //something
      console.log("There's no image to display");
    } else {
      target
        .find(".work-box-image")
        .append(
          '<img src="assets/images/projects/' +
            target.attr("id") +
            '/thumbnail.jpg" alt="" />'
        );
      console.log(target.attr("id"));
    }
  }

  //Add Image in work showcase
  for (i = 0; i < $(".showcase .image").length; i++) {
    let target = $(".showcase .image").eq(i);
    target.append(
      '<img src="assets/images/projects/' +
        $("html").attr("id") +
        "/image" +
        (i + 1) +
        '.jpg" alt="" />'
    );
  }
});
