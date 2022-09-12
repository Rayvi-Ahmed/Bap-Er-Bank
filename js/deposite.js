document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-feild');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // Deposite calculation//////

    const DepositeTotalElement = document.getElementById('depsite-amount');
    const previousDepositeAmountString = DepositeTotalElement.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountString);

    const currentDepositeAmount = newDepositeAmount + previousDepositeAmount;

    DepositeTotalElement.innerText = currentDepositeAmount;

    depositeField.value = '';


    // Get balance total//


    const balanceElmenttotal = document.getElementById('Balance-amount');
    const previousBalanceTotalString = balanceElmenttotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceElmenttotal.innerText = currentBalanceTotal;

})

// Widthraw Calculation//
document.getElementById('widthdraw-btn').addEventListener('click', function () {
    const widtdwarFeild = document.getElementById('widthdraw');
    const newWisthdrawElementString = widtdwarFeild.value;
    const newWidthdrawTotal = parseFloat(newWisthdrawElementString);

    const widthdrawTotalElement = document.getElementById('widthdraw-amount');
    const previousWidthdrawAmountString = widthdrawTotalElement.innerText;
    const previousWidthdraw = parseFloat(previousWidthdrawAmountString);

    const currentWidthdrawTotal = previousWidthdraw + newWidthdrawTotal;

    widthdrawTotalElement.innerText = currentWidthdrawTotal;


    // Balance Calculation//////////
    const widtdrwBalanceTotal = document.getElementById('Balance-amount');
    const previousBalanceAmountString = widtdrwBalanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);


    const currentbalanceAmountTotal = previousBalanceAmount - newWidthdrawTotal;

    widtdrwBalanceTotal.innerText = currentbalanceAmountTotal;

    widtdwarFeild.value = '';

})