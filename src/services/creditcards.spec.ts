import { isCardValid } from "./creditcards";

// test("The card number 4539 1488 0343 6467 is a valid number", () =>{

//     const actual = isCardValid("4539 1488 0343 6467");

//     expect(actual).toBe(true);
// });

// test("The card number 6011 0009 9013 9424 is a valid number", () =>{

//     const actual = isCardValid("6011 0009 9013 9424");

//     expect(actual).toBe(true);
// });

// test("The card number 5500 0000 0000 0004 is a valid number", () =>{

//     const actual = isCardValid("5500 0000 0000 0004");

//     expect(actual).toBe(true);
// });

// test("The card number 3782 822463 10005 is a valid number", () =>{

//     const actual = isCardValid("3782 822463 10005");

//     expect(actual).toBe(true);
// });

// test("The card number 3056 9309 8250 64 is no a valid number", () =>{

//     const actual = isCardValid("3056 9309 8250 64");

//     expect(actual).toBe(false);
// });

// test("The card number 30569309025904 is a valid number", () =>{

//     const actual = isCardValid("30569309025904");

//     expect(actual).toBe(true);
// });


// test("The card number 5500 0000 0000 0000 is not a valid number", () =>{

//     const actual = isCardValid("5500 0000 0000 0000");

//     expect(actual).toBe(false);
// });

// test("The card number 3782 822463 10004 is not a valid number", () =>{

//     const actual = isCardValid("3782 822463 10004");

//     expect(actual).toBe(false);
// });

// test("The card number 3056 9309 8250 60 is not a valid number", () =>{

//     const actual = isCardValid("3056 9309 8250 60");

//     expect(actual).toBe(false);
// });


// test("The card number 4580-9A01-0106-FUCK is not a valid number", () =>{

//     const actual = isCardValid("4580-9A01-0106-FUCK");

//     expect(actual).toBe(false);
// });

// test("The card number ```` is not a valid number", () =>{

//     const actual = isCardValid("");

//     expect(actual).toBe(false);
// });

// test("The card number CARD NUMBER is not a valid number", () =>{

//     const actual = isCardValid("CARD NUMBER");

//     expect(actual).toBe(false);
// });


describe("isCardValid", () => {
    test("Valid credit card numbers should return true", () => {
        expect(isCardValid("4532015112830366")).toBe(true); // Visa
        expect(isCardValid("6011000990139424")).toBe(true); // Discover
        expect(isCardValid("30569309025904")).toBe(true); // Diners Club
        expect(isCardValid("378282246310005")).toBe(true); // American Express
        expect(isCardValid("5555555555554444")).toBe(true); // MasterCard
    });

    test("Invalid credit card numbers should return false", () => {
        expect(isCardValid("4532015112830367")).toBe(false); // Invalid Visa
        expect(isCardValid("6011000990139425")).toBe(false); // Invalid Discover
        expect(isCardValid("30569309025905")).toBe(false); // Invalid Diners Club
        expect(isCardValid("378282246310006")).toBe(false); // Invalid Amex
        expect(isCardValid("5555555555554445")).toBe(false); // Invalid MasterCard
    });

    test("Non-numeric input should return false", () => {
        expect(isCardValid("abcd efgh ijkl mnop")) .toBe(false);
        expect(isCardValid("1234-5678-90ab-cdef")) .toBe(false);
        expect(isCardValid("4111 1111 1111 111X")) .toBe(false);
    });

    test("Edge cases should return false", () => {
        expect(isCardValid("")) .toBe(false); // Empty string
        expect(isCardValid("0000000000000000")) .toBe(false); // All zeros
        expect(isCardValid("411111111111111")) .toBe(false); // Too short
        expect(isCardValid("411111111111111112345")) .toBe(false); // Too long
    });
});
