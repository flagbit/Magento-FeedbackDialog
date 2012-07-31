if (!window.Flagbit)
    var Flagbit = new Object();
    
Flagbit.FeedbackDialog = Class.create();
Flagbit.FeedbackDialog.prototype = {
	closeBtn:null,
	openBtn:null,
	fadeDuration:0.2,
	showAnim:false,
	hideAnim:false,
	
	/**
	 * Initialize class
	 *
	 * @container: html-parent-container
	 */
	initialize: function(container, overlay) {
		this.container = $$(container).first();
		this.overlay = $$(overlay).first();
		
		this.overlay.hide();
		
		this.openBtn = this.container.select('.open-banner').first();
		this.closeBtn = this.container.select('.close-banner').first();
		
		this.openBtn.setStyle({
			width : '59px'
		});
		this.closeBtn.setStyle({
			width : '0px'
		});
		
		this.openBtn.observe('click', function(event) {
			if ( !this.showAnim ) {
				this.showAnim = true;
				this.show();
			}
		}.bindAsEventListener(this));

		this.closeBtn.observe('click', function(event) {
			if ( !this.hideAnim ) {
				this.hideAnim = true;
				this.hide();
			}
		}.bindAsEventListener(this));
		
		this.overlay.observe('click', function(event) {
			if ( !this.hideAnim ) {
				this.hideAnim = true;
				this.hide();
			}
		}.bindAsEventListener(this));
		
		Event.observe(window, "resize", function() {
		    this.resizeOverlay();
		}.bindAsEventListener(this));
	},
	
	resizeOverlay: function() {
		var arrPageSizes = ___getPageSize();

		this.overlay.setStyle({
			width : arrPageSizes[0] + 'px',
			height: arrPageSizes[1] + 'px'
		});
	},
	
	show: function() {
		this.resizeOverlay();
		
		this.overlay.show();
		
		new Effect.Move(this.container, {x:388, y:0, duration:.7, mode:'relative',
			afterFinish: function() {
				this.showAnim = false;
				
				this.openBtn.setStyle({
					width : '0px'
				});
				this.closeBtn.setStyle({
					width : '59px'
				});
			}.bind(this)
		});
	},
	
	hide: function() {
		new Effect.Move(this.container, {x:-388, y:0, duration:.7, mode:'relative',
			afterFinish: function() {
				this.overlay.hide();
				this.hideAnim = false;
				
				this.openBtn.setStyle({
					width : '59px'
				});
				this.closeBtn.setStyle({
					width : '0px'
				});
			}.bind(this)
		});
	}
}


/**
 / THIRD FUNCTION
 * getPageSize() by quirksmode.com
 *
 * @return Array Return an array with page width, height and window width, height
 */
function ___getPageSize() {
	var xScroll, yScroll;
	if (window.innerHeight && window.scrollMaxY) {	
		xScroll = window.innerWidth + window.scrollMaxX;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}
	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		if(document.documentElement.clientWidth){
			windowWidth = document.documentElement.clientWidth; 
		} else {
			windowWidth = self.innerWidth;
		}
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}	
	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight){
		pageHeight = windowHeight;
	} else { 
		pageHeight = yScroll;
	}
	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth){	
		pageWidth = xScroll;		
	} else {
		pageWidth = windowWidth;
	}
	arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
	return arrayPageSize;
};