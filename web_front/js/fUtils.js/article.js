var user={
    get:function(){
        return $.get(APILIST.get )
    },
    getFouceFive:function(){
        // 因为只要5条数据，所以直接设置只获取5条
        return $.get(APILIST.article_get,{perpage: 5})
    },
    // 在文章列表页获取数据 ，当前文章类型 和第几页
    getList:function(type,page){
        // 因为只要5条数据，所以直接设置只获取5条
        return $.get(APILIST.article_get,{'type':type,'page':page})
    },
    hot:function(type){
        // 因为只要5条数据，所以直接设置只获取7条
        return $.get(APILIST.hot_rank,{'type':type,perpage: 7})
    },
    news:function(){
        // 因为只要5条数据，所以直接设置只获取5条
        return $.get(APILIST.hot_lastest,{perpage: 5})
    },
    // 获取文章
    article:function(id){
        return $.get(APILIST.article,{'id':id})
    },
    // 发表评论
    send_common:function(name,content,article_id){
        return $.post(APILIST.send_common,{'name':name,'content':content,'article_id':article_id})
    },
    // 最新评论
    get_c:function(id) {
        return $.get(APILIST.comment_get, { 'article_id': id})
    }
}