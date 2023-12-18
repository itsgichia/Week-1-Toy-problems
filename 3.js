function calculateNetSalary(basicSalary, benefits) {
    // Placeholder values for KRA, NHIF, and NSSF
    const kraRate = 0.1; // 10% for KRA
    const nhifRate = 0.05; // 5% for NHIF
    const nssfRate = 0.06; // 6% for NSSF

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate deductions
    const kraDeduction = grossSalary * kraRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - kraDeduction - nhifDeduction - nssfDeduction;

    // Prepare the result object
    const result = {
        grossSalary,
        kraDeduction,
        nhifDeduction,
        nssfDeduction,
        netSalary,
    };

    return result;
}

// Example: Call the function with basic salary and benefits
const salaryDetails = calculateNetSalary(50000, 2000);
console.log(salaryDetails);
