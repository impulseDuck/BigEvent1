var category={
    get:function(){
        return $.get(APILIST.search)
    },
    add:function(name,slug){
        return $.post(APILIST.add,{
            name,
            slug
        })
    },
    del:function(id){
        return $.post(APILIST.del,{
            id
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