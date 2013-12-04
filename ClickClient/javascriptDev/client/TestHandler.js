define(["eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/widgets/Button", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/GridLayoutData", "eglx/ui/rui/eze$$View"],function(){
	egl.loadCSS("css/ClickClient.css");
	egl.defineRUIHandler("client", "TestHandler", {
		"eze$$fileName" : "client/TestHandler.egl",
		"eze$$runtimePropertiesFile" : "client/TestHandler",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Button = new egl.org.eclipse.edt.rui.widgets.Button();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,15,346,11, this);
					this.ui.setColumns(3);
					egl.atLine(this.eze$$fileName,15,359,8, this);
					this.ui.setRows(4);
					egl.atLine(this.eze$$fileName,15,369,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,15,386,21, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button,"org.eclipse.edt.rui.widgets.Button"])].setType("[org.eclipse.edt.rui.widgets.Button"));
					egl.atLine(this.eze$$fileName,15,409,22, this);
					egl.checkNull(this.ui).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.TestHandler.prototype.ui_onClick));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,16,466,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,16,486,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,16,495,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,16,466,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,16,453,54, this);
					this.Button.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,16,509,13, this);
					this.Button.setText("Button");
					egl.atLine(this.eze$$fileName,12,220,28, this);
					egl.checkNull(this).initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[org.eclipse.edt.rui.widgets.GridLayout");
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.TestHandler();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Button = ezert$$1.Button === null ? null : ezert$$1.Button.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("TestHandler", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ui");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("ui", "ui", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("Button", "Button", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,18,531,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"ui_onClick": function(event) {
				try { egl.enter("ui_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,22,606,35, this);
					egl.eglx.lang.SysLib.writeStdout("Click starts");
					egl.atLine(this.eze$$fileName,23,647,43, this);
					egl.eglx.lang.SysLib.callCmd("C:\\Windows\\Notepad.exe");
					egl.atLine(this.eze$$fileName,24,696,33, this);
					egl.eglx.lang.SysLib.writeStdout("Click ends");
					egl.atLine(this.eze$$fileName,21,565,178, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[TestHandler]";
			}
			,
			"eze$$getName": function() {
				return "TestHandler";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "Button", value : eze$$parent.Button, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button"}
				];
			}
		}
	);
});
