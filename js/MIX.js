
// fullPage.js Start
$(document).ready(function() {
	$('#fullpage').fullpage({
		animateAnchor:false,
		navigation: true,
		anchors:['page1', 'page2', 'page3', 'page4','page5'],
		afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using anchorLink
			if(anchorLink == 'page1'){
				$(".nav-bar.fix-bar").removeClass('active')

			}else{
				$(".nav-bar.fix-bar").addClass('active')
			}
			if(anchorLink == 'page2'){
				$(".section_banner").addClass('in')
				$(".section_banner h1").addClass('active')
				$(".section_banner h2").addClass('active')
				$(".section_banner ul").addClass('active')
				$("#fullpage").addClass('active')
			}
			if(anchorLink == 'page3'){
				$(".section_screen h2").addClass('active')
				$(".section_screen p").addClass('active')
			}
			if(anchorLink == 'page2'||anchorLink == 'page4'){
				$(".section_screen p").removeClass('active')
			}
			if(anchorLink == 'page4'){
				v1.play()
			}
        },
		//离开
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);

			//after leaving section 2
			if(index == 1 && direction =='down'){
				$(".nav-bar.fix-bar").addClass('active')
				$("#fullpage").addClass('active')
			}
			else if(index == 2 && direction == 'up'){
				$(".nav-bar.fix-bar").removeClass('active')
				$("#fullpage").removeClass('active')
			}
			if(index == 2 && direction =='down') {
				$(".section_banner h1").removeClass('active')
				$(".section_banner h2").removeClass('active')
				$(".section_banner ul").removeClass('active')
			}
			if(index == 3 ){

			}
		}

	});
	//$(window).on("scroll",e=>{
	//		console.log(window.scrollY)
			//if (this.scroll>=140) {
			//	$(".nav-bar.fix-bar").addClass('active')
			//}else{
			//	$(".nav-bar.fix-bar").removeClass('active')
			//}
		//})
});

// fullPage.js End


// window.onscroll = function() {
// 	console.log(window.scrollY);
// }
// 真是个智障直接调用就好心疼1s

// 滚屏添加class
//var scrollAddClass={
//	scroll:null,
//	$container:null,
//	init(){
//	// this.$container=$(".nav-bar>.container")
//	$(window).on("scroll",e=>{
//			this.scroll=window.scrollY
//			console.log(this.scroll)
//			//if (this.scroll>=140) {
//			//	$(".nav-bar.fix-bar").addClass('active')
//			//}else{
//			//	$(".nav-bar.fix-bar").removeClass('active')
//			//}
//		})
//	}
//}
//scrollAddClass.init()