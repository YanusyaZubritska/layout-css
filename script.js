/*
$(document).ready(function() {
   $('#documents').jScrollPane();
});
$('#documents').jScrollPane({mouseWheelSpeed: 70});
$('#documents').jScrollPane({autoReinitialise: true});
$('#documents').jScrollPane({autoReinitialise: true, autoReinitialiseDelay: 5000}); */



$(".move_block").swipe( {
        swipeLeft:leftSwipe,
        swipeRight:rightSwipe,
        threshold:0
});
function leftSwipe(event){
        alert('swipe left');
}
function rightSwipe(event){
        alert('swipe right');
}