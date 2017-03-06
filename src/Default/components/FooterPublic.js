/**
 * Created by jicemoon on 2016/12/8.
 */

var Utils = require("../Utils.js");

var option = { name: "", htmlUrl: "", data: undefined };
option.name = "footer-public";
option.htmlUrl = "/Views/Default/components/FooterPublic.html";
option.data = {
    data: function() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
};
Utils.RegistrationComponents(option);