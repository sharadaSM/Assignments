

// A bank evaluates loan applicants based on the following criteria:
let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

if (creditScore > 750) {
    console.log(`Loan is automatically approved for ${customerName}.`);
} else if (creditScore >= 650 && creditScore < 750 && income >= 50000 && isEmployed === true && debtToIncomeRatio < 40) {
    console.log(`Loan is approved for ${customerName} after additional checks.`); 
} else if (creditScore < 650) {console.log(`Loan is denied for ${customerName}.`);
}