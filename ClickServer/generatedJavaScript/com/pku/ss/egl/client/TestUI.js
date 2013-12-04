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
				this.eze$$setEmpty();
				this.ui.setColumns(3);
				this.ui.setRows(4);
				this.ui.setCellPadding(4);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button,"org.eclipse.edt.rui.widgets.Button"])].setType("[org.eclipse.edt.rui.widgets.Button"));
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 2;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.Button.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
				this.Button.setText("Button");
				egl.checkNull(this.Button).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.com.pku.ss.egl.client.TestUI.prototype.Button_onClick));
				egl.checkNull(this).initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[org.eclipse.edt.rui.widgets.GridLayout");
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
			}
			,
			"Button_onClick": function(event) {
				egl.com.pku.ss.egl.libs.PlayerLib['$inst'].PlayMusic();
			}
			,
			"toString": function() {
				return "[TestUI]";
			}
		}
	);
});
