define([],function(){
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
				this.eze$$setEmpty();
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
				this.player.playMusic();
			}
			,
			"PlayVideo": function() {
				this.player.playVideo();
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
		}
	);
});
