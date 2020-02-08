//用户登录退出和用户信息管理
User = {
    login: function (username, password) {
        return $.post(APIURL.user.login,
            { 'user_name': username, 'password': password}
        )
    },

    logout: function () {
        return $.post(APIURL.user.logout)
    },

    //从后台获取数据，显示在index页面上
    getUser: function () {
        return $.get(APIURL.user.getuser)
    }
}

