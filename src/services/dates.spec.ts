import { isLeapYear } from "./dates";

test("The year 2000 is a leap year", () =>{

    const actual = isLeapYear(2000);

    expect(actual).toBe(true);
});

test("The year 2004 is a leap year", () =>{

    const actual = isLeapYear(2004);

    expect(actual).toBe(true);
});

test("The year 0 is a leap year", () =>{

    const actual = isLeapYear(0);

    expect(actual).toBe(true);
});

test("The year -400 is a leap year", () =>{

    const actual = isLeapYear(-400);

    expect(actual).toBe(true);
});

test("The year -16 is a leap year", () =>{

    const actual = isLeapYear(-16);

    expect(actual).toBe(true);
});

test("The year 2100 is not a leap year", () =>{

    const actual = isLeapYear(2100);

    expect(actual).toBe(false);
});

test("The year 2005 is not a leap year", () =>{

    const actual = isLeapYear(2005);

    expect(actual).toBe(false);
});

test("The year -3 is not a leap year", () =>{

    const actual = isLeapYear(-3);

    expect(actual).toBe(false);
});

test("The year Infinity is not a leap year", () =>{

    const actual = isLeapYear(Infinity);

    expect(actual).toBe(false);
});

test("The year -100 is not a leap year", () =>{

    const actual = isLeapYear(-100);

    expect(actual).toBe(false);
});