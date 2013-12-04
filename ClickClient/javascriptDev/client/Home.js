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
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,27,915,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,27,928,7, this);
					this.ui.setRows(8);
					egl.atLine(this.eze$$fileName,27,937,15, this);
					this.ui.setCellPadding(1);
					egl.atLine(this.eze$$fileName,27,954,29, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.View,"dojo.mobile.widgets.DojoMobileView"])].setType("[dojo.mobile.widgets.DojoMobileView"));
					egl.atLine(this.eze$$fileName,28,985,14, this);
					this.ui.setWidth("100%");
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,29,1039,89, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,29,1058,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,29,1067,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,29,1079,48, this);
						eze$SettingTarget1.horizontalAlignment = egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']).ALIGN_CENTER;
						egl.atLine(this.eze$$fileName,29,1039,89, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,29,1026,102, this);
					this.View.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,29,1130,15, this);
					this.View.setSelected(true);
					egl.atLine(this.eze$$fileName,29,1147,21, this);
					this.View.setHeaderTitle("Click");
					egl.atLine(this.eze$$fileName,30,1217,24, this);
					this.View.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.mobile.widgets.DojoMobileTabContainer"])].setType("[dojo.mobile.widgets.DojoMobileTabContainer"));
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,32,1304,39, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,32,1323,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,32,1332,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,32,1304,39, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,32,1291,52, this);
					this.TabContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,32,1345,13, this);
					this.TabContainer.setSelection(1);
					egl.atLine(this.eze$$fileName,32,1360,23, this);
					this.TabContainer.setSegmentedControl(true);
					var eze$LNNTemp6 = null;
					var eze$LNNTemp13 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,57,4008,105, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp14 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp14;
						}).call(this);
						egl.atLine(this.eze$$fileName,57,4031,29, this);
						eze$SettingTarget1.setImagePath("icons/video.png");
						egl.atLine(this.eze$$fileName,57,4062,19, this);
						eze$SettingTarget1.setText("Play Video");
						egl.atLine(this.eze$$fileName,57,4083,29, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.playVideo_onClick));
						egl.atLine(this.eze$$fileName,57,4008,105, this);
						eze$LNNTemp13 = eze$SettingTarget1;
					}
					var eze$LNNTemp12 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,56,3881,105, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp15 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp15;
						}).call(this);
						egl.atLine(this.eze$$fileName,56,3904,29, this);
						eze$SettingTarget1.setImagePath("icons/music.png");
						egl.atLine(this.eze$$fileName,56,3935,19, this);
						eze$SettingTarget1.setText("Play Music");
						egl.atLine(this.eze$$fileName,56,3956,29, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.playMusic_onClick));
						egl.atLine(this.eze$$fileName,56,3881,105, this);
						eze$LNNTemp12 = eze$SettingTarget1;
					}
					var eze$LNNTemp11 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,55,3759,100, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp16 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp16;
						}).call(this);
						egl.atLine(this.eze$$fileName,55,3782,29, this);
						eze$SettingTarget1.setImagePath("icons/right.png");
						egl.atLine(this.eze$$fileName,55,3813,18, this);
						eze$SettingTarget1.setText("Right Key");
						egl.atLine(this.eze$$fileName,55,3833,25, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.right_onClick));
						egl.atLine(this.eze$$fileName,55,3759,100, this);
						eze$LNNTemp11 = eze$SettingTarget1;
					}
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,54,3640,97, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp17 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp17;
						}).call(this);
						egl.atLine(this.eze$$fileName,54,3663,28, this);
						eze$SettingTarget1.setImagePath("icons/left.png");
						egl.atLine(this.eze$$fileName,54,3693,17, this);
						eze$SettingTarget1.setText("Left Key");
						egl.atLine(this.eze$$fileName,54,3712,24, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.left_onClick));
						egl.atLine(this.eze$$fileName,54,3640,97, this);
						eze$LNNTemp10 = eze$SettingTarget1;
					}
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,52,3515,102, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp18 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp18;
						}).call(this);
						egl.atLine(this.eze$$fileName,52,3538,31, this);
						eze$SettingTarget1.setImagePath("icons/forward.png");
						egl.atLine(this.eze$$fileName,52,3571,16, this);
						eze$SettingTarget1.setText("Forward");
						egl.atLine(this.eze$$fileName,52,3589,27, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.forward_onClick));
						egl.atLine(this.eze$$fileName,52,3515,102, this);
						eze$LNNTemp9 = eze$SettingTarget1;
					}
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,51,3392,101, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp19 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp19;
						}).call(this);
						egl.atLine(this.eze$$fileName,51,3415,28, this);
						eze$SettingTarget1.setImagePath("icons/back.png");
						egl.atLine(this.eze$$fileName,51,3445,17, this);
						eze$SettingTarget1.setText("Backward");
						egl.atLine(this.eze$$fileName,51,3464,28, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.backward_onClick));
						egl.atLine(this.eze$$fileName,51,3392,101, this);
						eze$LNNTemp8 = eze$SettingTarget1;
					}
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,50,3319,39, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,50,3338,7, this);
						eze$SettingTarget1.row = 4;
						egl.atLine(this.eze$$fileName,50,3347,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,50,3319,39, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,39,2132,226, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp20 = new egl.dojo.mobile.widgets.DojoMobileTab();
							return eze$Temp20;
						}).call(this);
						egl.atLine(this.eze$$fileName,39,2150,17, this);
						eze$SettingTarget1.setTitle("Hotkeys");
						egl.atLine(this.eze$$fileName,39,2282,61, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.hotkyesIconContainer,"dojo.mobile.widgets.DojoMobileIconContainer"])].setType("[dojo.mobile.widgets.DojoMobileIconContainer"));
						egl.atLine(this.eze$$fileName,40,2345,12, this);
						eze$SettingTarget1.setWidth("75px");
						egl.atLine(this.eze$$fileName,39,2132,226, this);
						eze$LNNTemp6 = eze$SettingTarget1;
					}
					var eze$LNNTemp5 = null;
					var eze$LNNTemp26 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,47,3137,102, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp27 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp27;
						}).call(this);
						egl.atLine(this.eze$$fileName,47,3160,28, this);
						eze$SettingTarget1.setImagePath("icons/shut.png");
						egl.atLine(this.eze$$fileName,47,3190,18, this);
						eze$SettingTarget1.setText("Shut Down");
						egl.atLine(this.eze$$fileName,47,3210,28, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.shutDown_onClick));
						egl.atLine(this.eze$$fileName,47,3137,102, this);
						eze$LNNTemp26 = eze$SettingTarget1;
					}
					var eze$LNNTemp25 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,46,3016,99, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp28 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp28;
						}).call(this);
						egl.atLine(this.eze$$fileName,46,3039,30, this);
						eze$SettingTarget1.setImagePath("icons/reboot.png");
						egl.atLine(this.eze$$fileName,46,3071,15, this);
						eze$SettingTarget1.setText("Reboot");
						egl.atLine(this.eze$$fileName,46,3088,26, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.reboot_onClick));
						egl.atLine(this.eze$$fileName,46,3016,99, this);
						eze$LNNTemp25 = eze$SettingTarget1;
					}
					var eze$LNNTemp24 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,45,2886,108, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp29 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp29;
						}).call(this);
						egl.atLine(this.eze$$fileName,45,2909,33, this);
						eze$SettingTarget1.setImagePath("icons/hibernate.png");
						egl.atLine(this.eze$$fileName,45,2944,18, this);
						eze$SettingTarget1.setText("Hibernate");
						egl.atLine(this.eze$$fileName,45,2964,29, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.hibernate_onClick));
						egl.atLine(this.eze$$fileName,45,2886,108, this);
						eze$LNNTemp24 = eze$SettingTarget1;
					}
					var eze$LNNTemp23 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,44,2764,100, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp30 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp30;
						}).call(this);
						egl.atLine(this.eze$$fileName,44,2787,30, this);
						eze$SettingTarget1.setImagePath("icons/logoff.png");
						egl.atLine(this.eze$$fileName,44,2819,16, this);
						eze$SettingTarget1.setText("Log Off");
						egl.atLine(this.eze$$fileName,44,2837,26, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.logOff_onClick));
						egl.atLine(this.eze$$fileName,44,2764,100, this);
						eze$LNNTemp23 = eze$SettingTarget1;
					}
					var eze$LNNTemp22 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,42,2495,93, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp31 = new egl.dojo.mobile.widgets.DojoMobileIconItem();
							return eze$Temp31;
						}).call(this);
						egl.atLine(this.eze$$fileName,42,2518,28, this);
						eze$SettingTarget1.setImagePath("icons/lock.png");
						egl.atLine(this.eze$$fileName,42,2548,13, this);
						eze$SettingTarget1.setText("Lock");
						egl.atLine(this.eze$$fileName,42,2563,24, this);
						egl.checkNull(eze$SettingTarget1).getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.lock_onClick));
						egl.atLine(this.eze$$fileName,42,2495,93, this);
						eze$LNNTemp22 = eze$SettingTarget1;
					}
					var eze$LNNTemp21 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,41,2422,39, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,41,2441,7, this);
						eze$SettingTarget1.row = 4;
						egl.atLine(this.eze$$fileName,41,2450,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,41,2422,39, this);
						eze$LNNTemp21 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp21);
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,37,1888,222, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp32 = new egl.dojo.mobile.widgets.DojoMobileTab();
							return eze$Temp32;
						}).call(this);
						egl.atLine(this.eze$$fileName,37,1906,15, this);
						eze$SettingTarget1.setTitle("Power");
						egl.atLine(this.eze$$fileName,37,2036,59, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.powerIconContainer,"dojo.mobile.widgets.DojoMobileIconContainer"])].setType("[dojo.mobile.widgets.DojoMobileIconContainer"));
						egl.atLine(this.eze$$fileName,38,2097,12, this);
						eze$SettingTarget1.setWidth("75px");
						egl.atLine(this.eze$$fileName,37,1888,222, this);
						eze$LNNTemp5 = eze$SettingTarget1;
					}
					var eze$LNNTemp4 = null;
					var eze$LNNTemp33 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,63,4435,39, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,63,4454,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,63,4463,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,63,4435,39, this);
						eze$LNNTemp33 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp33);
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,35,1656,210, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp34 = new egl.dojo.mobile.widgets.DojoMobileTab();
							return eze$Temp34;
						}).call(this);
						egl.atLine(this.eze$$fileName,35,1674,17, this);
						eze$SettingTarget1.setTitle("Display");
						egl.atLine(this.eze$$fileName,35,1806,45, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.dBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[org.eclipse.edt.rui.widgets.Box"));
						egl.atLine(this.eze$$fileName,36,1853,12, this);
						eze$SettingTarget1.setWidth("75px");
						egl.atLine(this.eze$$fileName,35,1656,210, this);
						eze$LNNTemp4 = eze$SettingTarget1;
					}
					var eze$LNNTemp3 = null;
					var eze$LNNTemp35 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,61,4226,39, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,61,4245,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,61,4254,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,61,4226,39, this);
						eze$LNNTemp35 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp35);
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,33,1417,209, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp36 = new egl.dojo.mobile.widgets.DojoMobileTab();
							return eze$Temp36;
						}).call(this);
						egl.atLine(this.eze$$fileName,33,1435,16, this);
						eze$SettingTarget1.setTitle("Volume");
						egl.atLine(this.eze$$fileName,33,1566,45, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.vBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[org.eclipse.edt.rui.widgets.Box"));
						egl.atLine(this.eze$$fileName,34,1613,12, this);
						eze$SettingTarget1.setWidth("75px");
						egl.atLine(this.eze$$fileName,33,1417,209, this);
						eze$LNNTemp3 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,32,1385,974, this);
					this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.mobile.widgets.DojoMobileTab"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"dojo.mobile.widgets.DojoMobileTab"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"dojo.mobile.widgets.DojoMobileTab"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp6,"dojo.mobile.widgets.DojoMobileTab"])].setType("[dojo.mobile.widgets.DojoMobileTab"));
					egl.atLine(this.eze$$fileName,41,2409,52, this);
					this.powerIconContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp21.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,41,2463,790, this);
					this.powerIconContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp22,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp23,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp24,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp25,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp26,"dojo.mobile.widgets.DojoMobileIconItem"])].setType("[dojo.mobile.widgets.DojoMobileIconItem"));
					egl.atLine(this.eze$$fileName,50,3306,52, this);
					this.hotkyesIconContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,50,3360,767, this);
					this.hotkyesIconContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp8,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp9,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp10,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp11,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp12,"dojo.mobile.widgets.DojoMobileIconItem"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp13,"dojo.mobile.widgets.DojoMobileIconItem"])].setType("[dojo.mobile.widgets.DojoMobileIconItem"));
					egl.atLine(this.eze$$fileName,60,4164,33, this);
					egl.checkNull(this.soundSlider).getOnChange().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.soundSlider_onChange));
					egl.atLine(this.eze$$fileName,61,4213,52, this);
					this.vBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp35.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,61,4267,11, this);
					this.vBox.setPadding(8);
					egl.atLine(this.eze$$fileName,61,4280,11, this);
					this.vBox.setColumns(1);
					egl.atLine(this.eze$$fileName,61,4293,60, this);
					this.vBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.soundTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.soundSlider,"dojo.mobile.widgets.DojoMobileSlider"])].setType("[eglx.ui.rui.Widget"));
					egl.atLine(this.eze$$fileName,62,4355,31, this);
					this.vBox.setAlignment(egl.checkNull(egl.org.eclipse.edt.rui.widgets.BoxLib['$inst']).ALIGN_CENTER);
					egl.atLine(this.eze$$fileName,63,4422,52, this);
					this.dBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp33.eze$$clone(),"Torg/eclipse/edt/rui/widgets/gridlayoutdata;"]));
					egl.atLine(this.eze$$fileName,63,4476,11, this);
					this.dBox.setPadding(8);
					egl.atLine(this.eze$$fileName,63,4489,11, this);
					this.dBox.setColumns(1);
					egl.atLine(this.eze$$fileName,63,4502,83, this);
					this.dBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.displayTextLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.displaySwitch,"dojo.mobile.widgets.DojoMobileSwitch"])].setType("[eglx.ui.rui.Widget"));
					egl.atLine(this.eze$$fileName,65,4587,31, this);
					this.dBox.setAlignment(egl.checkNull(egl.org.eclipse.edt.rui.widgets.BoxLib['$inst']).ALIGN_CENTER);
					egl.atLine(this.eze$$fileName,66,4650,15, this);
					this.soundTextlabel.setText("Volume");
					egl.atLine(this.eze$$fileName,67,4699,16, this);
					this.displayTextLabel.setText("Display");
					egl.atLine(this.eze$$fileName,68,4753,13, this);
					this.displaySwitch.setOnText("On");
					egl.atLine(this.eze$$fileName,68,4768,15, this);
					this.displaySwitch.setOffText("Off");
					egl.atLine(this.eze$$fileName,68,4785,35, this);
					egl.checkNull(this.displaySwitch).getOnChange().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.displaySwitch_onChange));
					egl.atLine(this.eze$$fileName,68,4822,12, this);
					this.displaySwitch.setValue(true);
					egl.atLine(this.eze$$fileName,77,4993,46, this);
					this.myBindingVar = egl.eglx.lang.EAny.ezeCast(egl.eglx.lang.Resources.getResource("binding:RunCmdService"), egl.eglx.http.IHttp);
					egl.atLine(this.eze$$fileName,24,785,28, this);
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
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,73,4894,29, this);
					this.displaySwitch.setValue(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEBoolean, [true]));
					egl.atLine(this.eze$$fileName,74,4932,25, this);
					this.soundSlider.setValue(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [50]));
					egl.atLine(this.eze$$fileName,72,4869,96, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"handleSliderResults": function(value) {
				try { egl.enter("handleSliderResults",this,arguments);
					egl.addLocalFunctionVariable("value", value, "eglx.lang.EInt", "value");
					egl.atLine(this.eze$$fileName,80,5123,50, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"handleResults": function() {
				try { egl.enter("handleResults",this,arguments);
					egl.atLine(this.eze$$fileName,83,5179,87, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"handleError": function(e) {
				try { egl.enter("handleError",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.lang.AnyException", "e");
					egl.atLine(this.eze$$fileName,88,5320,30, this);
					egl.eglx.lang.SysLib.writeStderr(egl.checkNull(e).message);
					egl.atLine(this.eze$$fileName,87,5272,86, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"displaySwitch_onChange": function(switchEvent) {
				try { egl.enter("displaySwitch_onChange",this,arguments);
					egl.addLocalFunctionVariable("switchEvent", switchEvent, "eglx.ui.rui.Event", "switchEvent");
					var state;
					egl.addLocalFunctionVariable("state", state, "eglx.lang.EBoolean", "state");
					egl.atLine(this.eze$$fileName,94,5537,19, this);
					state = egl.checkNull(this.displaySwitch).getValue();
					egl.setLocalFunctionVariable("state", state, "eglx.lang.EBoolean");
					var eze$Temp37;
					eze$Temp37 = egl.eglx.lang.EAny.ezeWrap(state);
					egl.atLine(this.eze$$fileName,95,5566,129, this);
					if (egl.enableEditing !== true) {
						var eze$Temp38;
						eze$Temp38 = egl.eglx.lang.EAny.ezeWrap(state);
						egl.libs.CommandLib['$inst'].eze_switchDisplay_Proxy(eze$Temp38, new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleSwitchResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
						state = eze$Temp38.ezeUnbox();
						egl.setLocalFunctionVariable("state", state, "eglx.lang.EBoolean");
					}
					;
					state = eze$Temp37.ezeUnbox();
					egl.setLocalFunctionVariable("state", state, "eglx.lang.EBoolean");
					egl.atLine(this.eze$$fileName,91,5364,339, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"handleSwitchResults": function(value) {
				try { egl.enter("handleSwitchResults",this,arguments);
					egl.addLocalFunctionVariable("value", value, "eglx.lang.EBoolean", "value");
					egl.atLine(this.eze$$fileName,99,5709,54, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"soundSlider_onChange": function(event) {
				try { egl.enter("soundSlider_onChange",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					var slider;
					egl.addLocalFunctionVariable("slider", slider, "dojo.mobile.widgets.DojoMobileSlider", "slider");
					egl.atLine(this.eze$$fileName,103,5849,12, this);
					slider = egl.eglx.lang.EAny.ezeCast({eze$$value : egl.checkNull(event).widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.mobile.widgets.DojoMobileSlider);
					egl.setLocalFunctionVariable("slider", slider, "dojo.mobile.widgets.DojoMobileSlider");
					var eze$Temp39;
					eze$Temp39 = egl.eglx.lang.EAny.ezeWrap(egl.checkNull(slider).getValue());
					egl.atLine(this.eze$$fileName,104,5871,135, this);
					if (egl.enableEditing !== true) {
						var eze$Temp40;
						eze$Temp40 = egl.eglx.lang.EAny.ezeWrap(egl.checkNull(slider).getValue());
						egl.libs.CommandLib['$inst'].eze_changeVolume_Proxy(eze$Temp40, new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleSliderResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
						slider.setValue(eze$Temp40);
					}
					;
					slider.setValue(eze$Temp39);
					egl.atLine(this.eze$$fileName,102,5769,245, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"backward_onClick": function(event) {
				try { egl.enter("backward_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,109,6070,116, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_backwardCmd_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,108,6020,174, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"forward_onClick": function(event) {
				try { egl.enter("forward_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,114,6249,115, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_forwardCmd_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,113,6200,172, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"left_onClick": function(event) {
				try { egl.enter("left_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,119,6424,109, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_left_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,118,6378,163, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"right_onClick": function(event) {
				try { egl.enter("right_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					var icon;
					egl.addLocalFunctionVariable("icon", icon, "dojo.mobile.widgets.DojoMobileIconItem", "icon");
					egl.atLine(this.eze$$fileName,124,6617,12, this);
					icon = egl.eglx.lang.EAny.ezeCast({eze$$value : egl.checkNull(event).widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.mobile.widgets.DojoMobileIconItem);
					egl.setLocalFunctionVariable("icon", icon, "dojo.mobile.widgets.DojoMobileIconItem");
					egl.atLine(this.eze$$fileName,126,6640,110, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_right_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,123,6547,214, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"lock_onClick": function(e) {
				try { egl.enter("lock_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,137,7004,109, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_lock_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,136,6962,159, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"logOff_onClick": function(e) {
				try { egl.enter("logOff_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,142,7171,111, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_logOff_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,141,7127,163, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"hibernate_onClick": function(e) {
				try { egl.enter("hibernate_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,147,7343,114, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_hibernate_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,146,7296,169, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"reboot_onClick": function(e) {
				try { egl.enter("reboot_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,152,7515,111, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_reboot_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,151,7471,163, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"shutDown_onClick": function(e) {
				try { egl.enter("shutDown_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,157,7686,113, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_shutDown_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,156,7640,167, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"playMusic_onClick": function(e) {
				try { egl.enter("playMusic_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,162,7860,114, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_playMusic_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,161,7813,169, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"playVideo_onClick": function(e) {
				try { egl.enter("playVideo_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,167,8035,114, this);
					if (egl.enableEditing !== true) {
						egl.libs.CommandLib['$inst'].eze_playVideo_Proxy(new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleResults), new egl.egl.jsrt.Delegate(this, egl.client.Home.prototype.handleError), this.myBindingVar);
					}
					;
					egl.atLine(this.eze$$fileName,166,7988,169, this);
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
				{name: "CommandLib", value : egl.libs.CommandLib['$inst'], type : "libs.CommandLib", jsName : "egl.libs.CommandLib['$inst']"},
				{name: "BoxLib", value : egl.org.eclipse.edt.rui.widgets.BoxLib['$inst'], type : "org.eclipse.edt.rui.widgets.BoxLib", jsName : "egl.org.eclipse.edt.rui.widgets.BoxLib['$inst']"},
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "View", value : eze$$parent.View, type : "dojo.mobile.widgets.DojoMobileView", jsName : "View"},
				{name: "TabContainer", value : eze$$parent.TabContainer, type : "dojo.mobile.widgets.DojoMobileTabContainer", jsName : "TabContainer"},
				{name: "powerIconContainer", value : eze$$parent.powerIconContainer, type : "dojo.mobile.widgets.DojoMobileIconContainer", jsName : "powerIconContainer"},
				{name: "hotkyesIconContainer", value : eze$$parent.hotkyesIconContainer, type : "dojo.mobile.widgets.DojoMobileIconContainer", jsName : "hotkyesIconContainer"},
				{name: "soundSlider", value : eze$$parent.soundSlider, type : "dojo.mobile.widgets.DojoMobileSlider", jsName : "soundSlider"},
				{name: "vBox", value : eze$$parent.vBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "vBox"},
				{name: "dBox", value : eze$$parent.dBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "dBox"},
				{name: "soundTextlabel", value : eze$$parent.soundTextlabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "soundTextlabel"},
				{name: "displayTextLabel", value : eze$$parent.displayTextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "displayTextLabel"},
				{name: "displaySwitch", value : eze$$parent.displaySwitch, type : "dojo.mobile.widgets.DojoMobileSwitch", jsName : "displaySwitch"},
				{name: "myBindingVar", value : eze$$parent.myBindingVar, type : "eglx.http.IHttp", jsName : "myBindingVar"}
				];
			}
		}
	);
});
