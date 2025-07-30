


export class UserPage {
    constructor(mainUser, quote, pokemon,about, friends) {
        this.mainUser = mainUser;
        this.quote = quote;
        this.pokemon = pokemon;
        this.about = about;
        this.friends = friends;
    }
}



export async function getMainUser() {
    const response = await fetch('https://randomuser.me/api/?results=1');
    const data = await response.json();
    const user = data.results[0];
    return {
        FirstName: user.name.first,
        lastName: user.name,last,
        City: user.location.city,
        State: user.location.state,
        Pictue: user.pictue.large
    };
}


export async function getQuote() {
    const response = await fetch('https://api.kanye.rest');
    const data = await response.json();
    return data.quote;
}