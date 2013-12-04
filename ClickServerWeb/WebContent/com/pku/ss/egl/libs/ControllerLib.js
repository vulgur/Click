define([],function(){
	egl.defineRUILibrary('com.pku.ss.egl.libs', 'ControllerLib',
	{
		'eze$$fileName': 'com/pku/ss/egl/libs/ControllerLib.egl',
		'eze$$runtimePropertiesFile': 'com.pku.ss.egl.libs.ControllerLib',
			"constructor": function() {
				if(egl.com.pku.ss.egl.libs.ControllerLib['$inst']) return egl.com.pku.ss.egl.libs.ControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.ControllerLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.sc = new ();
				this.hk = new ();
			}
			,
			"eze$$setInitial": function() {
				if(egl.com.pku.ss.egl.libs.ControllerLib['$inst']) return egl.com.pku.ss.egl.libs.ControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.ControllerLib['$inst']=this;
				this.eze$$setEmpty();
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("ControllerLib", null, false);
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
			"left": function() {
				this.hk.left();
			}
			,
			"right": function() {
				this.hk.right();
			}
			,
			"backwardCmd": function() {
				this.hk.backwardCmd();
			}
			,
			"forwardCmd": function() {
				this.hk.forwardCmd();
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
			"getHk": function() {
				return hk;
			}
			,
			"setHk": function(ezeValue) {
				this.hk = ezeValue;
			}
			,
			"toString": function() {
				return "[ControllerLib]";
			}
		}
	);
});
