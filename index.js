const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f05868062msh8d5b131431edda5p14e716jsn4e745ec58bc5',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?info=mini_info&limit=10&page=1&titleType=movie', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
const carouselSlide= document.querySelector('carousel-slide');
const carouselImages= document.querySelector('carousel-slide img')

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1 ;
const Size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translatex ('+ (-size * counter) + 'px)'


carouselSlide.addEventListener('Transitionend',()=>{

} 
)