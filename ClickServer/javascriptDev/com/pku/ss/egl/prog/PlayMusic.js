define([],function(){
	egl.defineClass('com.pku.ss.egl.prog', "PlayMusic", ProgramBase, {
		"eze$$fileName" : "com/pku/ss/egl/prog/PlayMusic.egl",
			,
			"eze$$setEmpty": function() {
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
				var ezert$$2 = new egl.com.pku.ss.egl.prog.PlayMusic();
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("PlayMusic", null, false);
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
					egl.atLine(this.eze$$fileName,9,92,42, this);
					egl.eglx.lang.SysLib.startCmd("music\\Flourishing.mp3");
					egl.atLine(this.eze$$fileName,8,68,74, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[PlayMusic]";
			}
			,
			"eze$$getName": function() {
				return "PlayMusic";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				];
			}
		}
	);
});
