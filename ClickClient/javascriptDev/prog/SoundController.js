define([],function(){
	egl.defineClass('prog', "SoundController", ProgramBase, {
		"eze$$fileName" : "prog/SoundController.egl",
			,
			"eze$$setEmpty": function() {
				this.constantName = "";
				egl.atLine(this.eze$$fileName,11,160,15, this);
				this.constantName = "literalString";
				this.variableName = "";
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.prog.SoundController();
				ezert$$2.constantName = ezert$$1.constantName === null ? null : ezert$$1.constantName;
				ezert$$2.variableName = ezert$$1.variableName === null ? null : ezert$$1.variableName;
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("SoundController", null, false);
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
			"main": function() {
				try { egl.enter("main",this,arguments);
					egl.atLine(this.eze$$fileName,16,230,20, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[SoundController]";
			}
			,
			"eze$$getName": function() {
				return "SoundController";
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
