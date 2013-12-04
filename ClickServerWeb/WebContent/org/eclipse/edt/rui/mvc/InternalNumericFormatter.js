define(["eglx/rbd/StrLib","eglx/ui/SignKind","org/eclipse/edt/rui/mvc/InternalMessageLib","org/eclipse/edt/rui/mvc/eze$$InternalFormattingUtil"],function(){egl.defineRUILibrary("org.eclipse.edt.rui.mvc","InternalNumericFormatter",{"eze$$fileName":"org/eclipse/edt/rui/mvc/InternalNumericFormatter.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.mvc.InternalNumericFormatter","constructor":function(){if(egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter["$inst"]){return egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter["$inst"];}egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter["$inst"]=this;},"eze$$setEmpty":function(){new egl.eglx.rbd.StrLib();new egl.org.eclipse.edt.rui.mvc.InternalMessageLib();this.PARSE_ERROR="";this.PARSE_ERROR="CRRUI2719E";this.EDIT_INVALID_DATE_TIME_ERR="";this.EDIT_INVALID_DATE_TIME_ERR="CRRUI2708E";this.BOOLEAN_ERROR="";this.BOOLEAN_ERROR="CRRUI2710E";this.util=new egl.org.eclipse.edt.rui.mvc.InternalFormattingUtil();},"eze$$setInitial":function(){if(egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter["$inst"]){return egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter["$inst"];}egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter["$inst"]=this;this.eze$$setEmpty();},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("InternalNumericFormatter",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _1;this.fieldInfos=new Array();}return this.fieldInfos;},"format":function(_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d){if(((_2)=="")){return "";}if(((!(_4)&&(egl.eglx.lang.EDecimal.equals(egl.eglx.lang.convert(egl.eglx.lang.EDecimal.fromEString,[_2,egl.javascript.BigDecimal.prototype.NINES[8]]),egl.eglx.lang.convert(egl.eglx.lang.EDecimal.fromEInt32,[0,egl.javascript.BigDecimal.prototype.NINES[3]])))))){if(((((((((_5)!=" ")&&((_5)!="")))&&((_c)!="eglx.lang.EFloat")))&&((_c)!="eglx.lang.ESmallfloat")))){var _e="";var _f;_f=((_a-_b));var i=0;for(i=1;((i<=_f));i=((i+1))){_e=((_e)+_5);}return _e;}return "";}var _e;_e=_2;var _10;_10=((egl.eglx.lang.EString.substring(_e,1,1))=="-");if(_10){_e=egl.eglx.lang.EString.substring(_e,2,egl.eglx.rbd.StrLib["$inst"].characterLen(_e));}var _11="";var _12="";var _13;_13=egl.eglx.rbd.StrLib["$inst"].indexOf_2_S_S(_e,".");if(((_13>1))){_11=egl.eglx.lang.EString.substring(_e,1,((_13-1)));if(((egl.eglx.rbd.StrLib["$inst"].characterLen(_e)>_13))){_12=egl.eglx.lang.EString.substring(_e,((_13+1)),egl.eglx.rbd.StrLib["$inst"].characterLen(_e));}}else{if(((_13==1))){if(((egl.eglx.rbd.StrLib["$inst"].characterLen(_e)>1))){_12=egl.eglx.lang.EString.substring(_e,2,egl.eglx.rbd.StrLib["$inst"].characterLen(_e));}}else{_11=_e;}}if(_9){var _14;_14=this.util.getGroupingSeparator();var i=0;for(i=((egl.eglx.rbd.StrLib["$inst"].characterLen(_11)-3));((i>=1));i=((i-3))){_11=((((egl.eglx.lang.EString.substring(_11,1,i))+_14))+egl.eglx.lang.EString.substring(_11,((i+1)),egl.eglx.rbd.StrLib["$inst"].characterLen(_11)));}}if(((_b>0))){if(((((_c)!="eglx.lang.ESmallfloat")&&((_c)!="eglx.lang.EFloat")))){if(((egl.eglx.rbd.StrLib["$inst"].characterLen(_12)>_b))){_12=egl.eglx.lang.EString.substring(_12,1,_b);}else{while(((egl.eglx.rbd.StrLib["$inst"].characterLen(_12)<_b))){_12=((_12)+"0");}}}_13=((egl.eglx.rbd.StrLib["$inst"].characterLen(_11)+1));_e=((((_11)+this.util.getDecimalSeparator()))+_12);}else{_13=0;_e=_11;}if(((((((((_5)!=" ")&&((_5)!="")))&&((_c)!="eglx.lang.EFloat")))&&((_c)!="eglx.lang.ESmallfloat")))){var _15=0;if(((_13!=0))){_15=_13;}else{_15=((egl.eglx.rbd.StrLib["$inst"].characterLen(_e)+1));}var _f;_f=((_a-_b));var i=0;for(i=_15;((i<=_f));i=((i+1))){_e=((_5)+_e);}}if(_7){if(((_8)=="")){_8=this.util.getCurrencySymbol();}_e=((_8)+_e);}EzeLabel_eze_CaseLabel_0:if((egl.eglx.lang.EAny.ezeCast({eze$$value:_6,eze$$signature:egl.inferSignature(_6)},egl.eglx.lang.AnyEnumeration)==egl.eglx.lang.EAny.ezeCast({eze$$value:egl.checkNull(egl.eglx.ui.SignKind).leading,eze$$signature:"eglx.ui.SignKind"},egl.eglx.lang.AnyEnumeration))){if(_10){_e=(("-")+_e);}}else{if((egl.eglx.lang.EAny.ezeCast({eze$$value:_6,eze$$signature:egl.inferSignature(_6)},egl.eglx.lang.AnyEnumeration)==egl.eglx.lang.EAny.ezeCast({eze$$value:egl.checkNull(egl.eglx.ui.SignKind).trailing,eze$$signature:"eglx.ui.SignKind"},egl.eglx.lang.AnyEnumeration))){if(_10){_e=((_e)+"-");}else{_e=((_e)+"+");}}else{if((egl.eglx.lang.EAny.ezeCast({eze$$value:_6,eze$$signature:egl.inferSignature(_6)},egl.eglx.lang.AnyEnumeration)==egl.eglx.lang.EAny.ezeCast({eze$$value:egl.checkNull(egl.eglx.ui.SignKind).parens,eze$$signature:"eglx.ui.SignKind"},egl.eglx.lang.AnyEnumeration))){if(_10){_e=(((("(")+_e))+")");}}}}return _e;},"unformat":function(_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21){var _22;_22=0;_16=egl.checkNull(egl.eglx.rbd.StrLib["$inst"].clip_2_S_I(_16,_22));return this.unformatAndConvertToNumber(_16,_17,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21);},"unformatAndConvertToNumber":function(_23,_24,_25,_26,_27,_28,_29,_2a,_2b,_2c,_2d){if((((egl.eglx.lang.EString.notEquals(_25," "))&&(egl.eglx.lang.EString.notEquals(_25,""))))){while(((egl.eglx.rbd.StrLib["$inst"].indexOf_2_S_S(_23,egl.checkNull(_25))==1))){_23=egl.eglx.lang.EString.substring(_23,2,egl.eglx.rbd.StrLib["$inst"].characterLen(_23));}}if(((_23)=="")){return this.convertToNumber("0",_24,_2a,_2b,_2c,_2d);}if(_27){if(((_28)=="")){_28=this.util.getCurrencySymbol();}var _2e;_2e=egl.eglx.lang.EAny.ezeWrap(_23);this.removeSubstring(_2e,_28);_23=_2e.ezeUnbox();}if(_29){var _2f;_2f=this.util.getGroupingSeparator();EzeLabel_35:while(true){var _30;_30=egl.eglx.lang.EAny.ezeWrap(_23);var _31;_31=!(this.removeSubstring(_30,_2f));_23=_30.ezeUnbox();if(_31){break EzeLabel_35;}}}var _32;_32=egl.eglx.rbd.StrLib["$inst"].characterLen(_23);if(((_32!=0))){EzeLabel_eze_CaseLabel_1:if((egl.eglx.lang.EAny.ezeCast({eze$$value:_26,eze$$signature:egl.inferSignature(_26)},egl.eglx.lang.AnyEnumeration)==egl.eglx.lang.EAny.ezeCast({eze$$value:egl.checkNull(egl.eglx.ui.SignKind).parens,eze$$signature:"eglx.ui.SignKind"},egl.eglx.lang.AnyEnumeration))){if(((egl.eglx.lang.EString.substring(_23,1,1))=="(")){_23=(("-")+egl.eglx.lang.EString.substring(_23,2,_32));}if(((egl.eglx.lang.EString.substring(_23,_32,_32))==")")){if(((_32==1))){_23="";}else{_23=egl.eglx.lang.EString.substring(_23,1,((_32-1)));}}}else{if((egl.eglx.lang.EAny.ezeCast({eze$$value:_26,eze$$signature:egl.inferSignature(_26)},egl.eglx.lang.AnyEnumeration)==egl.eglx.lang.EAny.ezeCast({eze$$value:egl.checkNull(egl.eglx.ui.SignKind).trailing,eze$$signature:"eglx.ui.SignKind"},egl.eglx.lang.AnyEnumeration))){if(((egl.eglx.lang.EString.substring(_23,_32,_32))=="+")){if(((_32==1))){_23="";}else{_23=egl.eglx.lang.EString.substring(_23,1,((_32-1)));}}else{if(((egl.eglx.lang.EString.substring(_23,_32,_32))=="-")){if(((_32==1))){_23="";}else{_23=(("-")+egl.eglx.lang.EString.substring(_23,1,((_32-1))));}}}}else{if((egl.eglx.lang.EAny.ezeCast({eze$$value:_26,eze$$signature:egl.inferSignature(_26)},egl.eglx.lang.AnyEnumeration)==egl.eglx.lang.EAny.ezeCast({eze$$value:egl.checkNull(egl.eglx.ui.SignKind).leading,eze$$signature:"eglx.ui.SignKind"},egl.eglx.lang.AnyEnumeration))){if(((egl.eglx.lang.EString.substring(_23,1,1))=="+")){if(((_32==1))){_23="";}else{_23=egl.eglx.lang.EString.substring(_23,2,_32);}}}}}}var _33;_33=this.util.getDecimalSeparator();if(((_33)!=".")){var _34;_34=egl.eglx.rbd.StrLib["$inst"].indexOf_2_S_S(_23,_33);if(((_34!=0))){_23=((((egl.eglx.lang.EString.substring(_23,1,((_34-1))))+"."))+egl.eglx.lang.EString.substring(_23,((_34+1)),_32));}}if(((_23)=="")){_23="0";}return this.convertToNumber(_23,_24,_2a,_2b,_2c,_2d);},"removeSubstring":function(_35,_36){if(((_36)=="")){return false;}var _37;_37=egl.eglx.rbd.StrLib["$inst"].indexOf_2_S_S(egl.eglx.lang.EAny.unbox(_35),_36);if(((_37!=0))){var _38;_38=egl.eglx.rbd.StrLib["$inst"].characterLen(egl.eglx.lang.EAny.unbox(_35));var _39;_39=egl.eglx.rbd.StrLib["$inst"].characterLen(_36);if(((_37==1))){_35.ezeCopy(egl.eglx.lang.EString.substring(egl.eglx.lang.EAny.unbox(_35),((1+_39)),_38));}else{if(((((((_37+_39))-1))==_38))){_35.ezeCopy(egl.eglx.lang.EString.substring(egl.eglx.lang.EAny.unbox(_35),1,((_37-1))));}else{_35.ezeCopy(((egl.eglx.lang.EString.substring(egl.eglx.lang.EAny.unbox(_35),1,((_37-1))))+egl.eglx.lang.EString.substring(egl.eglx.lang.EAny.unbox(_35),((_37+_39)),_38)));}}return true;}return false;},"convertToNumber":function(_3a,_3b,_3c,_3d,_3e,_3f){var msg="";if(((((((_3d==0))&&((_3e)!="eglx.lang.EFloat")))&&((_3e)!="eglx.lang.ESmallfloat")))){if(((egl.eglx.lang.EString.substring(_3a,1,1))=="-")){if(!(egl.is(egl.eglx.lang.EString.substring(_3a,2,egl.eglx.rbd.StrLib["$inst"].characterLen(_3a)),"NUMERIC",egl.isnumeric))){var _40=null;var _41;_41=new egl.eglx.lang.AnyException();egl.checkNull(_41).message=egl.org.eclipse.edt.rui.mvc.InternalMessageLib["$inst"].getRuntimeMessage(_3f,this.PARSE_ERROR,[]);egl.checkNull(_41).messageID=this.PARSE_ERROR;_40=_41;throw _40;}}else{if(!(egl.is(_3a,"NUMERIC",egl.isnumeric))){var _42=null;var _41;_41=new egl.eglx.lang.AnyException();egl.checkNull(_41).message=egl.org.eclipse.edt.rui.mvc.InternalMessageLib["$inst"].getRuntimeMessage(_3f,this.PARSE_ERROR,[]);egl.checkNull(_41).messageID=this.PARSE_ERROR;_42=_41;throw _42;}}}var _43=false;try{EzeLabel_eze_CaseLabel_2:if(((_3e)=="eglx.lang.ESmallfloat")){var _44;_44=egl.eglx.lang.convert(egl.eglx.lang.EFloat32.fromEString,[_3a]);_43=((((_44==0))||((_44==1))));}else{if(((_3e)=="eglx.lang.EFloat")){var _44;_44=egl.eglx.lang.convert(egl.eglx.lang.EFloat64.fromEString,[_3a]);_43=((((_44==0))||((_44==1))));}else{if(((_3e)=="eglx.lang.EInt")){var _44;_44=egl.eglx.lang.convert(egl.eglx.lang.EInt32.fromEString,[_3a]);_43=((((_44==0))||((_44==1))));}else{if(((_3e)=="eglx.lang.ESmallint")){var _44;_44=egl.eglx.lang.convert(egl.eglx.lang.EInt16.fromEString,[_3a]);_43=((((_44==0))||((_44==1))));}else{if(((_3e)=="eglx.lang.EBigint")){var _44;_44=egl.eglx.lang.convert(egl.eglx.lang.EInt64.fromEString,[_3a]);_43=(((egl.eglx.lang.EInt64.equals(_44,egl.eglx.lang.convert(egl.eglx.lang.EInt64.fromEInt32,[0])))||(egl.eglx.lang.EInt64.equals(_44,egl.eglx.lang.convert(egl.eglx.lang.EInt64.fromEInt32,[1])))));}else{var _45;_45=egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[egl.eglx.lang.convert(egl.eglx.lang.EDecimal.fromEString,[_3a,egl.javascript.BigDecimal.prototype.NINES[8]]),"d;"]);if((((egl.eglx.lang.EAny.equals(_45,null))||!(this.util.decimalValueIsValid(_45,_3c,_3d))))){var _46=null;var _41;_41=new egl.eglx.lang.AnyException();egl.checkNull(_41).message=egl.org.eclipse.edt.rui.mvc.InternalMessageLib["$inst"].getRuntimeMessage(_3f,this.PARSE_ERROR,[]);egl.checkNull(_41).messageID=this.PARSE_ERROR;_46=_41;throw _46;}_43=(((egl.eglx.lang.EDecimal.equals(egl.eglx.lang.convert(egl.eglx.lang.EDecimal.fromEString,[_3a,egl.javascript.BigDecimal.prototype.NINES[8]]),egl.eglx.lang.convert(egl.eglx.lang.EDecimal.fromEInt32,[0,egl.javascript.BigDecimal.prototype.NINES[3]])))||(egl.eglx.lang.EDecimal.equals(egl.eglx.lang.convert(egl.eglx.lang.EDecimal.fromEString,[_3a,egl.javascript.BigDecimal.prototype.NINES[8]]),egl.eglx.lang.convert(egl.eglx.lang.EDecimal.fromEInt32,[1,egl.javascript.BigDecimal.prototype.NINES[3]])))));}}}}}}catch(eze$Temp72){if(!(eze$Temp72 instanceof egl.eglx.lang.AnyException)){eze$Temp72=egl.makeExceptionFromCaughtObject(eze$Temp72);}var _47=eze$Temp72;var _48=null;var _41;_41=new egl.eglx.lang.AnyException();egl.checkNull(_41).message=egl.org.eclipse.edt.rui.mvc.InternalMessageLib["$inst"].getRuntimeMessage(_3f,this.PARSE_ERROR,[]);egl.checkNull(_41).messageID=this.PARSE_ERROR;_48=_41;throw _48;}if(((_3b&&!(_43)))){var _49=null;var _41;_41=new egl.eglx.lang.AnyException();egl.checkNull(_41).message=egl.org.eclipse.edt.rui.mvc.InternalMessageLib["$inst"].getRuntimeMessage(_3f,this.BOOLEAN_ERROR,[]);egl.checkNull(_41).messageID=this.BOOLEAN_ERROR;_49=_41;throw _49;}return _3a;},"getInternalDateFormat":function(_4a){EzeLabel_eze_CaseLabel_3:if(((((_4a==5))||((_4a==7))))){var _4b=null;var _4c;_4c=new egl.eglx.lang.AnyException();egl.checkNull(_4c).message="Unsupported dateformat length";_4b=_4c;throw _4b;}else{if(((_4a==6))){return "yyMMdd";}else{return "yyyyMMdd";}}},"getUtil":function(){return util;},"setUtil":function(_4d){this.util=_4d;},"getPARSE_ERROR":function(){return PARSE_ERROR;},"getEDIT_INVALID_DATE_TIME_ERR":function(){return EDIT_INVALID_DATE_TIME_ERR;},"getBOOLEAN_ERROR":function(){return BOOLEAN_ERROR;},"toString":function(){return "[InternalNumericFormatter]";}});});