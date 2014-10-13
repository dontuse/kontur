$(function () {

    var $elem = $('.b-kontur-c__total');

    $('.b-button').on('click', function () {
        checkInViewPort($elem) ?
            $elem.addClass('.b-kontur-c__total_stycky') :
            $elem.addClass('.b-kontur-c__total_stycky');
    });

    $(window).scroll(function(){
        checkInViewPort($elem) ?
            $elem.addClass('.b-kontur-c__total_stycky') :
            $elem.addClass('.b-kontur-c__total_stycky');
    });


    function checkInViewPort($elem) {
        var viewportWidth = jQuery(window).width(),
            viewportHeight = jQuery(window).height(),
            documentScrollTop = jQuery(document).scrollTop(),
            documentScrollLeft = jQuery(document).scrollLeft(),

            $myElement = $elem,

            elementOffset = $myElement.offset(),
            elementHeight = $myElement.height(),
            elementWidth = $myElement.width(),

            minTop = documentScrollTop,
            maxTop = documentScrollTop + viewportHeight,
            minLeft = documentScrollLeft,
            maxLeft = documentScrollLeft + viewportWidth;


        return ((elementOffset.top > minTop && elementOffset.top + elementHeight < maxTop) && (elementOffset.left > minLeft && elementOffset.left + elementWidth < maxLeft))

    }
});



