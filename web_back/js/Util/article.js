var Article = {
    get: function (page,type,status) {
        return $.get(APIURL.article.article_get,{'page': page,'type':type, 'state': status})
    }
}