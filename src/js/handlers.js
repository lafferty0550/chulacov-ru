const CVV = (target) => {
    State.isCVVValid = Validator.isCVVValid(target.value);
    if (State.isCVVValid)
        target.style.border = '1px solid lightgray';
    else
        target.style.border = '1px solid red';
};

/**
 * Card number format: XXXX XXXX XXXX XXXX
 * Checks if XXXX is valid
 */
const partialCardNumber = (target) => {
    State.isPartialCardNumberValid = Validator.isPartialCardNumberValid(target.value);
    if (State.isPartialCardNumberValid)
        target.style.border = '1px solid lightgray';
    else
        target.style.border = '1px solid red';
};

const cardOwner = (target) => {
    State.isCardOwnerValid = !Validator.isOwnerValid(target.value);
    if (State.isCardOwnerValid)
        target.style.border = '1px solid lightgray';
    else
        target.style.border = '1px solid red';
};