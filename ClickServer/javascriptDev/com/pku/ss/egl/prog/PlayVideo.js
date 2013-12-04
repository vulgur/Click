define([],function(){
	egl.defineClass('com.pku.ss.egl.prog', "PlayVideo", ProgramBase, {
		"eze$$fileName" : "com/pku/ss/egl/prog/PlayVideo.egl",
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
				var ezert$$2 = new egl.com.pku.ss.egl.prog.PlayVideo();
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("PlayVideo", null, false);
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
					egl.atLine(this.eze$$fileName,9,92,50, this);
					egl.eglx.lang.SysLib.startCmd("video\\Rolling In The Deep.MP4");
					egl.atLine(this.eze$$fileName,8,68,82, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[PlayVideo]";
			}
			,
			"eze$$getName": function() {
				return "PlayVideo";
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
