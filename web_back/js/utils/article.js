var article={
    get:function(curPage,curType,curStatus){
        return $.get(APILIST.article_get,
            {'page': curPage,'type': curType,'state': curStatus}
           
            )
    },
    getByID:function(id){
        return $.get(APILIST.article_get,{
            'id': id
        })
    },
    del:function(id){
        return $.get(APILIST.article_del,{
            'id':id
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
            'id':id,
            'name':name,
            'slug':slug
        })
    }

}