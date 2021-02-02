let genre = [
    'Platform',
    'Shooter',
    'Fighting',
    'Beat em up',
    'Stealth',
    'Survival',
    'Battle Royale',
    'Rhytm',
    'Survival horror',
    'Text adventure',
    'Graphic adventure',
    'Interactive movie',
    'Tower defence',
    'Racing',
    'Sports',
    'Party',
    'Educational',
]

let environment = [
    'in a forest',
    'in a lab',
    'in a desert',
    'in an ocean',
    'in a cave',
    'in a museum',
    'in Wholefoods',
    'in a zoo',
    'in an airport',
    'in an amusement Park',
    'in an aquarium',
    'in a back alley',
    'in a bank',
    'in a bar',
    'ina barn',
    'in a boathouse',
    'on a beach',
    'on a bridge',

]

let story = [
    'escaping a prison',
    'saving someones life',
    'eating food',
    'operating an airplane',
    'living in London',
    'not having a job',
    'livestreaming',
    'being famous',
    'being poor',
    'trying to win a race',
    'throwing bananas',
    'having a Twitter account',
    'being chased by a killer',
    'making memes',
    'editing videos',
    'becoming the president',
    'writing a letter to a guy named Steve',
    'screaming',
    'building a family',
    'speaking English',
    'hiding in a closet',
    'paying bills',
    'hunting down ghoats',
    'owning a coffee shop',
    'being the richest person in the world',
    'hacking',
]

let twist = [
    'you cannot jump',
    'you smell really bad',
    'you cannot stop flying',
    'you cannot drink alcohol',
    'your wife just left you',
    'your husband just left you',
    'you got canceled on Twitter',
    'you die at the end',
    'you ran out of milk',
    'you are late for your meeting',
    'you own a tank',
    'your dog helps you',
    'you cant take demage',
    'you can only attack using magic',
    'I am already Tracer',
]


const GenerateGameIdea = () => {

    sessionStorage.setItem("initialLoad", "true");
    let genreType = Math.floor(Math.random() * genre.length)
    let environmentType = Math.floor(Math.random() * environment.length)
    let storyType = Math.floor(Math.random() * story.length)
    let twistType = Math.floor(Math.random() * twist.length)
    if (genre[genreType].startsWith('A') || genre[genreType].startsWith('E') || genre[genreType].startsWith('I') || genre[genreType].startsWith('O') || genre[genreType].startsWith('U')){
        let gameIdea = `An ${genre[genreType]} game ${environment[environmentType]} about ${story[storyType]}, but ${twist[twistType]}.`
        localStorage.setItem("idea", gameIdea);
        document.getElementById('idea').innerHTML = gameIdea;
    } 
    else {
        let gameIdea = `A ${genre[genreType]} game ${environment[environmentType]} about ${story[storyType]}, but ${twist[twistType]}.`
        localStorage.setItem("idea", gameIdea);
        document.getElementById('idea').innerHTML = gameIdea;
    } 
}