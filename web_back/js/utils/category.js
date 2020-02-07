var category={
    get:function(){
        return $.get(APILIST.search)
    },
    add:function(name,slug){
        return $.post(APILIST.add,{
            'name':name,
            'slug':slug
        })
    },
    del:function(id){
        return $.post(APILIST.del,{
            'id':id
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