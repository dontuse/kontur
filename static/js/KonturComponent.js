function KonturComponent(data) {

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

            summ += +self.data.elements()[i].val();
        }

        return summ;
    });


    self.addItem = function () {
        console.log(this);
        this.data.elements.unshift({val: ko.observable(), edit: ko.observable(true)});
    };

    self.removeItem = function (elem) {
        var that = this;
        self.data.elements.remove(elem);
    };


    self.saveItem = function (elem) {
        elem.edit(false);
        elem.val(+elem.val());
        console.log(elem.val().constructor.name);
        if(!(elem.val().constructor.name === 'Number') || isNaN(elem.val()) ) {
            elem.val(0);
        }
    };

    self.startEdit = function (elem) {
        console.log("edit start");
        elem.edit(true);
    };




}