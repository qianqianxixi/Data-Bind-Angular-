/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
-----------------------------------------------------------------------*/
(function ($) {
 
    $.fn.fakeLoader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide:1200, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex 
            bgColor: '#2ecc71', // Default background color
            spinner:'spinner7', //  主要区别于颜色不同
            imagePath:'' // Default Path custom image
        }, options);

        //Customized Spinners
        var spinner01 = '<div class="container">'+
                            '<div id="content">'+
                                '<div class="tab-content">'+
                                    '<div class="tab-pane fade in active" id="h-fill-animated">'+
                                        '<div class="bs-example">'+
                                            '<div class="progress progress-striped active"><div class="progress-bar progress-bar-striped" role="progressbar" data-transitiongoal-backup="90"></div></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'

        var spinner02 = '<div class="container">'+
                            '<div id="content">'+
                                '<div class="tab-content">'+
                                    '<div class="tab-pane fade in active" id="h-fill-animated">'+
                                        '<div class="bs-example">'+
                                            '<div class="progress progress-striped active"><div class="progress-bar progress-bar-success" role="progressbar" data-transitiongoal-backup="100"></div></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
        var spinner03 = '<div class="container">'+
                            '<div id="content">'+
                                '<div class="tab-content">'+
                                    '<div class="tab-pane fade in active" id="h-fill-animated">'+
                                        '<div class="bs-example">'+
                                            '<div class="progress progress-striped active"><div class="progress-bar progress-bar-info" role="progressbar" data-transitiongoal-backup="100"></div></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
        var spinner04 = '<div class="container">'+
                            '<div id="content">'+
                                '<div class="tab-content">'+
                                    '<div class="tab-pane fade in active" id="h-fill-animated">'+
                                        '<div class="bs-example">'+
                                            '<div class="progress progress-striped active"><div class="progress-bar progress-bar-warning" role="progressbar" data-transitiongoal-backup="100"></div></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>' 
        var spinner05 = '<div class="container">'+
                            '<div id="content">'+
                                '<div class="tab-content">'+
                                    '<div class="tab-pane fade in active" id="h-fill-animated">'+
                                        '<div class="bs-example">'+
                                            '<div class="progress progress-striped active"><div class="progress-bar progress-bar-danger" role="progressbar" data-transitiongoal-backup="100"></div></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'

        //The target
        var el = $(this);
        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

       // Each 
        // el.each(function() {
        //     var a = settings.spinner;
        //     //console.log(a)
        //         switch (a) {
        //             case 'spinner1':
        //                     el.html(spinner01);
        //                 break;
        //             case 'spinner2':
        //                     el.html(spinner02);
        //                 break;
        //             case 'spinner3':
        //                     el.html(spinner03);
        //                 break;
        //             case 'spinner4':
        //                     el.html(spinner04);
        //                 break;
        //             case 'spinner5':
        //                     el.html(spinner05);
        //                 break;
        //             default:
        //                 el.html(spinner01);
        //             }

        //         //Add customized loader image

        //         if (settings.imagePath !='') {
        //             el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
        //             centerLoader();
        //         }
        // });

        //Time to hide fakeLoader
        setTimeout(function(){
            $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader
 

        //Center Spinner
        function centerLoader() {

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });

        }
 
        $(window).load(function(){
                centerLoader();
              $(window).resize(function(){
                centerLoader();
              });
        });


}(jQuery));



