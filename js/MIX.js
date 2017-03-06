
// window.onscroll = function() { 
// 	console.log(window.scrollY); 
// } 
// 真是个智障直接调用就好心疼1s

// 滚屏添加class
// var scrollAddClass={
// 	scroll:null,
// 	$container:null,
// 	init(){
// 		// this.$container=$(".nav-bar>.container")
// 		$(window).on("scroll",e=>{
// 			this.scroll=window.scrollY
// 			// console.log(this.scroll)
// 			if (this.scroll>=140) {
// 				$(".nav-bar.fix-bar").addClass('active')
// 			}else{
// 				$(".nav-bar.fix-bar").removeClass('active')
// 			}
// 		})
// 	}
// }
// scrollAddClass.init()






// fullPage.js Start
$(document).ready(function() {
	$('#fullpage').fullpage({
		animateAnchor:false,
		navigation: true,
		anchors:['page1', 'page2', 'page3', 'page4','page5'],
		afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using anchorLink
            if(anchorLink == 'page3'){
            	$('h2').addClass('fuck')
            }
        }
	});

});

// fullPage.js End