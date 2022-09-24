// joke api 
const setUpLine = document.getElementById('setup')
const responseLine = document.getElementById('punch')

// love api 
const percentage = document.getElementById('percentage');
const result = document.getElementById('result');

// funny rap lyrics 
const lyricResult = document.getElementById('lyric');
const artistResult = document.getElementById('artist')


// random joke api call
const jokeBtn = document.getElementById('btn-one');
jokeBtn.addEventListener('click', jokesApi)


function jokesApi () {
	
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00e3db074cmsh859ff928fa0e703p114d09jsn7ee010402a05',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};
	fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
		.then(response => response.json())
		.then(response => {
			const setUp = response.body[0].setup;
			const punch = response.body[0].punchline;

			setUpLine.textContent = setUp;
			responseLine.textContent = punch;

			setUpLine.setAttribute('id','set-up-line')
			responseLine.setAttribute('id','punch-line')

        return response;
    })
}

const loveBtn = document.getElementById('btn-two')
loveBtn.addEventListener('click', loveApi)

function loveApi () {
const yName = document.getElementById('userName').value;
const lName = document.getElementById('loverName').value;


// get love compatibility api 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00e3db074cmsh859ff928fa0e703p114d09jsn7ee010402a05',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

	fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${yName}&fname=${lName}`, options)
		.then(response => response.json())
		.then(response =>  {
			const getPercentage = response.percentage;
			const getResults = response.result;

			percentage.textContent =`Success rate:  ${getPercentage}%`;
			result.textContent = `${getResults}`;

			percentage.setAttribute('id' , 'percentage');
			result.setAttribute('id' , 'result');
		return response;

	})
}

// fun fact api 
const factBtn = document.getElementById('btn-three')
factBtn.addEventListener('click', getLyrics)


function getLyrics () {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '00e3db074cmsh859ff928fa0e703p114d09jsn7ee010402a05',
			'X-RapidAPI-Host': 'badrapapi.p.rapidapi.com'
		}
	};
	
	fetch('https://badrapapi.p.rapidapi.com/api', options)
		.then(response => response.json())
		.then(response => {
			const lyric = response.lyrics;
			const artist = response.artist;
			const song = response.song;

			lyricResult.textContent = lyric;
			artistResult.textContent = `${artist}: ${song}`;

			lyricResult.setAttribute('id', 'lyric-result');
			artistResult.setAttribute('id', 'artist-result');
		return response;

		})
}

const someBtn = document.getElementById('btn-four');
someBtn.addEventListener('click', someAPi)

function someAPi () {

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '00e3db074cmsh859ff928fa0e703p114d09jsn7ee010402a05',
			'X-RapidAPI-Host': 'book-of-answers.p.rapidapi.com'
		}
	};
	
	fetch('https://book-of-answers.p.rapidapi.com/no', options)
		.then(response => response.json())
		.then(response =>  {
			console.log(response)
		})
}