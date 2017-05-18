((self) => {
	self.init = function() {
		const renderer	= new renderHandler();
		const drawer	= new drawingHandler($('#drawingField'));
		const eventer	= new eventHandler(drawer);
		const audio	= new musicPlauerHandler();

	};

})( this.kernel = {} );
/*============================================================================================*
****Enter point**********************************************************************************
**============================================================================================*/
$(function() {
	kernel.init();
});