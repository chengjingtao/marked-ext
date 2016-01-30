var marked=require('./marked')
var ext=require('./ext.js')
var xRender=ext.renderer;

marked.defaults.renderer=new xRenderer()
module.exports=marked;