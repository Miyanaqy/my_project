
// window.onscroll = function() { 
// 	console.log(window.scrollY); 
// } 
// 真是个智障直接调用就好心疼1s

// 滚屏添加class
var scrollAddClass={
	scroll:null,
	$container:null,
	init(){
		// this.$container=$(".nav-bar>.container")
		$(window).on("scroll",e=>{
			this.scroll=window.scrollY
			// console.log(this.scroll)
			if (this.scroll>=140) {
				$(".nav-bar.fix-bar").addClass('active')
			}else{
				$(".nav-bar.fix-bar").removeClass('active')
			}
		})
	}
}
scrollAddClass.init()

