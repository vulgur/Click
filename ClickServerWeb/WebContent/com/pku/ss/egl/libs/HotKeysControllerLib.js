define([],function(){
	egl.defineRUILibrary('com.pku.ss.egl.libs', 'HotKeysControllerLib',
	{
		'eze$$fileName': 'com/pku/ss/egl/libs/HotKeysControllerLib.egl',
		'eze$$runtimePropertiesFile': 'com.pku.ss.egl.libs.HotKeysControllerLib',
			"constructor": function() {
				if(egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst']) return egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.hk = new ();
			}
			,
			"eze$$setInitial": function() {
				if(egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst']) return egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.HotKeysControllerLib['$inst']=this;
				this.eze$$setEmpty();
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("HotKeysControllerLib", null, false);
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
			"left": function() {
				try {
					egl.com.pku.ss.egl.et.HotKeys.left();
				}
				catch ( eze$Temp1 )
				{
					{
						if (!(eze$Temp1 instanceof egl.eglx.lang.AnyException)) {
							eze$Temp1 = egl.makeExceptionFromCaughtObject(eze$Temp1);
						}
						var e = eze$Temp1;
						{
							egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
						}
					}
				}
			}
			,
			"right": function() {
				try {
					egl.com.pku.ss.egl.et.HotKeys.right();
				}
				catch ( eze$Temp2 )
				{
					{
						if (!(eze$Temp2 instanceof egl.eglx.lang.AnyException)) {
							eze$Temp2 = egl.makeExceptionFromCaughtObject(eze$Temp2);
						}
						var e = eze$Temp2;
						{
							egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
						}
					}
				}
			}
			,
			"backwardCmd": function() {
				try {
					egl.com.pku.ss.egl.et.HotKeys.backward();
				}
				catch ( eze$Temp3 )
				{
					{
						if (!(eze$Temp3 instanceof egl.eglx.lang.AnyException)) {
							eze$Temp3 = egl.makeExceptionFromCaughtObject(eze$Temp3);
						}
						var e = eze$Temp3;
						{
							egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
						}
					}
				}
			}
			,
			"forwardCmd": function() {
				try {
					egl.com.pku.ss.egl.et.HotKeys._forward();
				}
				catch ( eze$Temp4 )
				{
					{
						if (!(eze$Temp4 instanceof egl.eglx.lang.AnyException)) {
							eze$Temp4 = egl.makeExceptionFromCaughtObject(eze$Temp4);
						}
						var e = eze$Temp4;
						{
							egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
						}
					}
				}
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
				return "[HotKeysControllerLib]";
			}
		}
	);
});
