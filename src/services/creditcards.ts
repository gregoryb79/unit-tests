export function isCardValid(cardNumber : string) : boolean{

    const sanitized = cardNumber.replace(/\D/g, "");

    if (!/^\d{13,19}$/.test(sanitized)) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;
    
    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized[i]);

        if (shouldDouble) {
            digit *= 2;

            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (((sum % 10) === 0)&&(sum != 0));
}