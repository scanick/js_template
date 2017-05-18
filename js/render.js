class renderHandler {
	constructor() {
		this.preload = $('#preload');
		this.preload.css('position', 'absolute');
		this.preload.css('height', '30');
		this.preload.css('width', '30');
		this.preload.css('backgroundColor', 'green');
		this.preload.css('top', '50%');
		this.preload.css('left', '50%');
		this.preload.css('z-index', 5);
		this.preload.addClass('wheel');
		this.preload.delay(2000).fadeOut('slow');

		this.menu = $('#mainNavigation');

		this.canva = $('#drawingField');
		this.canva.css('z-index', -5);
		//Тип устройства
		console.log(navigator.userAgent);
	}
}