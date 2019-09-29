$(function() {
  var $p = $(".father p");
  var divH = $(".father").height();
  while ($p.outerHeight() > divH) {
    $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
  }
});
