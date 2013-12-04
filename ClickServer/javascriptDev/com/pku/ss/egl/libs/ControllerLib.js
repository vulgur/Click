define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.pku.ss.egl.libs.ControllerLib');
	else egl.eze$$userLibs = ['com.pku.ss.egl.libs.ControllerLib'];
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
				try { egl.enter("setVolume",this,arguments);
					egl.addLocalFunctionVariable("value", value, "eglx.lang.EInt", "value");
					var eze$Temp1;
					egl.atLine(this.eze$$fileName,8,163,24, this);
					eze$Temp1 = egl.eglx.lang.convert(egl.eglx.lang.EInt64.fromEInt32, [value]);
					egl.atLine(this.eze$$fileName,8,163,25, this);
					this.sc.setVolumeValue(eze$Temp1);
					egl.atLine(this.eze$$fileName,7,128,67, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"left": function() {
				try { egl.enter("left",this,arguments);
					egl.atLine(this.eze$$fileName,13,240,10, this);
					this.hk.left();
					egl.atLine(this.eze$$fileName,12,222,33, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"right": function() {
				try { egl.enter("right",this,arguments);
					egl.atLine(this.eze$$fileName,16,276,11, this);
					this.hk.right();
					egl.atLine(this.eze$$fileName,15,257,35, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"backwardCmd": function() {
				try { egl.enter("backwardCmd",this,arguments);
					egl.atLine(this.eze$$fileName,19,319,17, this);
					this.hk.backwardCmd();
					egl.atLine(this.eze$$fileName,18,294,47, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"forwardCmd": function() {
				try { egl.enter("forwardCmd",this,arguments);
					egl.atLine(this.eze$$fileName,22,367,16, this);
					this.hk.forwardCmd();
					egl.atLine(this.eze$$fileName,21,343,45, this);
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
			,
			"eze$$getName": function() {
				return "ControllerLib";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "sc", value : eze$$parent.sc, type : "com.pku.ss.egl.et.SoundControl", jsName : "sc"},
				{name: "hk", value : eze$$parent.hk, type : "com.pku.ss.egl.et.HotKeys", jsName : "hk"}
				];
			}
		}
	);
});
