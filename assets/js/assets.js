$(function () {
  let target = $("html");
  AddThumbnail();
  AddShowcaseElement();
  target.find("header").load("../assets/element/header.html");
  target.find("footer").load("../assets/element/footer.html");
  target.find(".modal").load("../assets/element/modal.html");
});
function AddShowcaseElement() {
  //Add element specific to page, EN or JP
  let htmlId = $("html").attr("id"); //get the id of the html for each project
  let targetspecific = $("html.project-showcase#" + htmlId);
  targetspecific
    .find("div.page")
    .load("../assets/images/projects/" + htmlId + "/page-en.html", function () {
      //ADD IMAGE
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
      //ADD TEXT VIA JSON
      let openJson;
      switch ($("html").attr("lang")) {
        case "en":
          openJson = "../assets/element/explanation-en.json";
          break;
        case "jp":
          openJson = "../assets/element/explanation-jp.json";
          break;
      }
      fetch(openJson)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].id == htmlId) {
              $(".main-title").html(data[i]["main-title"]);
              $(".sub-title").html(data[i]["sub-title"]);
              $(".roles").html(data[i]["roles"]);
              $(".types").html(data[i]["types"]);
              $(".tools").html(data[i]["tools"]);
              $(".showcase .explanation").html(data[i]["explanation"]);
              for (j = 0; j < $(".showcase .image").length; j++) {
                let target = $(".showcase .image").eq(j).find("img");
                let imageName = "image" + (j + 1);
                let altAttr = data[i][imageName];
                target.attr("alt", altAttr);
              }
            }
          }
        });
    });
}

function AddThumbnail() {
  for (i = 0; i < $(".work-wrapper").length; i++) {
    let target = $(".work-wrapper").eq(i);
    if (target.attr("id") == "") {
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
}
