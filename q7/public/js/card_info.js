console.log("java script client!");
$(document).ready(function () {
let searchParams = new URLSearchParams(window.location.search);
let param = searchParams.get('id');
  $("h1").append(param);
  $("img").attr("src",`../assets/image${param}.jpg`);
});