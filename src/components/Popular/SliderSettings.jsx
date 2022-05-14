const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 2,
	initialSlide: 0,
	autoplay: true,
	speed: 5000,
	autoplaySpeed: 5000,

	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				dots: true,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				cssEase: 'linear',
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				dots: true,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				cssEase: 'linear',
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: true,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				cssEase: 'linear',
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

export default sliderSettings;
