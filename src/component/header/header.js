/**
 * Created by zhouyongjia on 2016/8/19.
 */

require('./header.scss');

var headerTpl = require('./header.hbs');
var data = {words: "it is handlebars"};
var html = headerTpl(data);

module.exports = html;