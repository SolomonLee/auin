
        function get_auin_option_template(){
            var template = document.createElement("button");
            template.add("btn","btn_color1","btn_auin");
            return template;
        }

        var auin_using = new Map();
        function show_auin(id,cmd){
            if(auin_using.get(id) === undefined){
                auin_using.set(id,cmd);
                return true;
            }

            return false;
        }

        /* load_event return list 
            [
                ["show text","input value"]
            ]
            e.g.
            [
                ["Taiwan","TW"],
                ["Janpan","JP"]
            ]
        */
        function register_auin(selector, load_event, _after_choose, _doen) {
            var _obj = document.querySelector(selector);
            var _id = selector + "::auin_object";
            var _data_store;



            _obj.onclick = function(){
                show_auin(_id,0);
                _data_store = load_event();
            }

        }