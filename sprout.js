/**
 *
 * Sprout.js
 * 
 * Horizontally Even Columns
 *
 * @param {object}
 * @param {boolean} 'responsive'
 * @param {integer} 'responsiveDelay'
 * @param {string}  'bindTo'
 * @param {string}  'childElement'
 *
 */
 
;(function ($) {

	'use strict';
	
	$.fn.sprout = function (options) {
	
		/* Compile settings */
		var settings = $.extend({
			'responsive':      true,
			'responsiveDelay': 50,
			'bindTo':          null,
			'childElement':    null
		}, options);
		
		/* Grab the element instance */
		var column = $(this);
		
		// set everything else
		var currentTallest = 0;
		var currentRowStart = 0;
		var rowItems = [];
		var topPosition = 0;
		var
			$el,
			timer;
		
		var equalHeight = function () {
		
			column.each(function () {
		
				$el = $(this).height('auto');
		
				if (settings.childElement) {
		
					$el.find(settings.childElement).height('auto');
				}
		
				topPosition = $el.position().top;
		
				if (currentRowStart !== topPosition) {
		
					for (var y = 0; y < rowItems.length; y++) {
		
						rowItems[y].height(currentTallest);
					}
		
					rowItems.length = 0;
					currentRowStart = topPosition;
					currentTallest = $el.height();
					rowItems.push($el);
		
				} else {
		
					rowItems.push($el);
					currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
				}
		
				for (var x = 0; x < rowItems.length; x++) {
		
					if (settings.childElement) {
		
						rowItems[x].find(settings.childElement).height(currentTallest);
					}
		
					rowItems[x].height(currentTallest);
				}
			});
		};
		
		$(window).load(function () {
		
			// Initiate on page load...
			equalHeight();
		});
		
		if (settings.bindTo) {
		
			$(document).bind(settings.bindTo, function () {
		
				// Bind it to other events
				equalHeight();
			});
		}
		
		if (settings.responsive === true) {
		
			$(window).bind('resize', function () {
		
				// ...and then again on window resize.
				if(timer) {
					clearTimeout(timer);
				}
				
				timer = setTimeout(equalHeight, settings.responsiveDelay);
			});
		}
	};
	
})(jQuery);
