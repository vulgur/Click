define([],function(){
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
				this.eze$$setEmpty();
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
				this.bc.sleep();
			}
			,
			"shutDown": function() {
				this.bc.shutDown();
			}
			,
			"lock": function() {
				this.bc.lock();
			}
			,
			"logOff": function() {
				this.bc.logOff();
			}
			,
			"hibernate": function() {
				this.bc.hibernate();
			}
			,
			"reboot": function() {
				this.bc.reboot();
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
		}
	);
});
