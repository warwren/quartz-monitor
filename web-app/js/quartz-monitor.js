if (jQuery) {
	(function($, window) {
		var
        xOffset = 10,
		yOffset = 20,
        init = function() {
            $('.quartz-to-hide').hide();
			$('.quartz-tooltip')
                .hover(function(e){
                    var tooltipData = $(this).data('tooltip');
                    if (tooltipData === "") return;
                    displayToolTip(tooltipData, (e.pageX + yOffset), (e.pageY - xOffset));
                },
                function(){
                    $("#quartz-tooltip").remove();
                })
                .mousemove(function(e){
                    $("#quartz-tooltip")
                        .css("top",(e.pageY - xOffset) + "px")
                        .css("left",(e.pageX + yOffset) + "px");
                });
		},

        displayToolTip = function(tooltipData, x, y) {
            $('<p></p>')
                    .text(tooltipData)
                    .attr('id', 'quartz-tooltip')
                    .css("top", y + "px")
                    .css("left", x + "px")
                    .appendTo('body')
                    .fadeIn("fast");
        };

		$(init);

	}(jQuery, this));
}