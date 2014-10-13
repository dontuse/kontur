ko.bindingHandlers.currency = {
    symbol: ko.observable('$'),
    update: function(element, valueAccessor, allBindingsAccessor){
        return ko.bindingHandlers.text.update(element,function(){
            var value = +(ko.utils.unwrapObservable(valueAccessor()) || 0)

            return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        });
    }
};