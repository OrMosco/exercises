
import { getMainUser,getQuote } from "./model.js";

async function getUserPage() {
    const mainUser = await getMainUser();
    const quote = await getQuote();
    const pokemon = await getPokemon();
    const about = await getAbout();
    const friends = await getFriends();

    return new UserPage(mainUser, quote, pokemon, about, friends);
}


getMainUser().then(user=> console.log("check",user));
getQuote().then(quote=> console.log("ez says:",quote))


