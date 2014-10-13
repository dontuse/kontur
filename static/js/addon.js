ko.bindingHandlers.currency = {
    symbol: ko.observable('$'),
    update: function(element, valueAccessor, allBindingsAccessor){
        return ko.bindingHandlers.text.update(element,function(){
            var value = +(ko.utils.unwrapObservable(valueAccessor()) || 0),
                symbol = ko.utils.unwrapObservable(allBindingsAccessor().symbol === undefined
                    ? allBindingsAccessor().symbol
                    : ko.bindingHandlers.currency.symbol);
            return  value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        });
    }
};