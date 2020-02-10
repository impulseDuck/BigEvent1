var BASEURL='http://192.168.0.113:8000';

var APILIST={
// 类型
    get:BASEURL+'/category',
 // 获取文章
    article_get: BASEURL + '/search',
    // 获取热门排行榜
    hot_rank: BASEURL + '/rank',
    // 最新资讯
    hot_lastest: BASEURL + '/lastest',
    // 获取文章
    article: BASEURL + '/article',
    // 发表评论
    send_common:BASEURL + '/post_comment',
     // 最新评论
     comment_get: BASEURL + '/get_comments'
   
}