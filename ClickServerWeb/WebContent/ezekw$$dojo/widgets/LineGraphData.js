define([],function(){egl.defineClass("dojo.widgets","LineGraphData","egl.jsrt","Record",{"eze$$fileName":"dojo/widgets/DojoLineGraph.egl","constructor":function(){},"ezeCopy":function(_1){this.value=_1.value;},"eze$$setEmpty":function(){this.value=0;},"eze$$setInitial":function(){this.eze$$setEmpty();},"eze$$clone":function(){var _2=this;var _3=new egl.dojo.widgets.LineGraphData();_3.value=_2.value;return _3;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("LineGraphData",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _4;this.fieldInfos=new Array();_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("value",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("value");this.fieldInfos[0]=new egl.eglx.services.FieldInfo("value","value","F;",Number,_4);}return this.fieldInfos;},"toString":function(){return "[LineGraphData]";}});});