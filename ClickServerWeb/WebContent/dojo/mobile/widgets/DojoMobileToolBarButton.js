////////////////////////////////////////////////////////////////////////////////
// This sample is provided AS IS.
// Permission to use, copy and modify this software for any purpose and
// without fee is hereby granted. provided that the name of IBM not be used in
// advertising or publicity pertaining to distribution of the software without
// specific written permission.
//
// IBM DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SAMPLE, INCLUDING ALL
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL IBM
// BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY
// DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER
// IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING
// OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SAMPLE.
////////////////////////////////////////////////////////////////////////////////

egl.defineWidget(
	'dojo.mobile.widgets', 'DojoMobileToolBarButton',
	'dojo.mobile.widgets', 'DojoMobileBase',
	'div',
	{
		"constructor" : function() {
			var _this = this;
			_this.options = {};
			require(
			   [ 
			     "dojo/mobile/utility/Synchronor",
			     "dojox/mobile/ToolBarButton"
			   ], function( synchronor ){
					_this.synchronor = synchronor;
					_this.renderWhenDojoIsDoneLoading();
			  }
			);			
		},
		"createDojoWidget" : function(parent) {
			var _this = this;
			
			// work around copyAttributes fix
			_this.dojoWidget = { "domNode" : parent };	
			
			_this.synchronor.wait( 
				[_this._actionView],
				"SYN_READY",
				function(){
					if( _this._actionView )
						_this.options.moveTo = _this._actionView.dojoWidget.id;
					
					_this.dojoWidget = new dojox.mobile.ToolBarButton(
						_this.options,
						parent 
					);
					_this.containerWidget = _this.dojoWidget;
					
					var defaultCallBack = _this.dojoWidget.onClick ;
					_this.dojoWidget.onClick = function( value ) {
						if( typeof  defaultCallBack === "function" )
							defaultCallBack.apply( _this.dojoWidget, arguments );
						_this.handleEvent( _this.getOnClick(), "onClick" ); 
					};
					
					_this.synchronor.trigger( _this, "SYN_READY" );
					
					_this.dojoWidget.startup();					
				}
			);
	
		},
		"getTransition" : function(){
			return this.options.transition || "";
		},
		"setTransition" : function(v){
			this.options.transition = v;
		},
		"getTransitionDir" : function(){
			return this.options.transitionDir || 1;
		},
		"setTransitionDir" : function(v){
			this.options.transitionDir = v;
		},
		"getIcon" : function(){
			return this.options.icon || "";
		},
		"setIcon" : function(v){
			this.options.icon = v;
		},
		"getActionView" : function(){
			return this._actionView || null;
		},
		"setActionView" : function(v){
			this._actionView = v;
		},
		"getLabelString" : function(){
			return this.options.label || "";
		},
		"setLabelString" : function(v){
			this.options.label = v;
		},
		"getSelected" : function(){
			return this.options.selected || false;
		},
		"setSelected" : function(v){
			this.options.selected  = v;
		},
		"getClassName" : function(){
			return this.options.class;
		},
		"setClassName" : function(v){
			this.options.class = v;
		}
	});