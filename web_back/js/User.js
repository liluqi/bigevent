User = {
    login: function (username, password) {
        return $.post(APIURL.login,
            { 'user_name': username, 'password': password}
        )
    },

    logout: function () {
        return $.post(APIURL.logout)
    },

    //从后台获取数据，显示在index页面上
    getUser: function () {
        return $.get(APIURL.getuser)
    }
}