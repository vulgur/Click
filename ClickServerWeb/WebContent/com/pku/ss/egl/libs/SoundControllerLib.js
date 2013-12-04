define([],function(){
	egl.defineRUILibrary('com.pku.ss.egl.libs', 'SoundControllerLib',
	{
		'eze$$fileName': 'com/pku/ss/egl/libs/SoundControllerLib.egl',
		'eze$$runtimePropertiesFile': 'com.pku.ss.egl.libs.SoundControllerLib',
			"constructor": function() {
				if(egl.com.pku.ss.egl.libs.SoundControllerLib['$inst']) return egl.com.pku.ss.egl.libs.SoundControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.SoundControllerLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.sc = new ();
			}
			,
			"eze$$setInitial": function() {
				if(egl.com.pku.ss.egl.libs.SoundControllerLib['$inst']) return egl.com.pku.ss.egl.libs.SoundControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.SoundControllerLib['$inst']=this;
				this.eze$$setEmpty();
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("SoundControllerLib", null, false);
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
			"setVolume": function(value) {
				var eze$Temp1;
				eze$Temp1 = egl.eglx.lang.convert(egl.eglx.lang.EInt64.fromEInt32, [value]);
				this.sc.setVolumeValue(eze$Temp1);
			}
			,
			"getSc": function() {
				return sc;
			}
			,
			"setSc": function(ezeValue) {
				this.sc = ezeValue;
			}
			,
			"toString": function() {
				return "[SoundControllerLib]";
			}
		}
	);
});
