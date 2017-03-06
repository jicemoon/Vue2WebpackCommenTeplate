/**
 * Created by jicemoon on 2016/12/8.
 */
new Vue({
    el: "#root",
    data: function () {
        return {
            root: this,
            labelList: [{label: "jicemoon", percent: 50}],
            currentView: "hello"   //默认
        };
    },
    methods: {
        labelSuccess: function (label, type) {
            console.log(type, label);
            console.log(this.labelList);
        },
        labelFail: function (message, type) {
            alert(message);
        },
        TabMenu: function (compName) {
            //此方法必须, HeaderMenu菜单切换时会调用此方法
            this.currentView != compName && (this.currentView = compName);
        }
    }
});