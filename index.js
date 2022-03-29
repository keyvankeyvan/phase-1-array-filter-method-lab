// Code your solution here
function findMatching(drivers, sought)
{
    const filteredDrivers = drivers.filter(element => {
        return element.toUpperCase() == sought.toUpperCase()
    })
    return filteredDrivers
}

function fuzzyMatch(drivers, testStr) {

    /* real sleezy solution
    convert the array entry as an array of 1 lenght (and lowercase)
    go into it looking for sought(a var)(also lowercased) using indexof
    if found, index of will return 0
    if the return is 0, add it to the returned array in this function  */

    const filteredDrivers = drivers.filter(entry => {
        return entry.toUpperCase().indexOf(testStr.toUpperCase()) === 0 
    })

    return filteredDrivers
}

function matchName(drivers, nameSearch) {
    const filteredDrivers = drivers.filter(object => {
      return object.name === nameSearch  
    })
    return filteredDrivers
}