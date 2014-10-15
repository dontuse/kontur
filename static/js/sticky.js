(function() {
    "use strict";

    function Sticky($elem) {
        this.$elem = $elem;
        this.$sticky = $('.b-kontur-c__sticky', $elem);
        this.stClass = 'b-kontur-c__sticky_on';
        this.$stWrap = $('.b-kontur-c__total' , $elem);

        this.init();
    }


    Sticky.prototype.init = function () {
        this.bindng();
    };

    Sticky.prototype.bindng = function () {

        var that = this;

        this.$elem.on('click', '.b-button , .b-kontur-c__remove', function () {
            that.handler();
        });

        $(window).scroll(function () {
            that.handler();
        });
    };

    Sticky.prototype.handler = function () {
        var offset =  this.$elem.offset();
        var left =  offset.left + this.$elem.width() - this.$sticky.width() + 'px'  ;

        this.checkInViewPort(this.$stWrap) ?
            this.$sticky.addClass(this.stClass) :
            this.$sticky.removeClass(this.stClass);


        this.$sticky.css('left', left);

        $('.b-input:eq(0)', this.$elem).focus();
    };


    Sticky.prototype.checkInViewPort = function ($elem) {
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

    };

    window.Sticky = Sticky ;

})();







