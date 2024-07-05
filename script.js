// Example balance for demo purposes
var balance = 150000;

// Function to handle PIN verification
function btnPin() {
    var pin = document.getElementById('pin').value;
    var myPin = '2004'; // Adjust as per your PIN logic
    if (pin === myPin) {
        window.location.href = 'status.html';
    } else {
        alert('Incorrect PIN. Please try again.');
    }
}

// Function to check balance
function checkBalance() {
    var modal = document.querySelector('.modal');
    var balAmnt = document.getElementById('balAmnt');
    balAmnt.textContent = 'Current Balance: $' + balance.toLocaleString(); // Format balance nicely
    modal.classList.remove('hidden');
}

// Function to close modal
function closeModal() {
    var modal = document.querySelector('.modal');
    modal.classList.add('hidden');
}

// Function to proceed to withdraw page
function goToWithdraw() {
    window.location.href = 'withdraw.html';
}

// Function to withdraw amount
function amnt() {
    var amnt = parseFloat(document.getElementById('amnt').value);
    if (isNaN(amnt)) {
        alert('Please enter a valid amount.');
    } else if (amnt < 500) {
        alert('Withdraw amount must be at least 500.');
    } else if (amnt > balance) {
        alert('Insufficient balance.');
    } else {
        balance -= amnt;
        alert('Withdrawal successful. Remaining balance: $' + balance.toLocaleString());
        // Optionally redirect or perform other actions after successful withdrawal
    }
}

// Function to cancel transaction
function cancelTransaction() {
    window.location.href = 'index.html'; // Redirect to the index page to start over
}
