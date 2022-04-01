document.addEventListener('DOMContentLoaded', () =>{
	window.addEventListener('scroll', function(event){
		let scroll = this.pageYOffset;
		let windowW = this.innerWidth;
		let contentH = document.querySelector('.content').clientHeight;
		let parallaxH = document.querySelector('.parallax').clientHeight;
		let percentContent = scroll/contentH * 100;
		let percentParallax = scroll/parallaxH * 100;
		let opacity = 1 - 1 / 100 * percentParallax;

		let zoom_1 = 1 + (windowW/10000 * percentParallax)
		document.querySelector('.parallax__fog').style.cssText = `
		transform: scale(${zoom_1}); 
		opacity: ${opacity}; `

		let zoom_2 = 1+(windowW / 5000000 * parallaxH)
		document.querySelector('.parallax__montain_1').style.cssText = `
		transform: scale(${zoom_2}); `

		let itemRight = windowW / 2000 * percentParallax;
		let zoom_3 = 1 + (windowW * 0.000005 * percentParallax);
		document.querySelector('.parallax__montain_2').style.cssText = `
		transform: translate3d(${itemRight}px,0,0) scale(${zoom_3}); `;

		let itemLeft = windowW / 1500 * percentParallax;
		let zoom_4 = 1 + (windowW * 0.00001 * percentParallax);
		document.querySelector('.parallax__montain_3').style.cssText = `
		transform: translate3d(${itemLeft}px,0,0) scale(${zoom_4}); `;

	})
})