class Validator {
    static isNumber = (text) => (!isNaN(Number(text)) && text !== '' && text !== ' ');

    static includesDigits = (text) => {
        const results = Array.from(text).map(char => !this.isNumber(char));
        return results.includes(false);
    };

    static isCVVValid = (cvv) => (cvv.length === 3) && this.isNumber(cvv);

    static isPartialCardNumberValid = (cardNumber) => (cardNumber.length === 4) && this.isNumber(cardNumber);
}

const State = new ValidationState(() => {
    const button = document.getElementsByClassName('button')[0];
    const className = button.className;
    const okClassName = 'button_submit';
    if (this.isAllValid())
        button.className += ` ${okClassName}`;
    else if (className.includes(` ${okClassName}`))
        button.className = className.substring(0, className.indexOf(` ${okClassName}`));
});

/**
 * Checks if value is not valid then recolor border if needed
 */
class OnChangeHandlers {
    /**
     * If all fields are valid then enables button
     * Otherwise disables button
     */

    static CVV = (target) => {
        State.isCVVValid = Validator.isCVVValid(target.value);
        if (State.isCVVValid)
            target.style.border = '1px solid lightgray';
        else
            target.style.border = '1px solid red';
    };

    /**
     * Card number format: XXXX XXXX XXXX XXXX
     * Checks is XXXX valid
     */
    static partialCardNumber = (target) => {
        State.isPartialCardNumberValid = Validator.isPartialCardNumberValid(target.value);
        if (State.isPartialCardNumberValid)
            target.style.border = '1px solid lightgray';
        else
            target.style.border = '1px solid red';
    };

    static cardOwner = (target) => {
        State.isCardOwnerValid = !Validator.includesDigits(target.value);
        if (State.isCardOwnerValid)
            target.style.border = '1px solid lightgray';
        else
            target.style.border = '1px solid red';
    };
}