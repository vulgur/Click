define([],function(){
	egl.defineRUILibrary('com.pku.ss.egl.libs', 'PlayerControllerLib',
	{
		'eze$$fileName': 'com/pku/ss/egl/libs/PlayerControllerLib.egl',
		'eze$$runtimePropertiesFile': 'com.pku.ss.egl.libs.PlayerControllerLib',
			"constructor": function() {
				if(egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst']) return egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.p = new ();
			}
			,
			"eze$$setInitial": function() {
				if(egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst']) return egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst'];
				egl.com.pku.ss.egl.libs.PlayerControllerLib['$inst']=this;
				this.eze$$setEmpty();
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("PlayerControllerLib", null, false);
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
				try {
					egl.com.pku.ss.egl.et.Player.playMusic();
				}
				catch ( eze$Temp1 )
				{
					{
						if (!(eze$Temp1 instanceof egl.eglx.lang.AnyException)) {
							eze$Temp1 = egl.makeExceptionFromCaughtObject(eze$Temp1);
						}
						var e = eze$Temp1;
						{
							egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).messageID);
							egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
						}
					}
				}
			}
			,
			"PlayVideo": function() {
				try {
					egl.com.pku.ss.egl.et.Player.playVideo();
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
			"getP": function() {
				return p;
			}
			,
			"setP": function(ezeValue) {
				this.p = ezeValue;
			}
			,
			"toString": function() {
				return "[PlayerControllerLib]";
			}
		}
	);
});
