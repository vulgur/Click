egl.defineWidget("dojo.mobile.widgets","DojoMobileDatePicker","dojo.mobile.widgets","DojoMobileBase","div",{"constructor":function(){this.year=null;this.month=null;this.day=null;this.isSettingMonth=false;this.isSettingYear=false;this.isSettingDay=false;this.isSettingValue=false;this.datelocale=null;var _1=this;require(["dojo/date/locale","dojo/mobile/utility/Synchronor","dojox/mobile/SpinWheelDatePicker","dojox/mobile/SpinWheelSlot"],function(_2,_3,dp,_4){_1.synchronor=_3;_1.datelocale=_2;if(!_4.extendedStartup){_4.extend({"startup":function(){var _5=this.getParent();if(_5.centerPos==0&&_5.domNode.offsetHeight!=0){_5.centerPos=Math.round(_5.domNode.offsetHeight/2);}this.centerPos=_5.centerPos;this.inherited(arguments);var _6=this.panelNodes[1].childNodes;this._itemHeight=_6[0].offsetHeight;this.adjust();}});_4.extendedStartup=true;}_1.renderWhenDojoIsDoneLoading();});},"createDojoWidget":function(_7){var _8=this;var _9=false;var _a=this.datelocale;var _b=new Date();_8.dojoWidget={"domNode":_7};require(["dojo/ready"],function(_c){_c(function(){_8.dojoWidget=new dojox.mobile.SpinWheelDatePicker({},_7);if(_8.dojoWidget.domNode.offsetHeight==0){_9=true;}_8.containerWidget=_8.dojoWidget;require(["dojo/_base/sniff"],function(_d){setTimeout(function(){_c(function(){_8.containerWidget.startup();_8.synchronor.trigger(_8,"SYN_READY");});},_d("ie")?100:0);});_8.dojoWidget.connect(_8.dojoWidget.slots[0],"onFlickAnimationEnd",function(){_8.year=_8.dojoWidget.slots[0].getValue();_8.isSettingYear=false;_8.isSettingValue=_8.isSettingYear||_8.isSettingMonth||_8.isSettingDay;});_8.dojoWidget.connect(_8.dojoWidget.slots[1],"onFlickAnimationEnd",function(){_8.month=_8.dojoWidget.slots[1].getValue();_8.isSettingMonth=false;_8.isSettingValue=_8.isSettingYear||_8.isSettingMonth||_8.isSettingDay;});_8.dojoWidget.connect(_8.dojoWidget.slots[2],"onFlickAnimationEnd",function(){_8.day=_8.dojoWidget.slots[2].getValue();_8.isSettingDay=false;_8.isSettingValue=_8.isSettingYear||_8.isSettingMonth||_8.isSettingDay;});});});},"setYear":function(_e){var _f=this;if(_e>=1970&&_e<2038){_f.isSettingYear=true;_f.year=_e;require(["dojo/mobile/utility/Synchronor"],function(_10){_10.wait([_f],"SYN_READY",function(){if(_f.dojoWidget){_f.dojoWidget.slots[0].setValue(_f.year);}});});}},"setMonth":function(_11){var _12=this;if(_12.datelocale&&_11>0&&_11<=12){_12.isSettingMonth=true;_12.month=_12.datelocale.format(new Date(_12.year,_11-1),{datePattern:"MMM",selector:"date"});require(["dojo/mobile/utility/Synchronor"],function(_13){_13.wait([_12],"SYN_READY",function(){if(_12.dojoWidget){_12.dojoWidget.slots[1].setValue(_12.month);}});});}},"setDay":function(_14){var _15=this;if(_14>=1&&_14<=31){_15.isSettingDay=true;_15.day=_14;require(["dojo/mobile/utility/Synchronor"],function(_16){_16.wait([_15],"SYN_READY",function(){if(_15.dojoWidget){_15.dojoWidget.slots[2].setValue(_15.day);}});});}},"setValue":function(_17){var _18=this;if(_17 instanceof Date){_18.value=_17;_18.isSettingValue=true;_18.setYear(_17.getFullYear());_18.setMonth(_17.getMonth());_18.setDay(_17.getDate());}},"getValue":function(){var _19=this;if(!_19.isSettingValue){var _1a=_19.getYear()+" "+_19.getMonth()+" "+_19.getDay();if(_19.datelocale){_19.value=_19.datelocale.parse(_1a,{selector:"date",datePattern:"yyyy MMM d"});}}return _19.value;},"getYear":function(){if(this.dojoWidget&&!this.isSettingYear){return this.dojoWidget.slots[0].getValue();}return this.year;},"getMonth":function(){if(this.dojoWidget&&!this.isSettingMonth){return this.dojoWidget.slots[1].getValue();}return this.month;},"getDay":function(){if(this.dojoWidget&&!this.isSettingDay){return this.dojoWidget.slots[2].getValue();}return this.day;},"clear":function(){var _1b=this;require(["dojo/mobile/utility/Synchronor"],function(_1c){_1c.wait([_1b],"SYN_READY",function(){var _1d=new Date();if(_1b.dojoWidget){_1b.dojoWidget.reset();}_1b.year=_1d.getFullYear();_1b.day=_1d.getDay();_1b.value=_1d;if(_1b.datelocale){_1b.month=_1b.datelocale.format(_1d,{datePattern:"MMM",selector:"date"});}else{_1b.month=Date.getMonth();}});});}});