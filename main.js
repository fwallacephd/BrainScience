$(".learningstyles").hide();
$(".brainscience").hide();
$(".brainscience").show();
$(".brainHack").hide();

$(".cardStyles").on("click", function (){
  $(".allCards").hide();
  $(".learningstyles").show();
  $(".brainscience").hide();
  $("blockquote").text("Learning Styles are the brain’s preferred method of understanding and retaining new information. Everyone has a unique mix of the seven different learning styles.")
});

$(".backbutton").on("click", function() {
  $(".learningstyles").hide();
  $(".allCards").show();
  $(".tagline").show();
  $(".brainHack").hide();
  $("blockquote").text("Learn about Brain Science and how it can make your life easier when learning to code.")
})

$(".cardHack").on("click", function() {
  $(".allCards").hide();
  $(".learningstyles").hide();
  $(".brainscience").show();
  $(".brainHack").show();
  $(".hacks").show();
  $("blockquote").text("Some simple brain science hacks will help you move more quickly and efficiently through your coding curriculum.")
})

