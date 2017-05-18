class drawingHandler {
	constructor(canvaItem) {
		this.canva = canvaItem[0];
		this.width = this.canva.width = window.innerWidth;
		this.height = this.canva.height = window.innerHeight;
		/*this.scale = Math.floor( Math.max( window.innerWidth, window.innerHeight ) / 20 );*/
		this.canva.style.position = 'absolute';
		this.canva.style.top = '0';
		this.canva.style.left = '0';
		
		this.ctx = this.canva.getContext('2d');
		/*this.imgData = this.ctx.getImageData( 0, 0, this.width, this.height ).data;
		console.log(this.imgData);*/
		/*red=imgData.data[0];
		green=imgData.data[1];
		blue=imgData.data[2];
		alpha=imgData.data[3];*/
		this.ctx.font="26px";
		this.clear();
	}
	clear() {
		this.ctx.clearRect(0, 0, this.canva.width, this.canva.height);
		this.ctx.fillStyle = '#ADD8E6'; // меняем цвет
		this.ctx.fillRect(0, 0, this.canva.width, this.canva.height);//Закрашиваем область
		
		this.ctx.fill();
	};
	resize() {
		this.canva.width = window.innerWidth;
		this.canva.height = window.innerHeight;
		this.clear();
	};

	rgb2hex(rgb) {
		let hex = rgb.map( (value) => {
			let hexNum = value.toString(16).toUpperCase();
			// left pad 0
			hexNum = hexNum.length < 2 ? '0' + hexNum : hexNum;
			return hexNum;
		});
		return '#' + hex.join('');
	}
}