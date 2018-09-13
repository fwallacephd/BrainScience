$(".learningstyles").hide();

$(".cardStyles").on("click", function (){
  $(".allCards").hide();
  $(".learningstyles").show();
  $("blockquote").text("Learning Styles are the brain’s preferred method of understanding and retaining new information. Everyone has a unique mix of the seven different learning styles.")
});