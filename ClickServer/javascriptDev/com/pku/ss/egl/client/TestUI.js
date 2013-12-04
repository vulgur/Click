define(["org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/Button", "org/eclipse/edt/rui/widgets/GridLayoutData", "eglx/ui/rui/eze$$Event", "com/pku/ss/egl/libs/PlayerLib", "eglx/ui/rui/eze$$View"],function(){
	egl.loadCSS("css/ClickServer.css");
	egl.defineRUIHandler("com.pku.ss.egl.client", "TestUI", {
		"eze$$fileName" : "com/pku/ss/egl/client/TestUI.egl",
		"eze$$runtimePropertiesFile" : "com/pku/ss/egl/client/TestUI",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.com.pku.ss.egl.libs.PlayerLib();
				new egl.com.pku.ss.egl.libs.PlayerLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Button = new egl.org.eclipse.edt.rui.widgets.Button();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,18,514,11, this);
					this.ui.setColumns(3);
					egl.atLine(this.eze$$fileName,18,527,8, this);
					this.ui.setRows(4);
					egl.atLine(this.eze$$fileName,18,537,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,18,554,20, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button,"org.eclipse.edt.rui.widgets.Button"])].setType("[org.eclipse.edt.rui.widgets.Button"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,19,609,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,19,629,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,19,638,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,19,609,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,19,596,54, this);
					this.Button.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,19,652,13, this);
					this.Button.setText("Button");
					egl.atLine(this.eze$$fileName,19,667,26, this);
					egl.checkNull(this.Button).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.com.pku.ss.egl.client.TestUI.prototype.Button_onClick));
					egl.atLine(this.eze$$fileName,15,388,28, this);
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
				var ezert$$2 = new egl.com.pku.ss.egl.client.TestUI();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Button = ezert$$1.Button === null ? null : ezert$$1.Button.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("TestUI", null, false);
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
					egl.atLine(this.eze$$fileName,21,701,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"Button_onClick": function(event) {
				try { egl.enter("Button_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,25,794,22, this);
					egl.com.pku.ss.egl.libs.PlayerLib['$inst'].PlayMusic();
					egl.atLine(this.eze$$fileName,24,749,75, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[TestUI]";
			}
			,
			"eze$$getName": function() {
				return "TestUI";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "PlayerLib", value : egl.com.pku.ss.egl.libs.PlayerLib['$inst'], type : "com.pku.ss.egl.libs.PlayerLib", jsName : "egl.com.pku.ss.egl.libs.PlayerLib['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "Button", value : eze$$parent.Button, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button"}
				];
			}
		}
	);
});
