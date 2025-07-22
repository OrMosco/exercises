const Family = function () {
    const members = []

    const birth = function (name) {
        members.push(name)
        console.log(members)
    }

    return birth
}

const giveBirth = Family()
giveBirth("Clarissa")
giveBirth("Mayana")

