var container_down={
	$container:null,
	$li:null,
	$ul:null,
	timer:null,
	timer2:null,
	height:null,
	init(){
		this.$li=$('.nav-item');
		this.$container=$('.container');
		this.$ul=$('.container_item');
		this.$li.on("mouseenter",e=>{
		 
    		// this.$container.addClass('in');
    		// this.$ul.addClass('collapsing');
			// $(e.target).find('.container').addClass('in');
			$(e.target).parent().find('.container_item').addClass('collapsing');
			this.height=0;
			this.timer=setInterval(()=> {
				$(e.target).parent().find('.container_item')
				.css({
					"height":this.height
				})
				this.height+=10;
				if (this.height>=210) {
					this.height=210;
					clearTimeout(this.timer); 
	        		this.timer=null;
				}
			},10);
    	});
    	this.$li.on("mouseleave",e=>{
    		 
    		e.preventDefault();
    		// this.$container.removeClass('in');
    		this.height=210;
    		this.timer2=setInterval(()=> {
				$('.container_item')
				.css({
					"height":this.height
				})
				this.height-=10;
				if (this.height<=0) {
					this.height=0;
					clearTimeout(this.timer2); 
	        		this.timer2=null;
	        		this.$ul.removeClass('collapsing');
				}
			},10);
    	});
	 
	}
}
container_down.init();
 