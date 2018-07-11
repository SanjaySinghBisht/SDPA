/* Common Plugin Jquery for small snippets of codes*/
$(document).ready(function() {
	$('.right .btn').hide();
	// checkboxes for grid view
	$('.checkbox').click( function() {
		if($(this).hasClass('checked')) {
			$(this).removeClass('checked');
			$(this).parent('tr').addClass(checked);
		}
		else {
			$(this).addClass('checked');
		}
	});
	
	$('.grid-data .div_table .row .cell').wrapInner('<span></span>');
	$('.grid-data .div_table .row .cell').wrapInner('<div class="grid-content"></div>');
	
	$('.checkbox input[type="checkbox"]').click( function() {
			if($(this).is(":checked")) {
				$(this).closest("div.row").addClass('checked');
				$(this).attr('disabled','disabled')
			}
			else {
				$(this).closest("div.row").removeClass('checked');
			}
			if ($('.checkbox input[type="checkbox"]:checked').length == 0) {
				$('.right .btn').hide();
			}
			
			else if ($('.checkbox input[type="checkbox"]:checked').length == 1) {
				$('.right .btn').show();
				$('.btn.hide_condition').show();
			}
			
			else if ($('.checkbox input[type="checkbox"]:checked').length > 1 ) {
				$('.btn.hide_condition').hide();
			}
	});	
});

function settabs() {
	var tab_length = $(".div_table .heading div").length;
	if(tab_length == 4) {
		$( ".div_table .heading div:nth-child(1)" ).css("width", "35%");
		$( ".div_table .heading div(2)" ).css("width", "15%");
		$( ".div_table .heading div(3)" ).css("width", "15%");
		$( ".div_table .heading div(4)" ).css("width", "35%");
	}
	else if(tab_length == 5) {
		$( ".div_table .heading div(1)" ).css("width", "30%");
		$( ".div_table .heading div(2)" ).css("width", "15%");
		$( ".div_table .heading div(3)" ).css("width", "15%");
		$( ".div_table .heading div(3)" ).css("width", "15%");
		$( ".div_table .heading div(4)" ).css("width", "25%");
	}
}