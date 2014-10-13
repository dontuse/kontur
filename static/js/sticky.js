$(function(){
    function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top >= window.pageYOffset &&
            left >= window.pageXOffset &&
            (top + height) <= (window.pageYOffset + window.innerHeight) &&
            (left + width) <= (window.pageXOffset + window.innerWidth)
            );
    }



    $('.b-button').on('click' , function() {
        console.log(elementInViewport($('b-kontur-c__total')));


            var viewportWidth = jQuery(window).width(),
                viewportHeight = jQuery(window).height(),
                documentScrollTop = jQuery(document).scrollTop(),
                documentScrollLeft = jQuery(document).scrollLeft(),

                $myElement = jQuery('.b-kontur-c__total'),

                elementOffset = $myElement.offset(),
                elementHeight = $myElement.height(),
                elementWidth = $myElement.width(),

                minTop = documentScrollTop,
                maxTop = documentScrollTop + viewportHeight,
                minLeft = documentScrollLeft,
                maxLeft = documentScrollLeft + viewportWidth;

            if (
                (elementOffset.top > minTop && elementOffset.top + elementHeight < maxTop) &&
                (elementOffset.left > minLeft && elementOffset.left + elementWidth < maxLeft)
                ) {
                console.log('entire element is visible');
            } else {
                console.log('entire element is not visible');
            }

    });
});