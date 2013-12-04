define([],function(){
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
				this.eze$$setEmpty();
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
				eze_playMusic_Proxy(null, null, null);
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
				eze_playVideo_Proxy(null, null, null);
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
				var eze$Temp1;
				eze$Temp1 = egl.eglx.lang.EAny.ezeWrap(egl.eglx.lang.EAny.unbox(value));
				eze_switchDisplay_Proxy(eze$Temp1, null, null, null);
				value.ezeCopy(eze$Temp1.ezeUnbox());
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
				var eze$Temp2;
				eze$Temp2 = egl.eglx.lang.EAny.ezeWrap(egl.eglx.lang.EAny.unbox(value));
				eze_changeVolume_Proxy(eze$Temp2, null, null, null);
				value.ezeCopy(eze$Temp2.ezeUnbox());
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
				eze_logOff_Proxy(null, null, null);
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
				eze_shutDown_Proxy(null, null, null);
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
				eze_sleep_Proxy(null, null, null);
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
				eze_hibernate_Proxy(null, null, null);
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
				eze_forwardCmd_Proxy(null, null, null);
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
				eze_backwardCmd_Proxy(null, null, null);
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
				eze_reboot_Proxy(null, null, null);
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
				eze_lock_Proxy(null, null, null);
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
				eze_left_Proxy(null, null, null);
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
				eze_right_Proxy(null, null, null);
			}
			,
			"toString": function() {
				return "[CommandLib]";
			}
		}
	);
});
