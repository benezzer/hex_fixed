// JavaScript Document
$(document).ready(function(){
	//find out what kind of transform this browser likes
  var allKinds = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
  var thisKind=null;
  var thediv = document.createElement('div');
  
  for(var i = 0, l = allKinds.length; i < l; i++) {
	if(typeof thediv.style[allKinds[i]] !== "undefined") {
	thisKind = allKinds[i];
	break;
	}
}
//////////////////
var Yrotate = 0;

///left arrow click
$('#left_arrow').click(function(){
Yrotate -= 60;
doMove();
});

//right arrow click
$('#right_arrow').click(function(){
Yrotate += 60;
doMove();
});



//detect keyboard left- right arrow clicks
$('body').keydown(function(evt) {
	switch(evt.keyCode) {
	case 37: // left
	Yrotate -= 60;
	evt.preventDefault();
	break;

	case 39: // right
	Yrotate += 60;
	evt.preventDefault();
	break;
};
	
doMove();

})
//////////////////////////////////////////////

///detect swipe

 $( '#parent_of_myhex' ).on( "swipeleft", swipeLeftHandler );
function swipeLeftHandler(event ){
	Yrotate -= 60;
doMove();
}

 $( '#parent_of_myhex' ).on( "swiperight", swipeRightHandler );
function swipeRightHandler(event ){
	Yrotate += 60;
doMove();
}

//the func to actually move	
function doMove(){
	$('#myhex').css(thisKind, "rotateY("+Yrotate+"deg) ");
}


});///end document ready