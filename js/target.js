(function($) {
    $(document).on('deviceready, load', function(){
        golf.init();
    });
    console.log('testing');

    var golf = {
        init: function(){
            this.$navbar  = $('#navbar');
            this.$content = $('#content');

            //set up links
            this.$navbar.on('click', 'a', $.proxy(this.route, this));
            //init other sections
            home.init();
            play.init();
            scores.init();
            settings.init();
            
            home.show();
        },
        route: function(e){
            var a = e.target;
            this.$content.find('div.page').trigger('hide');
            this.$navbar.find('li.active').removeClass('active');
            $(a).parent('li').addClass('active');
            switch (a.hash){
                case '#home':
                    return home.show();
                case '#play': 
                    return play.show();
                case '#scores':
                    return scores.show();
                case '#settings':
                    return settings.show();
            }

        }
    }
    
    var play = {
        init: function(){
            this.$page = golf.$content.find('#play');
            this.$page.on('hide', $.proxy(this.hide, this));
        },
        show: function(){
            this.$page.show();
        }
    }
    
    var scores = {
        init: function(){
            this.$page = golf.$content.find('#scores');
            this.$page.on('hide', $.proxy(this.hide, this));
        },
        show: function(){
            this.$page.show();
        }
    }
    
    var settings = {
        init: function(){
            this.$page = golf.$content.find('#settings');
            this.$page.on('hide', $.proxy(this.hide, this));
        },
        show: function(){
            this.$page.show();
        }
    }
    
    var home = {
        highlights: [
            'table.target tr:nth-child(1)',
            'table.target tr:nth-child(2)',
            'table.target tr:nth-child(3)',
            'table.target tr td:nth-child(1)',
            'table.target tr td:nth-child(2)',
            'table.target tr td:nth-child(3)'
        ],
        highlightIndex: 0,
        animationSleep: 2000,
        
        init: function(){
            this.$page = golf.$content.find('#home');
            this.$page.on('hide', $.proxy(this.hide, this));
        },
        show: function(){
            this.$page.show();
            console.log('home show')
            setInterval($.proxy(this.animate, this), this.animationSleep)
        },
        hide: function(){
            this.$page.hide();
            clearInterval(this.highlightTimer);
        },
        animate: function(){
            var highlight = this.highlights[this.highlightIndex++];
            console.log('animation', highlight);
            this.$page.find('.success').removeClass('success');
            this.$page.find(highlight).addClass('success');
            if (this.highlightIndex == this.highlights.length){
                this.highlightIndex = 0;  //reset
            }
        }
    }
    golf.init();
}($));