var container_down={
	$container:null,
	$li:null,
	init(){
		this.$li=$('.nav-item');
		this.$container=$('.container');
		// $li.on('mouseenter',function (e) {
		// 	$container.addClass('container-active');
		// })
		// $li.on('mouseout',function (e) {
		// 	$container.addClass('container-active');
		// })

		this.$li.hover(	
			e=> {
				this.$container.addClass('container-active');
			},
			e=> {
				this.$container.removeClass('container-active');
			}
		)

	}
}
container_down.init();
 