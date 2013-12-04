define([],function(){
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
				this.eze$$setEmpty();
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
				this.monitor.openMonitor();
			}
			,
			"closeMonitor": function() {
				this.monitor.closeMonitor();
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
		}
	);
});
