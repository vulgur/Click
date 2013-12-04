define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.pku.ss.egl.libs.Controller');
	else egl.eze$$userLibs = ['com.pku.ss.egl.libs.Controller'];
	egl.defineRUILibrary('com.pku.ss.egl.libs', 'Controller',
	{
		'eze$$fileName': 'com/pku/ss/egl/libs/Controller.egl',
		'eze$$runtimePropertiesFile': 'com.pku.ss.egl.libs.Controller',
			"constructor": function() {
				if(egl.com.pku.ss.egl.libs.Controller['$inst']) return egl.com.pku.ss.egl.libs.Controller['$inst'];
				egl.com.pku.ss.egl.libs.Controller['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.constantName = "";
				egl.atLine(this.eze$$fileName,10,173,15, this);
				this.constantName = "literalString";
				this.variableName = "";
			}
			,
			"eze$$setInitial": function() {
				if(egl.com.pku.ss.egl.libs.Controller['$inst']) return egl.com.pku.ss.egl.libs.Controller['$inst'];
				egl.com.pku.ss.egl.libs.Controller['$inst']=this;
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Controller", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("variableName", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("variableName");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("variableName", "variableName", "S;", String, annotations);
				}
				return this.fieldInfos;
			}
			,
			"functionName": function() {
				try { egl.enter("functionName",this,arguments);
					egl.atLine(this.eze$$fileName,16,269,28, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"getConstantName": function() {
				return constantName;
			}
			,
			"getVariableName": function() {
				return variableName;
			}
			,
			"setVariableName": function(ezeValue) {
				this.variableName = ezeValue;
			}
			,
			"toString": function() {
				return "[Controller]";
			}
			,
			"eze$$getName": function() {
				return "Controller";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "constantName", value : eze$$parent.constantName, type : "eglx.lang.EString", jsName : "constantName"},
				{name: "variableName", value : eze$$parent.variableName, type : "eglx.lang.EString", jsName : "variableName"}
				];
			}
		}
	);
});
