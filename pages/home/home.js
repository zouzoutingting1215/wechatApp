
var util = require('../../utils/util');
var carousel = require("../../component/carousel/carousel");
var menu = require("../../component/menu/menu");

var pageObj = {
  data: {
    
  }
}
// 合并子组件data值及方法
util.mergeComponents(pageObj, carousel, menu);
Page(pageObj);
