
    $(function(){
    	var $btn = $('.loading');
    	$btn.click(function(){
    		$(".fakeloader").fakeLoader({
                timeToHide:1000,
                bgColor:"#ddd", 
                spinner:"spinner5" //进度条颜色
            });
            $('#h-fill-animated .progress-bar').each(function () {
	            var $pb = $(this);
	            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
	            $pb.progressbar({display_text: 'fill'});
        	});
    	});
    });

	