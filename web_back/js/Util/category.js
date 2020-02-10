//文章类型

Category = {
    category_get: function () {
        return $.get(APIURL.category.category_get)
    },
    category_del: function (id) {
        return $.post(APIURL.category.category_del,{'id': id})
    },
    category_add: function (name, slug) {
        return $.post(APIURL.category.category_add,{'name': name,'slug': slug})
    }
}