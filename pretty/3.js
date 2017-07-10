$('.ct-nva>li').on('click', function() {
  var $this = $(this);
  var index = $this.index();
  var pannelHeight = $(".ct-list").height();
 
  $this.addClass("active").siblings().removeClass("active");
  $this.parents("#ct").
  find(".pannel").eq(index)
    .addClass("active").siblings().removeClass("active");
  $this.parents("#ct").
  find(".pannel").animate({
    top: -pannelHeight * index
  });
});



$(".ct-itmes").on("mouseenter", function() {
  $(this).find('.ct-bg').show();
  $(this).find(".go").show();
});
$(".ct-itmes").on("mouseleave", function() {
  $(this).find('.ct-bg').hide();
  $(this).find(".go").hide();
});