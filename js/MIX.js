
// window.onscroll = function() { 
// 	console.log(window.scrollY); 
// } 
// 真是个智障直接调用就好心疼1s

// 滚屏添加class
var scrollAddClass={
	scroll:null,
	init(){
		$(window).on("scroll",e=>{
			scroll=window.scrollY
			console.log(scroll)
			if (scroll>=140) {
				$('.site_info').addClass('ss')
			}else{
				$('.site_info').removeClass('ss')
			}
		})

	}
}
scrollAddClass.init()