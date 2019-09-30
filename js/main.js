$(function() {
    'use strict';
    // Deal with Tabs
    $('.tab-switch li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs-section .tabs-content > div').hide();
        $($(this).data('class')).show();
    });
});