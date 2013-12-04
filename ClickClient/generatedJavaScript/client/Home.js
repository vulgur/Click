define(["ezekw$$dojo/mobile/widgets/eze$$DojoMobileSwitch", "org/eclipse/edt/rui/widgets/Box", "ezekw$$dojo/mobile/widgets/eze$$DojoMobileTab", "libs/CommandLib", "org/eclipse/edt/rui/widgets/TextLabel", "ezekw$$dojo/mobile/widgets/eze$$DojoMobileIconContainer", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/BoxLib", "ezekw$$dojo/mobile/widgets/eze$$DojoMobileSlider", "ezekw$$dojo/mobile/widgets/eze$$DojoMobileTabContainer", "org/eclipse/edt/rui/widgets/GridLayoutData", "eglx/ui/rui/eze$$View", "eglx/ui/rui/eze$$Event", "ezekw$$dojo/mobile/widgets/eze$$DojoMobileView", "ezekw$$dojo/mobile/widgets/eze$$DojoMobileIconItem", "org/eclipse/edt/rui/widgets/GridLayoutLib"],function(){
	egl.loadCSS("css/ClickClient.css");
	egl.defineRUIHandler("client", "Home", {
		"eze$$fileName" : "client/Home.egl",
		"eze$$runtimePropertiesFile" : "client/Home",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.libs.CommandLib();
				new egl.org.eclipse.edt.rui.widgets.BoxLib();
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.View = new egl.dojo.mobile.widgets.DojoMobileView();
				this.TabContainer = new egl.dojo.mobile.widgets.DojoMobileTabContainer();
				this.powerIconContainer = new egl.dojo.mobile.widgets.DojoMobileIconContainer();
				this.hotkyesIconContainer = new egl.dojo.mobile.widgets.DojoMobileIconContainer();
				this.soundSlider = new egl.dojo.mobile.widgets.DojoMobileSlider();
				this.vBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.dBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.soundTextlabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.displayTextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.displaySwitch = new egl.dojo.mobile.widgets.DojoMobileSwitch();
				this.myBindingVar = null;
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
				this.ui.setColumns(1);
				this.ui.setRows(8);
				this.ui.setCellPadding(1);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.View,"dojo.mobile.widgets.DojoMobileView"])].setType("[dojo.mobile.widgets.DojoMobileView"));
				this.ui.setWidth("100%");
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalAlignment = egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']).ALIGN_CENTER;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.View.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
				this.View.setSelected(true);
				this.View.setHeaderTitle("Click");
				this.View.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.mobile.widgets.DojoMobileTabContainer"])].setType("[dojo.mobile.widgets.DojoMobileTabContainer"));
				var eze$LNNTemp2 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
				}
				this.TabContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
				this.TabContainer.setSelection(1);
				this.TabContainer.setSegmentedControl(true);
				var eze$LNNTemp6 = null;
				var eze$LNNTemp13 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp14 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp14;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/video.png");
					eze$SettingTarget1.setText("Play Video");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.playVideo_onClick));
					eze$LNNTemp13 = eze$SettingTarget1;
				}
				var eze$LNNTemp12 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp15 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp15;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/music.png");
					eze$SettingTarget1.setText("Play Music");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.playMusic_onClick));
					eze$LNNTemp12 = eze$SettingTarget1;
				}
				var eze$LNNTemp11 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp16 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp16;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/right.png");
					eze$SettingTarget1.setText("Right Key");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.right_onClick));
					eze$LNNTemp11 = eze$SettingTarget1;
				}
				var eze$LNNTemp10 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp17 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp17;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/left.png");
					eze$SettingTarget1.setText("Left Key");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.left_onClick));
					eze$LNNTemp10 = eze$SettingTarget1;
				}
				var eze$LNNTemp9 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp18 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp18;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/forward.png");
					eze$SettingTarget1.setText("Forward");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.forward_onClick));
					eze$LNNTemp9 = eze$SettingTarget1;
				}
				var eze$LNNTemp8 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp19 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp19;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/back.png");
					eze$SettingTarget1.setText("Backward");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.backward_onClick));
					eze$LNNTemp8 = eze$SettingTarget1;
				}
				var eze$LNNTemp7 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 4;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp20 = new egl.dojo.mobile.widgets.DojoMobileTab();
						return eze$Temp20;
					}).call(this);
					eze$SettingTarget1.setTitle("Hotkeys");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.hotkyesIconContainer,"dojo.mobile.widgets.DojoMobileIconContainer"])].setType("[dojo.mobile.widgets.DojoMobileIconContainer"));
					eze$SettingTarget1.setWidth("75px");
					eze$LNNTemp6 = eze$SettingTarget1;
				}
				var eze$LNNTemp5 = null;
				var eze$LNNTemp26 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp27 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp27;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/shut.png");
					eze$SettingTarget1.setText("Shut Down");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.shutDown_onClick));
					eze$LNNTemp26 = eze$SettingTarget1;
				}
				var eze$LNNTemp25 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp28 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp28;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/reboot.png");
					eze$SettingTarget1.setText("Reboot");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.reboot_onClick));
					eze$LNNTemp25 = eze$SettingTarget1;
				}
				var eze$LNNTemp24 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp29 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp29;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/hibernate.png");
					eze$SettingTarget1.setText("Hibernate");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.hibernate_onClick));
					eze$LNNTemp24 = eze$SettingTarget1;
				}
				var eze$LNNTemp23 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp30 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp30;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/logoff.png");
					eze$SettingTarget1.setText("Log Off");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.logOff_onClick));
					eze$LNNTemp23 = eze$SettingTarget1;
				}
				var eze$LNNTemp22 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp31 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
						return eze$Temp31;
					}).call(this);
					eze$SettingTarget1.setImagePath("icons/lock.png");
					eze$SettingTarget1.setText("Lock");
					egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.lock_onClick));
					eze$LNNTemp22 = eze$SettingTarget1;
				}
				var eze$LNNTemp21 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 4;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp21 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp21);
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp32 = new egl.dojo.mobile.widgets.DojoMobileTab();
						return eze$Temp32;
					}).call(this);
					eze$SettingTarget1.setTitle("Power");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.powerIconContainer,"dojo.mobile.widgets.DojoMobileIconContainer"])].setType("[dojo.mobile.widgets.DojoMobileIconContainer"));
					eze$SettingTarget1.setWidth("75px");
					eze$LNNTemp5 = eze$SettingTarget1;
				}
				var eze$LNNTemp4 = null;
				var eze$LNNTemp33 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp33 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp33);
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp34 = new egl.dojo.mobile.widgets.DojoMobileTab();
						return eze$Temp34;
					}).call(this);
					eze$SettingTarget1.setTitle("Display");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.dBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[org.eclipse.edt.rui.widgets.Box"));
					eze$SettingTarget1.setWidth("75px");
					eze$LNNTemp4 = eze$SettingTarget1;
				}
				var eze$LNNTemp3 = null;
				var eze$LNNTemp35 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp35 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp35);
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp36 = new egl.dojo.mobile.widgets.DojoMobileTab();
						return eze$Temp36;
					}).call(this);
					eze$SettingTarget1.setTitle("Volume");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.vBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[org.eclipse.edt.rui.widgets.Box"));
					eze$SettingTarget1.setWidth("75px");
					eze$LNNTemp3 = eze$SettingTarget1;
				}
				this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.mobile.widgets.DojoMobileTab"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"dojo.mobile.widgets.DojoMobileTab"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"dojo.mobile.widgets.DojoMobileTab"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp6,"dojo.mobile.widgets.DojoMobileTab"])].setType("[dojo.mobile.widgets.DojoMobileTab"));
				this.powerIconContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp21.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
				this.powerIconContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp22,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp23,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp24,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp25,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp26,"dojo.mobile.widgets.DojoMobileIconItem"])].setType("[dojo.mobile.widgets.DojoMobileIconItem"));
				this.hotkyesIconContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
				this.hotkyesIconContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp8,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp9,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp10,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp11,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp12,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp13,"dojo.mobile.widgets.DojoMobileIconItem"])].setType("[dojo.mobile.widgets.DojoMobileIconItem"));
				egl.checkNull(this.soundSlider).getOnChange().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.soundSlider_onChange));
				this.vBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp35.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
				this.vBox.setPadding(8);
				this.vBox.setColumns(1);
				this.vBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.soundTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.soundSlider,"dojo.mobile.widgets.DojoMobileSlider"])].setType("[eglx.ui.rui.Widget"));
				this.vBox.setAlignment(egl.checkNull(egl.org.eclipse.edt.rui.widgets.BoxLib['$inst']).ALIGN_CENTER);
				this.dBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp33.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
				this.dBox.setPadding(8);
				this.dBox.setColumns(1);
				this.dBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.displayTextLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.displaySwitch,"dojo.mobile.widgets.DojoMobileSwitch"])].setType("[eglx.ui.rui.Widget"));
				this.dBox.setAlignment(egl.checkNull(egl.org.eclipse.edt.rui.widgets.BoxLib['$inst']).ALIGN_CENTER);
				this.soundTextlabel.setText("Volume");
				this.displayTextLabel.setText("Display");
				this.displaySwitch.setOnText("On");
				this.displaySwitch.setOffText("Off");
				egl.checkNull(this.displaySwitch).getOnChange().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.displaySwitch_onChange));
				this.displaySwitch.setValue(true);
				this.myBindingVar = egl.eglx.lang.EAny.ezeCast(egl.eglx.lang.Resources.getResource("binding:RunCmdService"), egl.eglx.http.IHttp);
				egl.checkNull(this).initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[org.eclipse.edt.rui.widgets.GridLayout");
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.Home();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.View = ezert$$1.View === null ? null : ezert$$1.View;
				ezert$$2.TabContainer = ezert$$1.TabContainer === null ? null : ezert$$1.TabContainer;
				ezert$$2.powerIconContainer = ezert$$1.powerIconContainer === null ? null : ezert$$1.powerIconContainer;
				ezert$$2.hotkyesIconContainer = ezert$$1.hotkyesIconContainer === null ? null : ezert$$1.hotkyesIconContainer;
				ezert$$2.soundSlider = ezert$$1.soundSlider === null ? null : ezert$$1.soundSlider;
				ezert$$2.vBox = ezert$$1.vBox === null ? null : ezert$$1.vBox.eze$$clone();
				ezert$$2.dBox = ezert$$1.dBox === null ? null : ezert$$1.dBox.eze$$clone();
				ezert$$2.soundTextlabel = ezert$$1.soundTextlabel === null ? null : ezert$$1.soundTextlabel.eze$$clone();
				ezert$$2.displayTextLabel = ezert$$1.displayTextLabel === null ? null : ezert$$1.displayTextLabel.eze$$clone();
				ezert$$2.displaySwitch = ezert$$1.displaySwitch === null ? null : ezert$$1.displaySwitch;
				ezert$$2.myBindingVar = ezert$$1.myBindingVar === null ? null : ezert$$1.myBindingVar;
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("vBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("vBox");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("vBox", "vBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("dBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("dBox");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("dBox", "dBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("soundTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("soundTextlabel");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("soundTextlabel", "soundTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("displayTextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("displayTextLabel");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("displayTextLabel", "displayTextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				this.displaySwitch.setValue(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEBoolean, [true]));
				this.soundSlider.setValue(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [50]));
			}
			,
			"handleSliderResults": function(value) {
			}
			,
			"handleResults": function() {
			}
			,
			"handleError": function(e) {
				egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
			}
			,
			"displaySwitch_onChange": function(switchEvent) {
				var state;
				state = egl.checkNull(this.displaySwitch).getValue();
				var eze$Temp37;
				eze$Temp37 = egl.eglx.lang.EAny.ezeWrap(state);
				egl.libs.CommandLib['$inst'].eze_switchDisplay_Proxy(eze$Temp37, new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleSwitchResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
				state = eze$Temp37.ezeUnbox();
			}
			,
			"handleSwitchResults": function(value) {
			}
			,
			"soundSlider_onChange": function(event) {
				var slider;
				slider = egl.eglx.lang.EAny.ezeCast({eze$$value : egl.checkNull(event).widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.mobile.widgets.DojoMobileSlider);
				var eze$Temp38;
				eze$Temp38 = egl.eglx.lang.EAny.ezeWrap(egl.checkNull(slider).getValue());
				egl.libs.CommandLib['$inst'].eze_changeVolume_Proxy(eze$Temp38, new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleSliderResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
				slider.setValue(eze$Temp38);
			}
			,
			"backward_onClick": function(event) {
				egl.libs.CommandLib['$inst'].eze_backwardCmd_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"forward_onClick": function(event) {
				egl.libs.CommandLib['$inst'].eze_forwardCmd_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"left_onClick": function(event) {
				egl.libs.CommandLib['$inst'].eze_left_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"right_onClick": function(event) {
				var icon;
				icon = egl.eglx.lang.EAny.ezeCast({eze$$value : egl.checkNull(event).widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.mobile.widgets.DojoMobileIconItem);
				egl.libs.CommandLib['$inst'].eze_right_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"lock_onClick": function(e) {
				egl.libs.CommandLib['$inst'].eze_lock_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"logOff_onClick": function(e) {
				egl.libs.CommandLib['$inst'].eze_logOff_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"hibernate_onClick": function(e) {
				egl.libs.CommandLib['$inst'].eze_hibernate_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"reboot_onClick": function(e) {
				egl.libs.CommandLib['$inst'].eze_reboot_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"shutDown_onClick": function(e) {
				egl.libs.CommandLib['$inst'].eze_shutDown_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"playMusic_onClick": function(e) {
				egl.libs.CommandLib['$inst'].eze_playMusic_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"playVideo_onClick": function(e) {
				egl.libs.CommandLib['$inst'].eze_playVideo_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
			}
			,
			"toString": function() {
				return "[Home]";
			}
		}
	);
});
