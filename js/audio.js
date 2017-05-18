class musicPlauerHandler {
	constructor() {
		this.audioPlayer = $('#audioPlayer');
		this.buttonPlayPause = $('#buttonPlayPause')

		this.audio = $('audio')[0];
		this.audio.src='audio/Fleetwood Mac – The Chain.mp3';
		this.audio.load();
		//this.audio.pause();
		//this.audio.play();
		this.addEvent();
	}
	addEvent(){
		this.buttonPlayPause.click(()=>{this.playPause()});
	}
	playPause() {
		this.buttonPlayPause.toggleClass('buttonPlay buttonPause');
				
		if(this.buttonPlayPause.attr('class') == 'buttonPlay'){
			this.audio.pause();
			$('svg #path3699').attr('class', '');
			$('svg #path3711').attr('class', '');
			console.log("pause");
		}
		else {
			this.audio.play();
			$('svg #path3699').attr('class', 'wheel');
			$('svg #path3711').attr('class', 'wheel');
			console.log("play");
		}
		/*this.audio.play();*/
	}
	pause() {
		this.audio.pause();
	}
}