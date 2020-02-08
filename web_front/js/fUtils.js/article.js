var user={
    get:function(){
        return $.get(APILIST.get )
    },
    getFouceFive:function(){
        // 因为只要5条数据，所以直接设置只获取5条
        return $.get(APILIST.article_get,{perpage: 5})
    },
    hot:function(type){
        // 因为只要5条数据，所以直接设置只获取5条
        return $.get(APILIST.hot_rank,{'type':type,perpage: 7})
    },
    news:function(){
        // 因为只要5条数据，所以直接设置只获取5条
        return $.get(APILIST.hot_rank,{perpage: 5})
    },
}