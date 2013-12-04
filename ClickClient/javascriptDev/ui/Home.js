define(["org/eclipse/edt/rui/widgets/Button", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/TextLabel", "ezekw$$dojo/mobile/widgets/eze$$DojoMobileButton", "org/eclipse/edt/rui/widgets/GridLayoutLib", "org/eclipse/edt/rui/widgets/GridLayout", "eglx/ui/rui/eze$$Widget"],function(){
	egl.loadCSS("css/ClickClient.css");
	egl.defineRUIWidget('ui', 'Home',
	{
		'eze$$fileName': 'ui/Home.egl',
		'eze$$runtimePropertiesFile': 'ui.Home',
			"constructor": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.upBtn = new egl.org.eclipse.edt.rui.widgets.Button();
				this.downBtn = new egl.org.eclipse.edt.rui.widgets.Button();
				this.TextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.unpairBtn = new egl.dojo.mobile.widgets.DojoMobileButton();
				this.openBtn = new egl.dojo.mobile.widgets.DojoMobileButton();
				this.pairBtn = new egl.dojo.mobile.widgets.DojoMobileButton();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,16,480,11, this);
					this.ui.setColumns(3);
					egl.atLine(this.eze$$fileName,16,493,8, this);
					this.ui.setRows(6);
					egl.atLine(this.eze$$fileName,16,503,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,16,520,68, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.pairBtn,"dojo.mobile.widgets.DojoMobileButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.openBtn,"dojo.mobile.widgets.DojoMobileButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.unpairBtn,"dojo.mobile.widgets.DojoMobileButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.downBtn,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.upBtn,"org.eclipse.edt.rui.widgets.Button"])].setType("[eglx.ui.rui.Widget"));
					egl.atLine(this.eze$$fileName,17,595,13, this);
					this.ui.setWidth("320");
					egl.atLine(this.eze$$fileName,18,615,14, this);
					this.ui.setHeight("480");
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,19,663,96, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,19,683,7, this);
						eze$SettingTarget1.row = 5;
						egl.atLine(this.eze$$fileName,19,692,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,20,709,48, this);
						eze$SettingTarget1.horizontalAlignment = egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']).ALIGN_CENTER;
						egl.atLine(this.eze$$fileName,19,663,96, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,19,650,109, this);
					this.upBtn.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,20,761,18, this);
					this.upBtn.setText("Volume Up");
					egl.atLine(this.eze$$fileName,21,786,12, this);
					this.upBtn.setID("upBtn");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,22,835,96, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,22,855,7, this);
						eze$SettingTarget1.row = 6;
						egl.atLine(this.eze$$fileName,22,864,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,23,881,48, this);
						eze$SettingTarget1.horizontalAlignment = egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']).ALIGN_CENTER;
						egl.atLine(this.eze$$fileName,22,835,96, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,22,822,109, this);
					this.downBtn.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,23,933,20, this);
					this.downBtn.setText("Volume Down");
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,24,995,96, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,24,1015,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,24,1024,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,25,1041,48, this);
						eze$SettingTarget1.horizontalAlignment = egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']).ALIGN_CENTER;
						egl.atLine(this.eze$$fileName,24,995,96, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,24,982,109, this);
					this.TextLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,25,1093,14, this);
					this.TextLabel.setText("Click");
					egl.atLine(this.eze$$fileName,26,1114,19, this);
					this.TextLabel.setColor("RoyalBlue");
					egl.atLine(this.eze$$fileName,27,1140,15, this);
					this.TextLabel.setFont("Tahoma");
					egl.atLine(this.eze$$fileName,28,1162,15, this);
					this.TextLabel.setFontSize("50");
					egl.atLine(this.eze$$fileName,29,1184,21, this);
					this.TextLabel.setFontWeight("bolder");
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,30,1254,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,30,1274,7, this);
						eze$SettingTarget1.row = 4;
						egl.atLine(this.eze$$fileName,30,1283,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,30,1254,41, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,30,1241,54, this);
					this.unpairBtn.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,30,1297,15, this);
					this.unpairBtn.setText("Unpair");
					egl.atLine(this.eze$$fileName,30,1314,13, this);
					this.unpairBtn.setWidth("100");
					egl.atLine(this.eze$$fileName,30,1329,29, this);
					egl.checkNull(this.unpairBtn).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.ui.Home.prototype.unpairBtn_onClick));
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,31,1405,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,31,1425,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,31,1434,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,31,1405,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,31,1392,54, this);
					this.openBtn.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,31,1448,23, this);
					this.openBtn.setText("Open Bluetooth");
					egl.atLine(this.eze$$fileName,31,1473,13, this);
					this.openBtn.setWidth("100");
					egl.atLine(this.eze$$fileName,31,1488,27, this);
					egl.checkNull(this.openBtn).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.ui.Home.prototype.openBtn_onClick));
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,32,1562,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,32,1582,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,32,1591,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,32,1562,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,32,1549,54, this);
					this.pairBtn.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,32,1605,13, this);
					this.pairBtn.setText("Pair");
					egl.atLine(this.eze$$fileName,32,1620,13, this);
					this.pairBtn.setWidth("100");
					egl.atLine(this.eze$$fileName,15,346,17, this);
					egl.checkNull(this).targetWidget = egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"]);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.ui.Home();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.upBtn = ezert$$1.upBtn === null ? null : ezert$$1.upBtn.eze$$clone();
				ezert$$2.downBtn = ezert$$1.downBtn === null ? null : ezert$$1.downBtn.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.unpairBtn = ezert$$1.unpairBtn === null ? null : ezert$$1.unpairBtn;
				ezert$$2.openBtn = ezert$$1.openBtn === null ? null : ezert$$1.openBtn;
				ezert$$2.pairBtn = ezert$$1.pairBtn === null ? null : ezert$$1.pairBtn;
				return ezert$$2;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Home", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("upBtn", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("upBtn");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("upBtn", "upBtn", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("downBtn", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("downBtn");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("downBtn", "downBtn", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("TextLabel", "TextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,34,1642,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"unpairBtn_onClick": function(event) {
				try { egl.enter("unpairBtn_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,37,1676,56, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"openBtn_onClick": function(event) {
				try { egl.enter("openBtn_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,41,1742,54, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Home]";
			}
			,
			"eze$$getName": function() {
				return "Home";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "upBtn", value : eze$$parent.upBtn, type : "org.eclipse.edt.rui.widgets.Button", jsName : "upBtn"},
				{name: "downBtn", value : eze$$parent.downBtn, type : "org.eclipse.edt.rui.widgets.Button", jsName : "downBtn"},
				{name: "TextLabel", value : eze$$parent.TextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel"},
				{name: "unpairBtn", value : eze$$parent.unpairBtn, type : "dojo.mobile.widgets.DojoMobileButton", jsName : "unpairBtn"},
				{name: "openBtn", value : eze$$parent.openBtn, type : "dojo.mobile.widgets.DojoMobileButton", jsName : "openBtn"},
				{name: "pairBtn", value : eze$$parent.pairBtn, type : "dojo.mobile.widgets.DojoMobileButton", jsName : "pairBtn"}
				];
			}
		}
	);
});
