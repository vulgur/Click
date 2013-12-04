define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.pku.ss.egl.libs.PlayerLib');
	else egl.eze$$userLibs = ['com.pku.ss.egl.libs.PlayerLib'];
	egl.defineRUILibrary('com.pku.ss.egl.libs', 'PlayerLib',
	{
		'eze$$fileName': 'com/pku/ss/egl/libs/PlayerLib.egl',
		'eze$$runtimePropertiesFile': 'com.pku.ss.egl.libs.PlayerLib',
			"constructor": function() {
				if(egl.com.pku.ss.egl.libs.PlayerLib['$inst']) return egl.com.pku.ss.egl.libs.PlayerLib['$inst'];
				egl.com.pku.ss.egl.libs.PlayerLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.player = new ();
			}
			,
			"eze$$setInitial": function() {
				if(egl.com.pku.ss.egl.libs.PlayerLib['$inst']) return egl.com.pku.ss.egl.libs.PlayerLib['$inst'];
				egl.com.pku.ss.egl.libs.PlayerLib['$inst']=this;
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("PlayerLib", null, false);
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
			"PlayMusic": function() {
				try { egl.enter("PlayMusic",this,arguments);
					egl.atLine(this.eze$$fileName,11,158,19, this);
					this.player.playMusic();
					egl.atLine(this.eze$$fileName,10,129,56, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"PlayVideo": function() {
				try { egl.enter("PlayVideo",this,arguments);
					egl.atLine(this.eze$$fileName,15,220,19, this);
					this.player.playVideo();
					egl.atLine(this.eze$$fileName,14,191,56, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"getPlayer": function() {
				return player;
			}
			,
			"setPlayer": function(ezeValue) {
				this.player = ezeValue;
			}
			,
			"toString": function() {
				return "[PlayerLib]";
			}
			,
			"eze$$getName": function() {
				return "PlayerLib";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "player", value : eze$$parent.player, type : "com.pku.ss.egl.et.Player", jsName : "player"}
				];
			}
		}
	);
});
