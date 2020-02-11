var BASEURL = 'http://192.168.1.6:8000/';
var APIURL = {
    user: {
        getuser: BASEURL + 'admin/getuser',
        logout: BASEURL + 'admin/logout',
        login: BASEURL + 'admin/login'
    },

    category: {
        // 获取文章分类
        category_get:  BASEURL + 'admin/category_search',
        // 添加文章分类
        category_add:  BASEURL + 'admin/category_add',
        // 删除文章分类
        category_del:  BASEURL + 'admin/category_delete',
        // 编辑文章分类
        category_edit:  BASEURL + 'admin/category_edit',
    },
    article: {
        //查询所有文章
        article_get: BASEURL + 'admin/search',
    }
}