function KonturComponentVM(data) {
    "use strict";
    var self = this;

    self.data = {
        elements: []
    };

    self.data.elements = ko.observableArray([
        {
            val: ko.observable(12313),
            edit: ko.observable(false)
        }
    ]);

    self.total = ko.computed(function () {
        var summ = 0;
        var val = 0;
        for (var i = 0; self.data.elements().length > i; i++) {
            val = +self.data.elements()[i].val();
            val = $.isNumeric(val) ? val : 0;
            summ += val;
        }

        return summ;
    });


    self.addItem = function () {
        self.data.elements.unshift({val: ko.observable(), edit: ko.observable(true)});
    };

    self.removeItem = function (elem) {
        self.data.elements.remove(elem);
    };


    self.saveItem = function (elem ,event) {
        //console.log($(event.target));
        elem.edit(false);
        elem.val(+elem.val());
        if(!$.isNumeric(elem.val()) || isNaN(elem.val()) ) {
            elem.val(0);
        }
    };

    self.startEdit = function (elem) {
        //console.log("edit start");
        elem.edit(true);
    };


    self.data.elements.subscribe(function(){
        //console.log('do do do');
    });


}