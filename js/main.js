var slider={
	MOVE:0, 
	WAIT:5000,
 	autoChange() {
 		setInterval(()=>{ 
	    if(this.MOVE < $(".banner_slider li").length-1){ 
		    this.MOVE ++; 
		}else{ 
		    this.MOVE = 0;
			}
    	this.change(this.MOVE); 
 	 },this.WAIT)
 	},
 	change(num){ 
	    $(".banner_slider").find("li").removeClass(".banner_slider").hide().eq(num).fadeIn(500).addClass(".banner_slider");
  	},
}
slider.autoChange();