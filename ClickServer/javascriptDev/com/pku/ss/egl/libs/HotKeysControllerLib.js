define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.pku.ss.egl.libs.HotKeysControllerLib');
	else egl.eze$$userLibs = ['com.pku.ss.egl.libs.HotKeysControllerLib'];
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
				try { egl.enter("left",this,arguments);
					egl.atLine(this.eze$$fileName,11,161,117, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,12,177,10, this);
							egl.com.pku.ss.egl.et.HotKeys.left();
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
									egl.atLine(this.eze$$fileName,14,236,30, this);
									egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,10,137,149, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"right": function() {
				try { egl.enter("right",this,arguments);
					egl.atLine(this.eze$$fileName,19,317,118, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,20,333,11, this);
							egl.com.pku.ss.egl.et.HotKeys.right();
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
									egl.atLine(this.eze$$fileName,22,393,30, this);
									egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,18,292,151, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"backwardCmd": function() {
				try { egl.enter("backwardCmd",this,arguments);
					egl.atLine(this.eze$$fileName,27,480,121, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,28,496,14, this);
							egl.com.pku.ss.egl.et.HotKeys.backward();
						}finally{egl.exitBlock();}
					}
					catch ( eze$Temp3 )
					{
						if (eze$Temp3 instanceof egl.egl.debug.DebugTermination) {
							throw eze$Temp3;
						}
						{
							if (!(eze$Temp3 instanceof egl.eglx.lang.AnyException)) {
								eze$Temp3 = egl.makeExceptionFromCaughtObject(eze$Temp3);
							}
							var e = eze$Temp3;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("e", e, "eglx.lang.AnyException", "e");
									egl.atLine(this.eze$$fileName,30,559,30, this);
									egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,26,449,160, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"forwardCmd": function() {
				try { egl.enter("forwardCmd",this,arguments);
					egl.atLine(this.eze$$fileName,35,645,121, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,36,661,14, this);
							egl.com.pku.ss.egl.et.HotKeys._forward();
						}finally{egl.exitBlock();}
					}
					catch ( eze$Temp4 )
					{
						if (eze$Temp4 instanceof egl.egl.debug.DebugTermination) {
							throw eze$Temp4;
						}
						{
							if (!(eze$Temp4 instanceof egl.eglx.lang.AnyException)) {
								eze$Temp4 = egl.makeExceptionFromCaughtObject(eze$Temp4);
							}
							var e = eze$Temp4;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("e", e, "eglx.lang.AnyException", "e");
									egl.atLine(this.eze$$fileName,38,724,30, this);
									egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,34,615,159, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
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
			,
			"eze$$getName": function() {
				return "HotKeysControllerLib";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "hk", value : eze$$parent.hk, type : "com.pku.ss.egl.et.HotKeys", jsName : "hk"}
				];
			}
		}
	);
});
