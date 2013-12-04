define(["com/pku/ss/egl/libs/SoundControllerLib"],function(){
	egl.defineClass('com.pku.ss.egl.prog', "TestSound", ProgramBase, {
		"eze$$fileName" : "com/pku/ss/egl/prog/TestSound.egl",
			,
			"eze$$setEmpty": function() {
				new egl.com.pku.ss.egl.libs.SoundControllerLib();
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
				var ezert$$2 = new egl.com.pku.ss.egl.prog.TestSound();
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("TestSound", null, false);
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
					egl.atLine(this.eze$$fileName,8,112,34, this);
					egl.com.pku.ss.egl.libs.SoundControllerLib['$inst'].setVolume(100);
					egl.atLine(this.eze$$fileName,7,94,57, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[TestSound]";
			}
			,
			"eze$$getName": function() {
				return "TestSound";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "SoundControllerLib", value : egl.com.pku.ss.egl.libs.SoundControllerLib['$inst'], type : "com.pku.ss.egl.libs.SoundControllerLib", jsName : "egl.com.pku.ss.egl.libs.SoundControllerLib['$inst']"}
				];
			}
		}
	);
});
