// All getX() functions fetch and return specific data from APIs


class UserPage {
    constructor(mainUser, quote, pokemon,about, friends) {
        this.mainUser = mainUser;
        this.quote = quote;
        this.pokemon = pokemon;
        this.about = about;
        this.friends = friends;
    }
}

async function getUserPage() {
    const mainUser = await getMainUser();
    const quote = await getQuote();
    const pokemon = await getPokemon();
    const about = await getAbout();
    const friends = await getFriends();

    return new UserPage(mainUser, quote, pokemon, about, friends);
}


async function getMainUser() {
    const response = await fetch('api');
    const data = await response.json();
    const user = data.results[0];
    return {
        FirstName: user.name.first,

    };
}

    getMainUser().then(user =>console.log(user));
