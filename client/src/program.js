(function () {

    var pinView = Backbone.View.extend({
        el:'#pinViewAttachmentPoint',

        render:function () {
            this.$el.html('Hola mundo cruel');
        }
    });

    var pinModel = Backbone.Model.extend({
        initialize:function (attributes) {
            if (attributes.id)
                this.url = 'http://localhost:8080/pin/' + attributes.id;
            else
                this.url = 'http://localhost:8080/pin';
        }

    });

    var pinCollection = Backbone.Collection.extend({
        url:'http://localhost:8080/pin',

        model:pinModel
    });

    window.pinView = new pinView();
    window.pinModel = new pinModel({id:4});
    window.pinCollection = new pinCollection();

    window.tutu = new pinModel({
        name:'Tutu',
        latitude:12.345345345,
        longitude:23.12312316456
    });
})();