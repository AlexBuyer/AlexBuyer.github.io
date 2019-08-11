$(function() {


/*												header-navbar 					*/


/*        click гамбургер> sidebar  */
// $('.bars-block__link').toggle(
// 	function() {
// 		$('.navbar-container').css('width', '64px');
// 	}, 
// 	function () {
// 		$('.navbar-container').css('width', '250px');
// 	}
// );



// $("#bars-collapse").click(
// 	function(){
// 		$(".navbar-container").css('width', '64px')
// 	},
// 	function(){
// 		$(".navbar-container").css('width', '200px')
// 	}	


// )



var toggle = false;
$('#bars-collapse').click(function() {
    toggle = !toggle;

    if(toggle){
        $('.navbar-container').css('width', '64px').css('overflow', 'hidden');
        $('#logo-text').css('display', 'none');
        $('.sidebar').css('width', '64px');
        $('.sidebar .list-item__text').css('display', 'none');
        $('.sidebar-list .sidebar-list__item a').css('justify-content', 'center')
    }
    else{
        $('.navbar-container').css('width', '250px').css('overflow', 'visible');
        $('#logo-text').css('display', 'block');
        $('.sidebar').css('width', '250px');
        $('.sidebar .list-item__text').css('display', 'block');
    }

});















/*          выпадающий список create    */
$(".create-block__link").click(function(){
  $("#drop-create").slideToggle(100);
});
$(document).mouseup(function(e) {
	var drop = $('#drop-create')
	if(!drop.is(e.target) && drop.has(e.target).length === 0) {
		drop.hide()
	}
});


/*               search              */
$(".search-block__link").click(function(){
  // $(".search-form__input").css('height', '64px'),
  $(".search-form").slideDown(100),
  $(".search-form__close").fadeToggle(1000);
})
/*		закрыть поиск*/
$(".search-form__close").click(function(){
	$(".search-form").css('display', 'none'),
	$(this).css('display', 'none')
});	


/*          выпадающий список alert    */
$(".alert-block__link").click(function(){
  $("#drop-alert").slideToggle(100);
});
$(document).mouseup(function(e) {
	var drop = $('#drop-alert')
	if(!drop.is(e.target) && drop.has(e.target).length === 0) {
		drop.hide()
	}
});


/*          выпадающий список comment    */
$(".comment-block__link").click(function(){
  $("#drop-comment").slideToggle(100);
});
$(document).mouseup(function(e) {
	var drop = $('#drop-comment')
	if(!drop.is(e.target) && drop.has(e.target).length === 0) {
		drop.hide()
	}
});




/*          выпадающий список account    */
$(".account-block__link").click(function(){
  $("#drop-account").slideToggle(100);
});
$(document).mouseup(function(e) {
	var drop = $('#drop-account')
	if(!drop.is(e.target) && drop.has(e.target).length === 0) {
		drop.hide()
	}
});



/*выпадающий collapse-container при клике по ellipse-icon*/
  $(".ellipse-block__link").click(function(){
    $(".collapse-container").slideToggle("500").css("display","flex");
  });







/*												sidebar					*/

/*          выпадающие списки .drop-list   */
$(".sidebar-list>li").click(function(){
  $(".dropdown-list", this).slideToggle(100)
});
$(document).mouseup(function(e) {
	var drop = $(".dropdown-list", this)
	if(!drop.is(e.target) && drop.has(e.target).length === 0) {
		drop.hide()
	}
});












});



