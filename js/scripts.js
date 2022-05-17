// ----------------------------------------
// Imagination: JS > Scripts
// ----------------------------------------

$(document).ready(function() {
	
	// Changes to the header when a language selector is present.
	
	function languageSelector() {
    	if ($('.language-selector')) {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    
			$('.bk-nav').css('top', languageSelectorHeight+'px');
			$('.bk-nav').css('margin-top', '0');
			$('.bk-header').css('top', languageSelectorHeight+'px');
			$('.bk-header').css('margin-top', '0');
    	}
	}
	
	languageSelector();

    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	
    $(document).bind("DOMSubtreeModified",function(){
		languageSelector();
		$(window).resize(function() {
			languageSelector();
		});
    });

	// Hides other submenus when a main menu point with a submenu is clicked.
    
	$(".extendednavigation > ul > li").click(function() {
		$(this).siblings(".extendednavigation > ul > li.folder").removeClass("folder-open");
	});
});