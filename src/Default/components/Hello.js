/**
 * Created by jicemoon on 2016/12/8.
 */

var Utils = require("../Utils.js");

var option = { name: "", htmlUrl: "", data: undefined };
option.name = "hello";
option.htmlUrl = "/Views/Default/components/Hello.html";
option.data = {
    data: function() {
        return {
            msg: 'Welcome to Your Vue.js App, Created by Vue-CLI'
        }
    }
};
Utils.RegistrationComponents(option);