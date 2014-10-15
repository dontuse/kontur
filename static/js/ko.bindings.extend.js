(function(ko){
    'use strict';

    var ENTER_KEY = 13;
    var ESCAPE_KEY = 27;

// A factory function we can use to create binding handlers for specific
// keycodes.
    function keyhandlerBindingFactory(keyCode) {
        return {
            init: function (element, valueAccessor, allBindingsAccessor, data, bindingContext) {
                var wrappedHandler, newValueAccessor;

                // wrap the handler with a check for the enter key
                wrappedHandler = function (data, event) {
                    if (event.keyCode === keyCode) {
                        valueAccessor().call(this, data, event);
                    }
                };

                // create a valueAccessor with the options that we would want to pass to the event binding
                newValueAccessor = function () {
                    return {
                        keyup: wrappedHandler
                    };
                };

                // call the real event binding's init function
                ko.bindingHandlers.event.init(element, newValueAccessor, allBindingsAccessor, data, bindingContext);
            }
        };
    }

// a custom binding to handle the enter key
    ko.bindingHandlers.enterKey = keyhandlerBindingFactory(ENTER_KEY);

// another custom binding, this time to handle the escape key
    ko.bindingHandlers.escapeKey = keyhandlerBindingFactory(ESCAPE_KEY);

// wrapper to hasFocus that also selects text and applies focus async
    ko.bindingHandlers.selectAndFocus = {
        init: function (element, valueAccessor, allBindingsAccessor, bindingContext) {
            ko.bindingHandlers.hasFocus.init(element, valueAccessor, allBindingsAccessor, bindingContext);
            ko.utils.registerEventHandler(element, 'focus', function () {
                element.focus();
            });
        },
        update: function (element, valueAccessor) {
            ko.utils.unwrapObservable(valueAccessor()); // for dependency
            // ensure that element is visible before trying to focus
            setTimeout(function () {
                ko.bindingHandlers.hasFocus.update(element, valueAccessor);
            }, 0);
        }
    };

    ko.bindingHandlers.currency = {
        symbol: ko.observable('$'),
        update: function(element, valueAccessor, allBindingsAccessor){
            return ko.bindingHandlers.text.update(element,function(){
                var value = +(ko.utils.unwrapObservable(valueAccessor()) || 0)

                return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            });
        }
    };


    ko.bindingHandlers.sticky = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
        console.log('init');
        console.log(element);
        console.log(viewModel);
        console.log(bindingContext);
        new Sticky($(element));
        },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.
        console.log('update');
        }
    };


})(ko);