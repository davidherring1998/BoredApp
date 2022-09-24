// joke api 
const setUpLine = document.getElementById('setup')
const responseLine = document.getElementById('punch')

// love api 
const yName = document.getElementById('userName').value;
const lName = document.getElementById('loverName').value[0];
const percentage = document.getElementById('percentage');
const result = document.getElementById('result');


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
		setUpLine.append(setUp);
		responseLine.append(punch)
		responseLine.style.fontSize='1rem';
		responseLine.style.fontWeight='bold';
        return response;
    })
}

const loveBtn = document.getElementById('btn-two')
loveBtn.addEventListener('click', loveApi)

function loveApi () {


// get love compatibility api 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00e3db074cmsh859ff928fa0e703p114d09jsn7ee010402a05',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};
fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John', options)
	.then(response => response.json())
	.then(response =>  {
		const getPercentage = response.percentage;
		const getResults = response.result;
		percentage.append(`${getPercentage}%`);
		result.append(getResults);
		console.log(response);
		console.log(yName)
		console.log(lName)
	})
}
