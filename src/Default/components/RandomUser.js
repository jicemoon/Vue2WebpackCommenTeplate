/**
 * Created by jicemoon on 2016/12/8.
 */
var Utils = require("../Utils.js");

var option = { name: "", htmlUrl: "", data: undefined };
option.name = "random-user";
option.htmlUrl = "/Views/Default/components/RandomUser.html";
option.data = {
    data: function() {
        return {
            userList: [],
            IsLoading: false
        };
    },
    methods: {
        GetData: function() {
            var that = this;
            that.IsLoading = true;
            $.getJSON("https://api.randomuser.me/").then(function(data) {
                if (data.results && data.results.length > 0) {
                    var user = data.results[0];
                    that.userList.push({
                        id: user.id.value,
                        name: user.name.first + ' ' + user.name.last,
                        phone: user.phone,
                        picture: user.picture.thumbnail,
                        email: user.email,
                        gender: user.gender
                    });
                }
                that.IsLoading = false;
            });
        },
        deleteUser: function(idx) {
            this.userList.splice(idx, 1);
        }
    },
    created: function() {
        //加载一次
        this.GetData();
    }
};
Utils.RegistrationComponents(option);