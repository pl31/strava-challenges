$(function() {
    $("iframe").each(function(index, element) {
        $(element).on("load",function() {
          console.log("iframe loaded");
        });
    });
});
