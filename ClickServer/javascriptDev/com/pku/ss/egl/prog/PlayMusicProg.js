define(["com/pku/ss/egl/libs/PlayerControllerLib"],function(){
	egl.defineClass('com.pku.ss.egl.prog', "PlayMusicProg", ProgramBase, {
		"eze$$fileName" : "com/pku/ss/egl/prog/PlayMusicProg.egl",
			,
			"eze$$setEmpty": function() {
				new egl.com.pku.ss.egl.libs.PlayerControllerLib();
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
				var ezert$$2 = new egl.com.pku.ss.egl.prog.PlayMusicProg();
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("PlayMusicProg", null, false);
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
					egl.atLine(this.eze$$fileName,9,143,32, this);
					egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst'].PlayMusic();
					egl.atLine(this.eze$$fileName,8,119,64, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[PlayMusicProg]";
			}
			,
			"eze$$getName": function() {
				return "PlayMusicProg";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "PlayerControllerLib", value : egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst'], type : "com.pku.ss.egl.libs.PlayerControllerLib", jsName : "egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst']"}
				];
			}
		}
	);
});
