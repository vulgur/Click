define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('libs.CommandLib');
	else egl.eze$$userLibs = ['libs.CommandLib'];
	egl.defineRUILibrary('libs', 'CommandLib',
	{
		'eze$$fileName': 'libs/CommandLib.egl',
		'eze$$runtimePropertiesFile': 'libs.CommandLib',
			"constructor": function() {
				if(egl.libs.CommandLib['$inst']) return egl.libs.CommandLib['$inst'];
				egl.libs.CommandLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
			}
			,
			"eze$$setInitial": function() {
				if(egl.libs.CommandLib['$inst']) return egl.libs.CommandLib['$inst'];
				egl.libs.CommandLib['$inst']=this;
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("CommandLib", null, false);
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
			"eze_playMusic_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "playMusic",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"playMusic": function() {
				try { egl.enter("playMusic",this,arguments);
					egl.atLine(this.eze$$fileName,7,57,72, this);
					eze_playMusic_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,7,57,72, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_playVideo_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "playVideo",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"playVideo": function() {
				try { egl.enter("playVideo",this,arguments);
					egl.atLine(this.eze$$fileName,10,135,72, this);
					eze_playVideo_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,10,135,72, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_switchDisplay_Proxy": function(value, ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "switchDisplay",
						[egl.eglx.lang.EAny.unbox(value)],
						["egl.eglx.lang.EBoolean"],
						["value"],
						[egl.eglx.lang.EBoolean],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"switchDisplay": function(value) {
				try { egl.enter("switchDisplay",this,arguments);
					egl.addLocalFunctionVariable("value", value, "eglx.lang.EBoolean", "value");
					var eze$Temp1;
					egl.atLine(this.eze$$fileName,13,213,89, this);
					eze$Temp1 = egl.eglx.lang.EAny.ezeWrap(egl.eglx.lang.EAny.unbox(value));
					egl.atLine(this.eze$$fileName,13,213,89, this);
					eze_switchDisplay_Proxy(eze$Temp1, null, null, null);
					egl.atLine(this.eze$$fileName,13,213,89, this);
					value.ezeCopy(eze$Temp1.ezeUnbox());
					egl.setLocalFunctionVariable("value", value, "eglx.lang.EBoolean");
					egl.atLine(this.eze$$fileName,13,213,89, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_changeVolume_Proxy": function(value, ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "changeVolume",
						[egl.eglx.lang.EAny.unbox(value)],
						["egl.eglx.lang.EInt32"],
						["value"],
						[egl.eglx.lang.EInt32],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"changeVolume": function(value) {
				try { egl.enter("changeVolume",this,arguments);
					egl.addLocalFunctionVariable("value", value, "eglx.lang.EInt", "value");
					var eze$Temp2;
					egl.atLine(this.eze$$fileName,16,308,84, this);
					eze$Temp2 = egl.eglx.lang.EAny.ezeWrap(egl.eglx.lang.EAny.unbox(value));
					egl.atLine(this.eze$$fileName,16,308,84, this);
					eze_changeVolume_Proxy(eze$Temp2, null, null, null);
					egl.atLine(this.eze$$fileName,16,308,84, this);
					value.ezeCopy(eze$Temp2.ezeUnbox());
					egl.setLocalFunctionVariable("value", value, "eglx.lang.EInt");
					egl.atLine(this.eze$$fileName,16,308,84, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_logOff_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "logOff",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"logOff": function() {
				try { egl.enter("logOff",this,arguments);
					egl.atLine(this.eze$$fileName,19,398,69, this);
					eze_logOff_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,19,398,69, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_shutDown_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "shutDown",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"shutDown": function() {
				try { egl.enter("shutDown",this,arguments);
					egl.atLine(this.eze$$fileName,22,473,71, this);
					eze_shutDown_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,22,473,71, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_sleep_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "sleep",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"sleep": function() {
				try { egl.enter("sleep",this,arguments);
					egl.atLine(this.eze$$fileName,25,550,68, this);
					eze_sleep_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,25,550,68, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_hibernate_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "hibernate",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"hibernate": function() {
				try { egl.enter("hibernate",this,arguments);
					egl.atLine(this.eze$$fileName,28,624,72, this);
					eze_hibernate_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,28,624,72, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_forwardCmd_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "forwardCmd",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"forwardCmd": function() {
				try { egl.enter("forwardCmd",this,arguments);
					egl.atLine(this.eze$$fileName,31,702,73, this);
					eze_forwardCmd_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,31,702,73, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_backwardCmd_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "backwardCmd",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"backwardCmd": function() {
				try { egl.enter("backwardCmd",this,arguments);
					egl.atLine(this.eze$$fileName,34,781,74, this);
					eze_backwardCmd_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,34,781,74, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_reboot_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "reboot",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"reboot": function() {
				try { egl.enter("reboot",this,arguments);
					egl.atLine(this.eze$$fileName,37,861,69, this);
					eze_reboot_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,37,861,69, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_lock_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "lock",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"lock": function() {
				try { egl.enter("lock",this,arguments);
					egl.atLine(this.eze$$fileName,40,936,67, this);
					eze_lock_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,40,936,67, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_left_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "left",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"left": function() {
				try { egl.enter("left",this,arguments);
					egl.atLine(this.eze$$fileName,43,1009,67, this);
					eze_left_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,43,1009,67, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze_right_Proxy": function(ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "right",
						[],
						[],
						[],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"right": function() {
				try { egl.enter("right",this,arguments);
					egl.atLine(this.eze$$fileName,46,1082,68, this);
					eze_right_Proxy(null, null, null);
					egl.atLine(this.eze$$fileName,46,1082,68, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[CommandLib]";
			}
			,
			"eze$$getName": function() {
				return "CommandLib";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				];
			}
		}
	);
});
