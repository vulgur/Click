define([],function(){
	egl.defineClass('com.pku.ss.egl.prog', "PlayVideo", ProgramBase, {
		"eze$$fileName" : "com/pku/ss/egl/prog/PlayVideo.egl",
			,
			"eze$$setEmpty": function() {
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
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
				egl.eglx.lang.SysLib.startCmd("video\\Rolling In The Deep.MP4");
			}
			,
			"toString": function() {
				return "[PlayVideo]";
			}
		}
	);
});
