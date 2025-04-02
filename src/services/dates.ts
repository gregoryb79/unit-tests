function isLeapYear(year : number) : boolean {
    
    if ((year % 400) === 0){
        return true;
    } else if ((year % 100) === 0) {
        return false;
    } else if ((year % 4) === 0){
        return true;
    } else {
        return false;
    }
}

console.log(`2000 ${isLeapYear(2000)}`); // true
console.log(`1900 ${isLeapYear(1900)}`); // false
console.log(`2024 ${isLeapYear(2024)}`); // true
console.log(`2023 ${isLeapYear(2023)}`); // false