define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.pku.ss.egl.libs.SoundControllerLib');
	else egl.eze$$userLibs = ['com.pku.ss.egl.libs.SoundControllerLib'];
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
				try { egl.enter("setVolume",this,arguments);
					egl.addLocalFunctionVariable("value", value, "eglx.lang.EInt", "value");
					var eze$Temp1;
					egl.atLine(this.eze$$fileName,10,180,24, this);
					eze$Temp1 = egl.eglx.lang.convert(egl.eglx.lang.EInt64.fromEInt32, [value]);
					egl.atLine(this.eze$$fileName,10,180,25, this);
					this.sc.setVolumeValue(eze$Temp1);
					egl.atLine(this.eze$$fileName,9,139,74, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
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
			,
			"eze$$getName": function() {
				return "SoundControllerLib";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "sc", value : eze$$parent.sc, type : "com.pku.ss.egl.et.SoundControl", jsName : "sc"}
				];
			}
		}
	);
});
