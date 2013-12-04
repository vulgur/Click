define(["com/pku/ss/egl/libs/SoundControllerLib"],function(){
	egl.defineClass('com.pku.ss.egl.prog', "TestSound", ProgramBase, {
		"eze$$fileName" : "com/pku/ss/egl/prog/TestSound.egl",
			,
			"eze$$setEmpty": function() {
				new egl.com.pku.ss.egl.libs.SoundControllerLib();
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
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
				egl.com.pku.ss.egl.libs.SoundControllerLib['$inst'].setVolume(100);
			}
			,
			"toString": function() {
				return "[TestSound]";
			}
		}
	);
});
