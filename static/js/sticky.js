$(function () {

    var $elem = $('.b-kontur-c__total');
    var $sticky = $('.b-kontur-c__sticky');
    var stClass = 'b-kontur-c__sticky_on';

    $(document).on('click', '.b-button , .b-kontur-c__remove' , function () {
        handler();
    });

    $(window).scroll(function () {
        handler();
    });




    function handler() {
        checkInViewPort($elem) ?
            $sticky.addClass(stClass) :
            $sticky.removeClass(stClass);

        $('.b-input:eq(0)').focus();
    }


    function checkInViewPort($elem) {

        var viewportWidth = $(window).width(),
            viewportHeight = $(window).height(),
            documentScrollTop = $(document).scrollTop(),
            documentScrollLeft = $(document).scrollLeft(),
            $myElement = $elem,
            elementOffset = $myElement.offset(),
            elementHeight = $myElement.height(),
            elementWidth = $myElement.width(),
            minTop = documentScrollTop,
            maxTop = documentScrollTop + viewportHeight,
            minLeft = documentScrollLeft,
            maxLeft = documentScrollLeft + viewportWidth;


        return (!(elementOffset.top > minTop && elementOffset.top + elementHeight < maxTop) && (elementOffset.left > minLeft && elementOffset.left + elementWidth < maxLeft))

    }
});



