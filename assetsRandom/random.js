
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
        console.log(response.body[0].setup + " = " + response.body[0].punchline)
        return response;
    }
    )
    JokesOutput();
}
