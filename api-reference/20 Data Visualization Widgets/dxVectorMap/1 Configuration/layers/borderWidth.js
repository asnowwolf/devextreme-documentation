﻿$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            borderColor: 'darksalmon',
            color: 'cornsilk',
            borderWidth: 3
        }]
    });
});