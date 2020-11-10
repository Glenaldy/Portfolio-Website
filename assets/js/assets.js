$(function () {
  let target = $("html");
  target.find("header").load("../assets/element/header.html");
  target.find("footer").load("../assets/element/footer.html");

  //Add element specific to page, EN or JP
  let HtmlID = $("html").attr("id");
  let targetspecific = $("html.project-showcase#" + HtmlID);
  switch ($("html").attr("lang")) {
    case "en":
      targetspecific
        .find("div.page")
        .load(
          "../assets/images/projects/" + HtmlID + "/page-en.html",
          function () {
            AddShowcaseElement();
          }
        );
      break;
    case "jp":
      targetspecific
        .find("div.page")
        .load(
          "../assets/images/projects/" + HtmlID + "/page-jp.html",
          function () {
            AddShowcaseElement();
          }
        );
      break;
  }

  //Add Images in Main Page
  for (i = 0; i < $(".work-wrapper").length; i++) {
    let target = $(".work-wrapper").eq(i);
    if (target.attr("id") == "") {
      //something
      console.log("There's no image to display in box");
    } else {
      target
        .find(".work-box-image")
        .append(
          '<img src="../assets/images/projects/' +
            target.attr("id") +
            '/thumbnail.jpg" alt="" />'
        );
      console.log(target.attr("id") + " image added in box");
    }
  }

  //Add Image in work showcase
});
function AddShowcaseElement() {
  for (i = 0; i < $(".showcase .image").length; i++) {
    let target = $(".showcase .image").eq(i);
    target.append(
      '<img src="../assets/images/projects/' +
        $("html").attr("id") +
        "/image" +
        (i + 1) +
        '.jpg" alt="" />'
    );
  }
  let HtmlID = $("html").attr("id");
  switch ($("html").attr("lang")) {
    case "en":
      $("html.project-showcase#" + HtmlID)
        .find("div.page div.showcase .explanation")
        .load("../assets/images/projects/" + HtmlID + "/explanation-en.html");
      break;
    case "jp":
      $("html.project-showcase#" + HtmlID)
        .find("div.page div.showcase .explanation")
        .load("../assets/images/projects/" + HtmlID + "/explanation-jp.html");
      break;
  }
}
