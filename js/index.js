var container_down={
	$container:null,
	$li:null,
	$ul:null,
	init(){
		this.$li=$('.nav-item');
		this.$container=$('.container');
		this.$ul=$('.container_item');
		this.$li.on("mouseenter",e=>{
    		e.preventDefault();
    		this.$container.addClass('in');
    		this.$ul.addClass('collapsing');
    	});
    	this.$li.on("mouseleave",e=>{
    		e.preventDefault();
    		this.$container.removeClass('in');
    		this.$ul.removeClass('collapsing');
    	});
	 
	}
}
container_down.init();

 