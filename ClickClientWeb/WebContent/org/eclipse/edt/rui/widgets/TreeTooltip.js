define(["org/eclipse/edt/rui/widgets/Box","org/eclipse/edt/rui/widgets/Tooltip","org/eclipse/edt/rui/widgets/TreeNode"],function(){egl.defineClass("org.eclipse.edt.rui.widgets","TreeTooltip",{"eze$$fileName":"org/eclipse/edt/rui/widgets/TreeTooltip.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.widgets.TreeTooltip","constructor":function(){},"eze$$setEmpty":function(){this.provider=null;this.tooltip=new egl.org.eclipse.edt.rui.widgets.Tooltip();},"eze$$setInitial":function(){this.eze$$setEmpty();egl.checkNull(this.tooltip).provider=new egl.egl.jsrt.Delegate(this,egl.org.eclipse.edt.rui.widgets.TreeTooltip.prototype.getTooltipContents);},"eze$$clone":function(){var _1=this;var _2=new egl.org.eclipse.edt.rui.widgets.TreeTooltip();_2.provider=_1.provider===null?null:_1.provider;_2.tooltip=_1.tooltip===null?null:_1.tooltip.eze$$clone();return _2;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("TreeTooltip",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _3;this.fieldInfos=new Array();}return this.fieldInfos;},"setTooltips":function(_4){this.tooltip.enable(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[_4,"org.eclipse.edt.rui.widgets.TreeNode"]));},"getTooltipContents":function(_5){var _6;_6=egl.eglx.lang.EAny.ezeCast(_5,egl.org.eclipse.edt.rui.widgets.TreeNode);var _7;_7=this.provider(_6);return _7;},"toString":function(){return "[TreeTooltip]";}});});