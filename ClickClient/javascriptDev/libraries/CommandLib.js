define([],function(){
	if (egl.eze$$userLibs) egl.eze$$userLibs.push('libraries.CommandLib');
	else egl.eze$$userLibs = ['libraries.CommandLib'];
	egl.defineRUILibrary('libraries', 'CommandLib',
	{
		'eze$$fileName': 'libraries/CommandLib.egl',
		'eze$$runtimePropertiesFile': 'libraries.CommandLib',
			"constructor": function() {
				if(egl.libraries.CommandLib['$inst']) return egl.libraries.CommandLib['$inst'];
				egl.libraries.CommandLib['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
			}
			,
			"eze$$setInitial": function() {
				if(egl.libraries.CommandLib['$inst']) return egl.libraries.CommandLib['$inst'];
				egl.libraries.CommandLib['$inst']=this;
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
			"eze_sendCmd_Proxy": function(cmd, ezeCallbackDelegate, ezeErrorCallbackDelegate, ezeHttp) {
				if(ezeHttp == null){
					ezeHttp = null;
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(ezeHttp,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null, contentType : null}),
						"RunCmdService", "sendCmd",
						[cmd],
						["egl.eglx.lang.EString"],
						["cmd"],
						[],
						ezeCallbackDelegate, ezeErrorCallbackDelegate);
			}
			,
			"sendCmd": function(cmd) {
				try { egl.enter("sendCmd",this,arguments);
					egl.addLocalFunctionVariable("cmd", cmd, "eglx.lang.EString", "cmd");
					egl.atLine(this.eze$$fileName,16,279,101, this);
					eze_sendCmd_Proxy(cmd, null, null, null);
					egl.atLine(this.eze$$fileName,16,279,101, this);
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
