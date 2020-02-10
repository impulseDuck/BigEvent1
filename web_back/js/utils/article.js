var article={
    get:function(page,type,state){
        return $.get(APILIST.article_get,
            {page,type,state}
           
            )
    },
    getByID:function(id){
        return $.get(APILIST.article_get,{
            id
        })
    },
    del:function(id){
        return $.get(APILIST.article_del,{
            id
        })
    },
    send:function(fd){
        return $.ajax({
            url:APILIST.article_send,
            type: 'post',
            data: fd,
            processData:false, //不允许处理数据
            contentType:false, //不要设置请求头
        })
    },
    edit:function(id,name,slug){
        return $.post(APILIST.edit,{
            id,
            name,
           slug
        })
    }

}