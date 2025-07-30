











export async function getMainUser() {
    const response = await fetch('api');
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