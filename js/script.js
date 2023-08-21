$(document).ready(function () {
  $("#button").on("click", newItem);
  $("#list").on("dblclick", "li", crossOut);
  $("#list").on("click", ".crossOutButton", deleteListItem);
  $("#list").sortable();

  function newItem() {
    let inputValue = $("#input").val().trim();

    if (inputValue === "") {
      alert("You must write something!");
    } else {
      let li = $("<li></li>").text(inputValue);
      li.append("<button class='crossOutButton'>X</button>");
      $("#list").append(li);
      $("#input").val("");
    }
  }

  function crossOut() {
    $(this).toggleClass("strike");
  }

  function deleteListItem() {
    $(this).parent().addClass("delete");
  }
});
