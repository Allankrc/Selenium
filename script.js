/*--------Tinymce----------*/
tinymce.init({ selector: "textarea" });
/*--------End Angular----------*/
$(".cm-sidebar-user .menu-text").click(function(e) {
	$("ul.menu-sidebar-items").slideToggle("fast");
	$(".cm-sidebar-user").toggleClass("open");
});
$(document).click(function(e) {
	e.stopPropagation();
	$("ul.menu-sidebar-items").slideUp("fast");
	$(".cm-sidebar-user").removeClass("open");
});
$(".cm-sidebar-user .menu-text").click(function(e) {
	e.stopPropagation();
});
$(document).on("click", ".cm-flex-tabber ul > li", function(ev) {
	$(this).addClass("active").siblings().removeClass("active");
});
$(document).on("click", ".cm-flex-tabber ul li a i.closeTab", function(ev) {
	ev.stopPropagation();
	var getTabContentID = $(this).parent("a").attr("data-id");
	$(getTabContentID).remove();
	$(this).closest("li").remove();
});
$(".cm-flex-tabber ul#tab-containment-wrapper").sortable({
	axis: "x",
	containment: "#tab-containment-wrapper",
	scroll: false
});
var tabIndex = 0;
$(".addTab").click(function() {
	tabIndex++;
	$("ul#tab-containment-wrapper").append(
		' <li><a data-id="#add-tab' +
			tabIndex +
			'"><span>Add Tab #' +
			tabIndex +
			'</span><i class="closeTab fa fa-times"></i></a>'
	);
	$(".custom-main-data").append(
		'<div id="add-tab' +
			tabIndex +
			'" class="main-tab-data" >Additional Tab Content' +
			tabIndex +
			"</div>"
	);
});
$(
	document
).on("click", ".cm-flex-tabber ul#tab-containment-wrapper li a", function() {
	var getTabContentID = $(this).attr("data-id");
	var tabText = $(this).find("span").text();
	$(".tab-section").text(tabText);
	$(getTabContentID)
		.addClass("active-open-tab")
		.show()
		.siblings(".main-tab-data")
		.addClass("remove-open-tab")
		.hide();
});
$(document).on("click", "button#sendEmail", function() {
	$(this).toggleClass("processing");
});
// https://codepen.io/supah/pen/VvWXXJ
//https://codepen.io/lukejacksonn/pen/PwmwWV
$(".side-menu-according-to-tabber-wrapper ul").sortable({
	revert: true,
	containment: ".cm-sidebar",
	scroll: false
});

$(document).on("click", "[tab-tab-rel]", function() {
	var tabTabRel = $(this).attr("tab-tab-rel");
	$(this)
		.addClass("tab-tab-active-menu")
		.siblings()
		.removeClass("tab-tab-active-menu");
	$(tabTabRel)
		.addClass("active-tab-tab")
		.siblings(".tabber-contents-inner")
		.removeClass("active-tab-tab");
});

$(document).on("mousedown", ".cm-flex-tabber ul li a", function(event) {
	if (event.which == 2) {
		var getTabContentID = $(this).attr("data-id");
		$(getTabContentID).remove();
		$(this).closest("li").remove();
	}
});
$("table.large-data .checkbox input").click(function() {
	if ($(this).is(":checked")) {
		$(this).closest("tr").addClass("selected-data");
	} else {
		$(this).closest("tr").removeClass("selected-data");
	}
});
$("table.large-data thead th.two").click(function() {
	if ($("table.large-data .checkbox input:checkbox").attr("checked")) {
		$("table.large-data .checkbox input:checkbox").removeAttr("checked");
		$("table.large-data .checkbox input")
			.closest("tr")
			.removeClass("selected-data");
	} else {
		$("table.large-data .checkbox input:checkbox").attr("checked", "checked");
		$("table.large-data .checkbox input").closest("tr").addClass("selected-data");
	}
});

/* 
$('a').mousedown(function(event) {
   if (event.which == 2 ) {
 
	    alert('middle button pressed');
}
}); */


tinymce.init({
  selector: 'textarea',
  height: 400,
  menubar: true,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks advcode fullscreen',
    'insertdatetime media table contextmenu powerpaste tinymcespellchecker a11ychecker linkchecker mediaembed'
  ],
  toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | advcode spellchecker  a11ycheck code',
  table_toolbar: "tableprops cellprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
  powerpaste_allow_local_images: true,
  powerpaste_word_import: 'prompt',
  powerpaste_html_import: 'prompt',
  spellchecker_language: 'en',
  spellchecker_dialog: true,
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tinymce.com/css/codepen.min.css']
});