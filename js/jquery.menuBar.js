(function($) {
		var defaults = {
			targetContent: ".page",
			targetMenu: ".menu",
			btn: "#menuBtn",
			showClass: "zoomDown1",
			closeClass: "zoomDown2"
		}

		$.fn.menuBar = function(options) {
			options = $.extend(defaults, options);
			var that = $(this);
			$(options.btn).on("click", function() {
				//实现代码 
				var page = that.find(options.targetContent);
				if (!page.hasClass(options.showClass) && !page.hasClass(options.closeClass)) {
					page.addClass(options.showClass);
				} else {
					page.toggleClass(options.showClass);
					page.toggleClass(options.closeClass);
				}
			});

		};

})(jQuery);