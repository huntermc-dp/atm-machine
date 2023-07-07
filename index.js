function withdraw(cB, wA) {
  console.log(cB, wA);
  if (wA > cB) {
    return "Not enough funds";
  } else {
    return cB - wA;
  }
}

function deposit(cB, dA) {
  return cB + dA;
}

function renderWithdraw(cB) {
  const withdrawWrapper = document.querySelector(".withdraw-wrapper");

  // withdrawWrapper.className = "withdraw-wrapper";
  valueInput.className = "withdraw-input";
  hTag.className = "withdraw-text";
  textNode.className = "current-balance";
  submitBtn.textContent = "Submit";

  hTag.textContent = "How Much would you like to withdraw";
  console.dir(hTag);
  console.dir(textNode);
  currentBalance.textContent = cB;
  // console.log(cB);
  // console.log(currentBalance);

  withdrawWrapper.appendChild(hTag);
  withdrawWrapper.appendChild(textNode);
  withdrawWrapper.appendChild(valueInput);
  withdrawWrapper.appendChild(submitBtn);

  submitBtn.addEventListener("click", () => {
    currentBalance = withdraw(cB, parseInt(valueInput.value));
    balance.textContent = `Your current balance is: $${currentBalance}`;
  });
}

function renderDeposit(cB) {
  const depositWrapper = document.querySelector(".deposit-wrapper");

  // depositWrapper.className = "deposit-wrapper";
  valueInput.className = "deposit-input";
  hTag.className = "deposit-text";
  textNode.className = "current-balance";
  submitBtn.textContent = "Submit";

  hTag.textContent = "How Much would you like to deposit";
  console.dir(hTag);
  console.dir(textNode);
  currentBalance.textContent = cB;

  depositWrapper.appendChild(hTag);
  depositWrapper.appendChild(textNode);
  depositWrapper.appendChild(valueInput);
  depositWrapper.appendChild(submitBtn);

  submitBtn.addEventListener("click", () => {
    currentBalance = deposit(cB, parseInt(valueInput.value));
    balance.textContent = `Your current balance is: $${currentBalance}`;
  });
}

function quit() {
  const quitWrapper = document.querySelector(".quit-wrapper");
  h1Tag.className = "deposit-text";
  h1Tag.textContent = "Thank you for using the ATM";
  quitWrapper.appendChild(h1Tag);
}

const h1Tag = document.createElement("h1");
const valueInput = document.createElement("input");
const submitBtn = document.createElement("button");
const hTag = document.createElement("h3");
const textNode = document.createElement("p");

const balance = document.querySelector(".view-balance");

let currentBalance = 100;

balance.textContent = `Your current balance is: $${currentBalance}`;
const btns = document.querySelectorAll(".btn");
console.log(btns);

btns[0].addEventListener("click", () => renderDeposit(currentBalance));
btns[1].addEventListener("click", () => renderWithdraw(currentBalance));
btns[2].addEventListener("click", () => quit());
