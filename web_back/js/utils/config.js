var BASEURL='http://192.168.0.113:8000';

var APILIST={
// 登录
    user_login:BASEURL+'/admin/login',
    user_logout:BASEURL+'/admin/logout',
    user_info:BASEURL+'/admin/getuser',
// 类
    search:BASEURL+'/admin/category_search',
    add:BASEURL+'/admin/category_add',
    del:BASEURL+'/admin/category_delete',
    edit:BASEURL+'/admin/category_edit',
// 文章
    article_get:BASEURL+'/admin/search',
    article_send:BASEURL+'/admin/article_publish',
    article_edit:BASEURL+'/admin/article_edit',
    article_del:BASEURL+'/admin/article_delete',
    // front
    details:BASEURL+'/article',

}