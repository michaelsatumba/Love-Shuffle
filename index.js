function random() {


var x = Math.floor(Math.random() * 55) + 1;


$(".imageClass").attr("src", "images/" + x);

}
