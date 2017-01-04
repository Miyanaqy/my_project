var fade_slider={
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
			e.preventDefault();
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
			e.preventDefault();
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
fade_slider.autoChange();



var slider={
  $rt:null,
  $lt:null,
  $ul:null,
  $length:null,
  $left:null,
  n:0,
  change(){
    this.$length=parseFloat($(".contant-item_slider").css("width"));
    this.$left=parseFloat($(".contant-item_slider>ul").css("margin-left"));
    this.$rt=$(".contant-item_slider_button_right");
    this.$ul=$(".contant-item_slider>ul");
    this.$rt.on("click",e=>{
        this.n++;
        this.$ul.css("margin-left",this.$left-this.$length*this.n);
         if (this.n>2) {
          this.n=2;
          this.$ul.css("margin-left",this.$left-this.$length*2);
         }
        // console.log(this.n);
    });
    this.$lt=$(".contant-item_slider_button_left"); 
    this.$lt.on("click",e=>{
        this.n--;
        this.$ul.css("margin-left",this.$left-this.$length*this.n);
        if (this.n<0) {
            this.n=0;
            this.$ul.css("margin-left",this.$left);
        }
        // console.log(this.n);
    });
    
  }
}
slider.change();


var hover={
	$li:null,
	$button:null,
	n:null,
	in(){
		var w=0;
		this.$li=$(".contant-item>li");
		$('.contant-item>li').on('mouseover',function(){
			this.n= $(this).index();
			console.log(this.n);
			w=this.n;
		})
		
		this.MOVE(w);
	},

	MOVE(n){
		console.log(n);
		this.$button=$(".contant-item_slider_button");
 		$(".contant-item>li:eq("+n+")").hover(	
				e=> {
					this.$button.stop().animate(
					{opacity:1},200)
				},
				e=> {
					this.$button.stop().animate(
					{opacity:0},200)
				}

		)
	}
}
hover.in();