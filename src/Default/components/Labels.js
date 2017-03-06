var Utils = require("../Utils.js");

var option = { name: "", htmlUrl: "", data: undefined };
option.name = "labels";
option.htmlUrl = "/Views/Default/components/Labels.html";
option.data = {
    props: {
        "label-list": {
            type: Array,
            default: function() {
                return [];
            }
        },
        "max-width": {
            type: Number,
            default: 160
        },
        "can-repeat": {
            type: Boolean,
            default: true
        }
    },
    data: function() {
        var rtn = {
            label: "",
            percent: 0
        };
        return rtn;
    },
    methods: {
        add: function() {
            //添加
            var that = this;
            var alertStr = "";
            if (/^\s*$/.test(that.label)) {
                that.$el.querySelector(".add-item input[type='text']").focus();
                alertStr = "标签不能为空";
            }
            if (that.percent - 0 < 0) {
                that.$el.querySelector(".add-item input[type='number']").focus();
                alertStr = "比例不能小于0";
            }
            if (that.percent - 0 > 100) {
                that.$el.querySelector(".add-item input[type='number']").focus();
                alertStr = "比例不能大于于100";
            }
            if (!that.canRepeat) {
                //重复检查
                var has = that.labelList.some(function(item) {
                    return item.label == that.label;
                });
                if (has) {
                    that.$el.querySelector(".add-item input[type='text']").focus();
                    alertStr = "已有此标签的项, 请重新输入标签";
                }
            }
            if (alertStr != "") {
                this.$emit("fail", alertStr, "add");
                return;
            }
            var label = {
                label: this.label,
                percent: this.percent
            };
            this.labelList.push(label);
            this.$emit("success", label, "add");
        },
        deleteItem: function(idx) {
            //删除
            var label = this.labelList.splice(idx, 1);
            this.$emit("success", label, "delete");
        },
        nextForcus: function(evt) {
            //设置当前输入框的下一个输入框获得焦点
            var tar = evt.target.nextSibling;
            while (tar && tar.nodeName.toLowerCase() != "input") {
                tar = tar.nextSibling;
            }
            tar.focus();
        }
    }
};
Utils.RegistrationComponents(option);