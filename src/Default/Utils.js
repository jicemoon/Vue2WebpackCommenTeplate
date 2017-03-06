/**
 * Created by jicemoon on 2016/12/8.
 */
if (!Utils) {
    var Utils = {};
}
Utils.RootFolder = "";
/***
 * @options: {name:"", htmlUrl: "", data: ""}
 * **/
Utils.RegistrationComponents = function(options) {
    if (!options || !options.name) throw new Error("组件注册错误");
    Vue.component(options.name, function(resolve, reject) {
        if (options.htmlUrl) {
            if (!options.data) { options.data = {}; }
            $.get(Utils.RootFolder + options.htmlUrl).done(function(template) {
                options.data.template = template;
                resolve && resolve(options.data);
            });
        } else {
            resolve && resolve(options.data);
        }
    });
}
module.exports = Utils;