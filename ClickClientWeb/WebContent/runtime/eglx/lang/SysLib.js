egl.defineClass("eglx.lang","SysLib",{"constructor":function(){}});egl.eglx.lang.SysLib.errorsMap=[];egl.eglx.lang.SysLib["callCmd"]=function(_1){throw egl.createRuntimeException("NOIMPL",null);};egl.eglx.lang.SysLib["startCmd"]=function(_2){throw egl.createRuntimeException("NOIMPL",null);};egl.eglx.lang.SysLib["commit"]=function(){throw egl.createRuntimeException("NOIMPL",null);};egl.eglx.lang.SysLib["rollback"]=function(){throw egl.createRuntimeException("NOIMPL",null);};egl.eglx.lang.SysLib["getProperty"]=function(_3,_4){var _5;if(egl.eze$$runtimeProperties[_4]){_5=egl.eze$$runtimeProperties[_4][_3];}if(!_5&&egl.eze$$runtimeProperties["rununit"]){_5=egl.eze$$runtimeProperties["rununit"][_3];}if(_5===undefined){_5=null;}return _5;};egl.eglx.lang.SysLib["setLocale"]=function(_6,_7,_8){throw egl.createRuntimeException("NOIMPL",null);};egl.eglx.lang.SysLib["sort"]=function(_9,_a){throw egl.createRuntimeException("NOIMPL",null);};egl.eglx.lang.SysLib["wait"]=function(_b){throw egl.createRuntimeException("NOIMPL",null);};egl.eglx.lang.SysLib["writeStderr"]=function(_c){egl.println(_c);};egl.eglx.lang.SysLib["writeStdout"]=function(_d){egl.println(_d);};