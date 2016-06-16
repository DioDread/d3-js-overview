(function() {
    'use strict';
    var resolution = {
        width: 1920,
        height: 1080
    };

    if (document.documentElement.clientWidth && document.documentElement.clientHeight) {
        resolution.width = document.documentElement.clientWidth;
        resolution.height = document.documentElement.clientHeight;
    }

    var svg = d3.select('body').append('svg')
        .attr('id', 'back')
        .attr('width', resolution.width)
        .attr('height', resolution.height);

    var gradient = svg.append('defs')
        .append('linearGradient')
        .attr('id', 'gradient')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '100%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');

    gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#1e4eac')
        .attr('stop-opacity', 1);

    gradient.append('stop')
        .attr('offset', '60%')
        .attr('stop-color', '#8941d0')
        .attr('stop-opacity', 1);

    svg.append('rect')
        .attr('width', resolution.width)
        .attr('height', resolution.height)
        .style('fill', 'url(#gradient)');

}());
