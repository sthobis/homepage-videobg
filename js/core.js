$(document).ready(function()
{
   $("#navbar").hide();
});

function navbar_toggle() {
   var el = $("#navbar");
   if (el.is(":hidden"))
      $("#navbar").fadeIn("350");
   else
      $("#navbar").fadeOut("350");
}