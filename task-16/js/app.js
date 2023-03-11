function abcBank(userCardNo, currentUserPin) {
    const userDetails = [
        { name: "Ashok", accNo: 1, cardNo: 1001, pin: 1234, balance: 1500 },
        { name: "Harish", accNo: 2, cardNo: 1002, pin: 4321, balance: 10000 },
        { name: "Ranjith", accNo: 3, cardNo: 1003, pin: 9876, balance: 2000 },
        { name: "Maamathi", accNo: 4, cardNo: 1004, pin: 6789, balance: 3000 },
        { name: "Kavya", accNo: 5, cardNo: 1005, pin: 1010, balance: 6000 },
    ];

    let currentUserIndex = -1;

    function validation(userCardNo, currentUserPin) {
        currentUserIndex = userDetails.findIndex((e) => e.cardNo === userCardNo);
        if (currentUserIndex != -1) {
            if (userDetails[currentUserIndex].pin === currentUserPin) {
                return true;
            }
        }
        return false;
    }

    let validated = validation(userCardNo, currentUserPin);

    if (validated) {
        return {
            withdraw,
            deposit,
        };
    }
    else {
        return false;
    }

    function withdraw() {
        let amount = parseFloat(prompt("Enter the amount to be withdrawn"));
        if (amount > userDetails[currentUserIndex].balance) {
            alert("Insufficient Balance\n\nWithdraw Failed");
        } else {
            userDetails[currentUserIndex].balance -= amount;
            alert(
                "Amount Withdrawn : " +
                amount +
                "\n" +
                "Account Balance : " +
                userDetails[currentUserIndex].balance
            );
            alert("Thank You");
        }
    }


    function deposit() {
        let amount = parseFloat(prompt("Enter the amount to be Deposited"));
        userDetails[currentUserIndex].balance += amount;
        alert(
            "Amount Deposited : " +
            amount +
            "\n" +
            "Account Balance : " +
            userDetails[currentUserIndex].balance
        );
        alert("Thank You");
    }
}

let userTransactionOption;
let currentUserPin;
let userCardNo;
let instance;

userCardNo = parseInt(prompt("Enter Card No:"));
if (userCardNo) {
    currentUserPin = parseInt(prompt("Enter Your Pin"));
    if (currentUserPin) {
        instance = abcBank(userCardNo, currentUserPin);
        if (instance) {
            userTransactionOption = parseInt(prompt("Choose Option:(1 | 2)" + "\n1.Withdraw\n2.Deposit"));
            if (userTransactionOption === 1) {
                instance.withdraw();
            }
            else if (userTransactionOption === 2) {
                instance.deposit();
            }
            else {
                alert("Invalid Option!\nThank You");
            }
        }
        else {
            alert("Authentication Failed");
        }
    }
    else {
        alert("Action Cancelled");
    }
}
else {
    alert("Action Cancelled");
}



