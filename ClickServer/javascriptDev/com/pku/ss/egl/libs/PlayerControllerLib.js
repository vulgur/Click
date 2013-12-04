define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.pku.ss.egl.libs.PlayerControllerLib');
	else egl.eze$$userLibs = ['com.pku.ss.egl.libs.PlayerControllerLib'];
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
				try { egl.enter("PlayMusic",this,arguments);
					egl.atLine(this.eze$$fileName,19,328,166, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,20,344,14, this);
							egl.com.pku.ss.egl.et.Player.playMusic();
						}finally{egl.exitBlock();}
					}
					catch ( eze$Temp1 )
					{
						if (eze$Temp1 instanceof egl.egl.debug.DebugTermination) {
							throw eze$Temp1;
						}
						{
							if (!(eze$Temp1 instanceof egl.eglx.lang.AnyException)) {
								eze$Temp1 = egl.makeExceptionFromCaughtObject(eze$Temp1);
							}
							var e = eze$Temp1;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("e", e, "eglx.lang.AnyException", "e");
									egl.atLine(this.eze$$fileName,22,407,32, this);
									egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).messageID);
									egl.atLine(this.eze$$fileName,23,452,30, this);
									egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,18,299,204, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"PlayVideo": function() {
				try { egl.enter("PlayVideo",this,arguments);
					egl.atLine(this.eze$$fileName,29,538,121, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,30,554,14, this);
							egl.com.pku.ss.egl.et.Player.playVideo();
						}finally{egl.exitBlock();}
					}
					catch ( eze$Temp2 )
					{
						if (eze$Temp2 instanceof egl.egl.debug.DebugTermination) {
							throw eze$Temp2;
						}
						{
							if (!(eze$Temp2 instanceof egl.eglx.lang.AnyException)) {
								eze$Temp2 = egl.makeExceptionFromCaughtObject(eze$Temp2);
							}
							var e = eze$Temp2;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("e", e, "eglx.lang.AnyException", "e");
									egl.atLine(this.eze$$fileName,32,617,30, this);
									egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,28,509,158, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
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
			,
			"eze$$getName": function() {
				return "PlayerControllerLib";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "p", value : eze$$parent.p, type : "com.pku.ss.egl.et.Player", jsName : "p"}
				];
			}
		}
	);
});
