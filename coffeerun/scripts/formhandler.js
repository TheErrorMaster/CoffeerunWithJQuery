(function (window){
    'use stict';
    // var FORM_SELECTOR = '[data-coffee-order="from"]';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if(!selector) {
            throw new Error('No Selector provided');
        }

        this.$formElement = $(selector);
        if(this.$formElement.length === 0) {
            throw new Error('Could ont find element with selector: ' + selector);
        }


    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function (event){
            event.preventDefault();
            var data = {};
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };
    
    $(document).ready(function(){
        this.$formElement.on('submit',function(event){
            event.preventDefault();
          $("#myModal").modal();
        });
      });
}
    App.FormHandler = FormHandler;
    window.App = App;
})(window);