define([],function(){egl.defineClass("org.eclipse.edt.rui.widgets","MenuItem","egl.jsrt","Record",{"eze$$fileName":"org/eclipse/edt/rui/widgets/Menu.egl","constructor":function(){},"ezeCopy":function(_1){this.id=_1.id;this.item=_1.item;this.itemType=_1.itemType;this.itemAction=_1.itemAction;},"eze$$setEmpty":function(){this.id=null;this.item=null;this.itemType=null;this.itemAction=null;},"eze$$setInitial":function(){this.eze$$setEmpty();},"eze$$clone":function(){var _2=this;var _3=new egl.org.eclipse.edt.rui.widgets.MenuItem();_3.id=_2.id===null?null:_2.id;_3.item=_2.item===null?null:_2.item;_3.itemType=_2.itemType===null?null:_2.itemType;_3.itemAction=_2.itemAction===null?null:_2.itemAction;return _3;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("MenuItem",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _4;this.fieldInfos=new Array();_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("id",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("id");this.fieldInfos[0]=new egl.eglx.services.FieldInfo("id","id","S;",String,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("item",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("item");this.fieldInfos[1]=new egl.eglx.services.FieldInfo("item","item","Aeglx/lang/eany;",egl.eglx.lang.EAny,_4);}return this.fieldInfos;},"toString":function(){return "[MenuItem]";}});});