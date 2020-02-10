var user = {
    login: function (user_name, password) {
        return $.post(APILIST.user_login, {
                user_name,
                password
            })
    },
    logout:function(){
       return $.post(APILIST.user_logout)
    },
    getInfo:function(){
       return $.get(APILIST.user_info)
    }
}