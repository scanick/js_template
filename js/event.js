class eventHandler {
	constructor(drawer) {
		addEventListener("keydown", function(event) {
			switch(event.keyCode){
				case 32:  console.log(32);/*to do*/ break;//key space
				case 37:  console.log(37);/*to do*/ break;//key left
				case 38:  console.log(38);/*to do*/ break;//key up
				case 39:  console.log(39);/*to do*/ break;//key right
				case 40:  console.log(40);/*to do*/ break;//key down
				default: break;
			}
		});
		window.addEventListener('resize', function() {
			drawer.resize();
			console.log("resize!");
		});
		
	}
}