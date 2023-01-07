const findTheOldest = function(array) {
    //Find the age first
    const age = function(birth,death) {
        //If no yearOfDeath is given, use this year.
        if (!death){
            death = new Date().getFullYear();
        } 
        return death - birth;
    }

    return array.reduce((oldest, currentPerson) => {
        //Find the older age
        const oldestAge = age(oldest.yearOfBirth,oldest.yearOfDeath);
      
        //Find the younger age
        const currentAge = age(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
        
        //If oldestAge is higher than currentAge, return the older people
        return oldestAge > currentAge? oldest:currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
