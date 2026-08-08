function gradeCalculator(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    }
    else if (marks >= 70) {
        return 'C';
    }
    else if (marks >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
};
console.log("Grade for 85 marks is: " + gradeCalculator(85));
console.log("Grade for 72 marks is: " + gradeCalculator(72));
/*
PS C:\Users\bhish\OneDrive\Desktop\JavaScript> node "c:\Users\bhish\OneDrive\Desktop\JavaScript\4_Grade_Calculator.js"
Grade for 85 marks is: B
Grade for 72 marks is: C
*/
