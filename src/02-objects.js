/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let arrayOfNames = []
  for (let person of people){
    arrayOfNames.push(person.name)
  } 
  return arrayOfNames;
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
  for(let person of people){
    if (name.toLowerCase() === person.name.toLowerCase()){
      return person;
    }
  }
  return null;
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let under25 = [];

  for(let person of people){
    if (person.age < 25){
      under25.push(person)
    }
  }
  return under25;
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  let gmailPeople = [];

  for (let person of people){
    if (person.email.includes('gmail.com')){
      gmailPeople.push(person)
    }
  }
  return gmailPeople
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
