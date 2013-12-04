define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.pku.ss.egl.libs.MonitorControllerLib');
	else egl.eze$$userLibs = ['com.pku.ss.egl.libs.MonitorControllerLib'];
	egl.defineRUILibrary('com.pku.ss.egl.libs', 'MonitorControllerLib',
	{
		'eze$$fileName': 'com/pku/ss/egl/libs/MonitorControllerLib.egl',
		'eze$$runtimePropertiesFile': 'com.pku.ss.egl.libs.MonitorControllerLib',
			"constructor": function() {
				if(egl.com.pku.ss.egl.libs.MonitorControllerLib['$inst']) return egl.com.pku.ss.egl.libs.MonitorControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.MonitorControllerLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.monitor = new ();
			}
			,
			"eze$$setInitial": function() {
				if(egl.com.pku.ss.egl.libs.MonitorControllerLib['$inst']) return egl.com.pku.ss.egl.libs.MonitorControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.MonitorControllerLib['$inst']=this;
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("MonitorControllerLib", null, false);
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
			"openMonitor": function() {
				try { egl.enter("openMonitor",this,arguments);
					egl.atLine(this.eze$$fileName,9,172,22, this);
					this.monitor.openMonitor();
					egl.atLine(this.eze$$fileName,8,141,61, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"closeMonitor": function() {
				try { egl.enter("closeMonitor",this,arguments);
					egl.atLine(this.eze$$fileName,13,232,23, this);
					this.monitor.closeMonitor();
					egl.atLine(this.eze$$fileName,12,206,54, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"getMonitor": function() {
				return monitor;
			}
			,
			"setMonitor": function(ezeValue) {
				this.monitor = ezeValue;
			}
			,
			"toString": function() {
				return "[MonitorControllerLib]";
			}
			,
			"eze$$getName": function() {
				return "MonitorControllerLib";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "monitor", value : eze$$parent.monitor, type : "com.pku.ss.egl.et.Monitor", jsName : "monitor"}
				];
			}
		}
	);
});
