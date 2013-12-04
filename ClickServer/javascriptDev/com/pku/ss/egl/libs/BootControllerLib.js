define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.pku.ss.egl.libs.BootControllerLib');
	else egl.eze$$userLibs = ['com.pku.ss.egl.libs.BootControllerLib'];
	egl.defineRUILibrary('com.pku.ss.egl.libs', 'BootControllerLib',
	{
		'eze$$fileName': 'com/pku/ss/egl/libs/BootControllerLib.egl',
		'eze$$runtimePropertiesFile': 'com.pku.ss.egl.libs.BootControllerLib',
			"constructor": function() {
				if(egl.com.pku.ss.egl.libs.BootControllerLib['$inst']) return egl.com.pku.ss.egl.libs.BootControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.BootControllerLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.bc = new ();
			}
			,
			"eze$$setInitial": function() {
				if(egl.com.pku.ss.egl.libs.BootControllerLib['$inst']) return egl.com.pku.ss.egl.libs.BootControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.BootControllerLib['$inst']=this;
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("BootControllerLib", null, false);
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
			"sleep": function() {
				try { egl.enter("sleep",this,arguments);
					egl.atLine(this.eze$$fileName,11,164,11, this);
					this.bc.sleep();
					egl.atLine(this.eze$$fileName,10,139,44, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"shutDown": function() {
				try { egl.enter("shutDown",this,arguments);
					egl.atLine(this.eze$$fileName,15,217,14, this);
					this.bc.shutDown();
					egl.atLine(this.eze$$fileName,14,189,50, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"lock": function() {
				try { egl.enter("lock",this,arguments);
					egl.atLine(this.eze$$fileName,19,269,10, this);
					this.bc.lock();
					egl.atLine(this.eze$$fileName,18,245,42, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"logOff": function() {
				try { egl.enter("logOff",this,arguments);
					egl.atLine(this.eze$$fileName,23,319,12, this);
					this.bc.logOff();
					egl.atLine(this.eze$$fileName,22,293,46, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"hibernate": function() {
				try { egl.enter("hibernate",this,arguments);
					egl.atLine(this.eze$$fileName,27,374,15, this);
					this.bc.hibernate();
					egl.atLine(this.eze$$fileName,26,345,52, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"reboot": function() {
				try { egl.enter("reboot",this,arguments);
					egl.atLine(this.eze$$fileName,31,430,12, this);
					this.bc.reboot();
					egl.atLine(this.eze$$fileName,30,407,43, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"getBc": function() {
				return bc;
			}
			,
			"setBc": function(ezeValue) {
				this.bc = ezeValue;
			}
			,
			"toString": function() {
				return "[BootControllerLib]";
			}
			,
			"eze$$getName": function() {
				return "BootControllerLib";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "bc", value : eze$$parent.bc, type : "com.pku.ss.egl.et.BootComputer", jsName : "bc"}
				];
			}
		}
	);
});
