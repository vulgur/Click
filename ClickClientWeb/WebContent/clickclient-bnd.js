egl["eze$$BindFile_clickclient"] = function() {
	var bindFile = new egl.eglx.services.BindFile("clickclient");
	var binding;
	binding = new egl.eglx.services.RestBinding(
		/*name                   */ "runcmdservice",
		/*baseURI                */ "http://192.168.1.105:8080/ClickServerWeb/restservices/RunCmdService",
		/*sessionCookieId        */ ""
	);
	bindFile.bindings.push(binding);
	return bindFile;
};
