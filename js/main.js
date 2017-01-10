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
	    $(".banner_slider").find("li").hide().removeClass(".banner_slider").eq(num).fadeIn(500).addClass(".banner_slider");
	    $(".banner_button").find("li").removeClass("banner_button_active").eq(num).addClass("banner_button_active");
  	},
}
fade_slider.autoChange();

// 导航侧边弹出显示
var nav_pump={
	$li:null,
	$item:null,
	// $n:null,
	int(){
		$(".fuck").on('mouseenter',e=> {
			var n=$(e.target).parent().index();
			console.log(n);
 			$(".slider_button_left a").css("width",0);
			$(".fuck").eq(n).children("div").addClass("active");//去掉banner左边的按钮  简直蛋疼
			$(".shopping_nav_list>li").eq(n).addClass('shopping_nav_list_hover');
		})
		$(".fuck").on('mouseleave',e=> {
			var n=$(e.target).parent().index();
			$(".slider_button_left a").css("width",40);
			$(".shopping_nav_item").removeClass("active");
			$(".shopping_nav_list>li").removeClass('shopping_nav_list_hover');
		})
	},
	 

}
nav_pump.int();

var slider1={
	$length:null,
	$left:null,
	$right:null,
	n:0,
	int(){
		this.point();
		this.change();
	},
	change1(m){
		this.n=m-1;
		console.log(this.n);
	},
	change(m){
		console.log(this.n);
		this.$length=parseFloat($(".contant-item_slider").css("width"));
		this.$left=parseFloat($(".contant-item_slider>ul").css("margin-left"));
		this.$rt=$("#ddd1");
		this.$ul=$("#eee1");
		this.$rt.on("click",e=>{ 
				this.n++;
			    this.$ul.css("margin-left",this.$left-this.$length*(this.n));
			    if (this.n>2) {
			      this.n=2;
			      this.$ul.css("margin-left",this.$left-this.$length*2);
			    }
			    this.$point=$(".contant-item-pager1");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager1:eq(${this.n})`).addClass('pager-active');
			});
			this.$lt=$("#ccc1"); 
			this.$lt.on("click",e=>{
			    this.n--;
			    this.$ul.css("margin-left",this.$left-this.$length*this.n);
			    if (this.n<0) {
			        this.n=0;
			        this.$ul.css("margin-left",0);
			    }
			    this.$point=$(".contant-item-pager1");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager1:eq(${this.n})`).addClass('pager-active');
			});
	},
 	point(){
 		this.$point=$(".contant-item-pager1");
 		this.$point.on("click",'.dot',e=>{
 			var end=Number($(e.target).html());
  			this.$point.removeClass('pager-active');
 			$(e.target).parent().addClass('pager-active');
 			this.$ul.css("margin-left",-this.$length*(end-1));
 			this.change1(end);
		});
 	}
}
slider1.int();

var hover1={
	$li:null,
	$button:null,
	in(){
		this.$li=$(".contant-item>.bbb1");
		this.$button=$(".contant-item_slider_button.fff1");
			this.$li.hover(	
				e=> {
					this.$button.stop().animate(
					{opacity:1},200)
				},
				e=> {
					this.$button.stop().animate(
					{opacity:0},200)
				}
			)
	}, 
}
hover1.in();

var slider2={
	$length:null,
	$left:null,
	$right:null,
	n:0,
	int(){
		this.point();
		this.change();
	},
	change1(m){
		this.n=m-1;
		console.log(this.n);
	},
	change(m){
		console.log(this.n);
		this.$length=parseFloat($(".contant-item_slider").css("width"));
		this.$left=parseFloat($(".contant-item_slider>ul").css("margin-left"));
		this.$rt=$("#ddd2");
		this.$ul=$("#eee2");
		this.$rt.on("click",e=>{ 
				this.n++;
			    this.$ul.css("margin-left",this.$left-this.$length*(this.n));
			    if (this.n>2) {
			      this.n=2;
			      this.$ul.css("margin-left",this.$left-this.$length*2);
			    }
			    this.$point=$(".contant-item-pager2");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager2:eq(${this.n})`).addClass('pager-active');
			});
			this.$lt=$("#ccc2"); 
			this.$lt.on("click",e=>{
			    this.n--;
			    this.$ul.css("margin-left",this.$left-this.$length*this.n);
			    if (this.n<0) {
			        this.n=0;
			        this.$ul.css("margin-left",0);
			    }
			    this.$point=$(".contant-item-pager2");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager2:eq(${this.n})`).addClass('pager-active');
			});
	},
 	point(){
 		this.$point=$(".contant-item-pager2");
 		this.$point.on("click",'.dot',e=>{
 			var end=Number($(e.target).html());
  			this.$point.removeClass('pager-active');
 			$(e.target).parent().addClass('pager-active');
 			this.$ul.css("margin-left",-this.$length*(end-1));
 			this.change1(end);
		});
 	}
}
slider2.int();

var hover2={
	$li:null,
	$button:null,
	in(){
		this.$li=$(".contant-item>.bbb2");
		this.$button=$(".contant-item_slider_button.fff2");
			this.$li.hover(	
				e=> {
					this.$button.stop().animate(
					{opacity:1},200)
				},
				e=> {
					this.$button.stop().animate(
					{opacity:0},200)
				}
			)
	}, 
}
hover2.in();
// $(".contant-item>li")


// 明星商品的轮播
var star_product_slider={
	//$ul:null,
	// button:null,
	$left:null,
	$right:null,
	timer:null,
	WAIT:5000,
	MOVE:0,
	autoChange(){
		
		this.$right=$('.arrow_button a:first-child');
		this.$left=$('.arrow_button a:last-child');
		this.timer=setInterval(()=>{ 
		    if(this.MOVE <1){ 
			    this.MOVE ++; 
			}else{ 
			    this.MOVE = 0;
			}
	    	this.change(this.MOVE);
	    	// console.log(this);
    	},this.WAIT);
    	this.$right.unbind("click").on("click",e=>{
    		e.preventDefault();
    			clearTimeout(this.timer);
    			this.timer=null;
    			this.MOVE=1;
		       	this.change(this.MOVE);
		       	this.autoChange();
		       	// console.log("R"+this.MOVE);

    	});
    	this.$left.unbind("click").on("click",e=>{
    		e.preventDefault();
    		
    			clearTimeout(this.timer);
    			this.timer=null;
    			this.MOVE=0;
		       	this.change(this.MOVE);
		       	this.autoChange();
		       	// console.log("L"+this.MOVE);

    	});
	},
	change(num){
		if (num===1) {
			$('.star_product>ul').addClass('star_product_active');
		}else{
			$('.star_product>ul').removeClass('star_product_active');
		}
	},
}
star_product_slider.autoChange();

//为您推荐的轮播
var recommend_product_slider={
	//$ul:null,
	// button:null,
	$left:null,
	$right:null,
	timer:null,
	WAIT:5000,
	MOVE:0,
	autoChange(){
		
		this.$right=$('.arrow_button2 a:first-child');
		this.$left=$('.arrow_button2 a:last-child');
		// this.timer=setInterval(()=>{ 
		//     if(this.MOVE <5){ 
		// 	    this.MOVE ++; 
		// 	}else{ 
		// 	    this.MOVE = 0;
		// 	}
	 //    	this.change(this.MOVE);
	 //    	// console.log(this);
  //   	},this.WAIT);
    	this.$right.unbind("click").on("click",e=>{
    		e.preventDefault();
    			// clearTimeout(this.timer);
    			// this.timer=null;
    			this.MOVE++;
    			if (this.MOVE>5) {
    				this.MOVE=5;
    				return;
    			}
		       	this.change1(this.MOVE);
		       	this.autoChange();
		        

    	});
    	this.$left.unbind("click").on("click",e=>{
    		e.preventDefault();
    		
    			clearTimeout(this.timer);
    			this.timer=null;
    			this.MOVE--;
    			if (this.MOVE<0) {
    				this.MOVE=0;
    				return;
    			}
		       	this.change2(this.MOVE);
		       	this.autoChange();
		       

    	});
	},
	change1(num){
		console.log(num);
			$('#recommend').removeClass('recommend_product_slider'+(num-1)).addClass('recommend_product_slider'+num);
	},
	change2(num){
		console.log(num);
			$('#recommend').removeClass('recommend_product_slider'+(num+1)).addClass('recommend_product_slider'+num);
	},
}
recommend_product_slider.autoChange();