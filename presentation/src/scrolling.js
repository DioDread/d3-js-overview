(function() {
    'use strict';
    var slides = d3.selectAll('.slide');
    var scrollDown = d3.select('#scroll-down');
    var scrollUp = d3.select('#scroll-up');
    var scrollable = d3.select('.main-container');
    var slidesCount = slides[0].length;
    var position = 0;
    var scrollHeight = document.documentElement.clientHeight;

    scrollDown.on('click', function() {
        // alert(scrollHeight);
        if (position + 1 == slidesCount) {
            return;
        }
        position++;
        var scrollheight = scrollable.property("scrollHeight");
        // scrollable.transition().duration(3000)
        //     .tween("uniquetweenname", scrollTopTween(scrollheight));
        var el = slides[0][position];
        scrollHeight += el.clientHeight;
        window.scrollTo(0, el.offsetTop);
    });

    scrollUp.on('click', function() {
        // alert(scrollHeight);
        if (position == 0) {
            return;
        }
        position--;
        var scrollheight = scrollable.property("scrollHeight");
        // scrollable.transition().duration(3000)
        //     .tween("uniquetweenname", scrollTopTween(scrollheight));
        var el = slides[0][position];
        scrollHeight += el.clientHeight;
        window.scrollTo(0, el.offsetTop);
    });

    function scrollTopTween(scrollTop) {
        return function() {
            var i = d3.interpolateNumber(this.scrollTop, scrollTop);
            return function(t) {
                this.scrollTop = i(t);
            };
        };
    }
}());
