var slider={
	MOVE:0, 
	WAIT:5000,
	$button:null,
	$left:null,
	$right:null,
 	autoChange() {
 		this.$button=$(".banner_button");
 		this.$left=$(".slider_button_left");
 		this.$right=$(".slider_button_right");
 		this.timer=setInterval(()=>{ 
		    if(this.MOVE < $(".banner_slider li").length-1){ 
			    this.MOVE ++; 
			}else{ 
			    this.MOVE = 0;
				}
	    	this.change(this.MOVE);
    	},this.WAIT);
	 	this.$button.on("click","li",e=>{
	      	if(!$(e.target).hasClass("banner_button_active")){
	        //停止一次性定时器
	        clearTimeout(this.timer); 
	        this.timer=null;
	        // console.log(this.timer);
	        // $(".banner_slider li").stop(true);
	        // var start=
	        //   this.$button.children(".banner_button_active").index(".banner_button li");
	          // console.log(start);
	        //获得当前li的内容保存在end
	        var end=$(e.target).index(".banner_button li");
	        // console.log(end);
	        //调用move,传入end-start
	        this.MOVE=end;
	        this.change(this.MOVE);
      		}
		});
		this.$right.on("click","a",e=>{
	      	if(!$(e.target).hasClass("banner_button_active")){
	        clearTimeout(this.timer); 
	        this.timer=null;
	        var start=
	        this.$button.children(".banner_button_active").index(".banner_button li");
	        this.MOVE=start+1;
	        if (this.MOVE===5) {
	        	this.MOVE=0;
	        }
	        this.change(this.MOVE);
      		}
		});
		this.$left.on("click","a",e=>{
	      	if(!$(e.target).hasClass("banner_button_active")){
	        clearTimeout(this.timer); 
	        this.timer=null;
	        var start=
	        this.$button.children(".banner_button_active").index(".banner_button li");
	        this.MOVE=start-1;
	        if (this.MOVE===5) {
	        	this.MOVE=0;
	        }
	        this.change(this.MOVE);
      		}
		});
	},
 	change(num){ 
	    $(".banner_slider").find("li").removeClass(".banner_slider").hide().eq(num).fadeIn(1000).addClass(".banner_slider");
	    $(".banner_button").find("li").removeClass("banner_button_active").eq(num).addClass("banner_button_active");
  	},
}
slider.autoChange();


