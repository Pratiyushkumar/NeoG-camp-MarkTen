// accessing the DOM
const billAmount = document.querySelector("#bill-Amount");
const btnClicked = document.querySelector("#btn-click");
const cash = document.querySelector("#cash-given");
const messages = document.querySelector(".error-message");
const numberOfNotes = document.querySelectorAll(".numberOfNotes");

// defined array of notes avilable
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
let result;

// event Listener on button
btnClicked.addEventListener("click", () => {
  inputOutput();
});

// input ---> processing---> output
function inputOutput() {
  messages.style.display = "none";
  const billAmountInput = parseInt(billAmount.value);
  const cashGiven = parseInt(cash.value);

  // validation if anyof the input field is empty it would so error
  if (billAmount.value !== "" || cash.value !== "") {
    calculateReturnAmount(billAmountInput, cashGiven);
  } else {
    message("Enter the Value");
  }
}

// function to calculate the cash amount to be refunded to customer
function calculateReturnAmount(billAmount, cashGiven) {
  console.log("calculating return amount");
  if (billAmount > 0) {
    if (billAmount <= cashGiven) {
      const returnCash = cashGiven - billAmount;
      processing(returnCash);
    } else {
      message("Please pay the whole amount");
    }
  } else {
    message("cannot accept the amount");
  }
}

// function to process the number of otes that should be given to customer
function processing(returnCash) {
  for (let i = 0; i < availableNotes.length; i++) {
    result = Math.trunc(returnCash / availableNotes[i]);
    returnCash = returnCash % availableNotes[i];
    numberOfNotes[i].innerHTML = result;
  }
}

// function to print error message
function message(mssg) {
  messages.style.display = "block";
  messages.innerHTML = mssg;
}
