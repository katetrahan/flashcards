$(document).ready(function() {
    $(".term").click(function(){
      $(this).toggle("fast")
      $(this).next().toggle("fast")
  })
  $(".definition").click(function(){
    $(this).toggle("fast")
    $(this).prev().toggle("fast")
})
});
