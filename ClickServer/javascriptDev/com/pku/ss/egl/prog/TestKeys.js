define(["com/pku/ss/egl/libs/HotKeysControllerLib"],function(){
	egl.defineClass('com.pku.ss.egl.prog', "TestKeys", ProgramBase, {
		"eze$$fileName" : "com/pku/ss/egl/prog/TestKeys.egl",
			,
			"eze$$setEmpty": function() {
				new egl.com.pku.ss.egl.libs.HotKeysControllerLib();
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
				var ezert$$2 = new egl.com.pku.ss.egl.prog.TestKeys();
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("TestKeys", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
				}
				return this.fieldInfos;
			}
			,
			"main": function() {
				try { egl.enter("main",this,arguments);
					egl.atLine(this.eze$$fileName,9,112,28, this);
					egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst'].left();
					egl.atLine(this.eze$$fileName,10,143,35, this);
					egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst'].backwardCmd();
					egl.atLine(this.eze$$fileName,8,94,89, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[TestKeys]";
			}
			,
			"eze$$getName": function() {
				return "TestKeys";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "HotKeysControllerLib", value : egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst'], type : "com.pku.ss.egl.libs.HotKeysControllerLib", jsName : "egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst']"}
				];
			}
		}
	);
});
