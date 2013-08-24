(function($) {
    $(document).on('deviceready', function(){
        golf.init();
    });

    var golf = {
        init: function(){
            this.$navbar  = $('#navbar');
            this.$content = $('#content');

            //set up links
            this.$navbar.on('click', 'a', $.proxy(this.route, this));
        },
        route: function(e){
            var a = e.target;
            switch (a.hash){
                case '#play': {

                }
            }

        }
    }
}($));