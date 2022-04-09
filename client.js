$(document).ready(onReady);

function onReady(){
    $('#submitButton').on('click', employeeAppender);
    $('#submitButton').on('click', monthlySalaryCalculator)
}

let monthlySalary = 0;

function employeeAppender(){
    $('.employeeDetails').append(`<tr>
    <td>${$('#firstName').val()}</td>
    <td>${$('#lastName').val()}</td>
    <td>${$('#idNumber').val()}</td>
    <td>${$('#jobTitle').val()}</td>
    <td>${$('#annualSalary').val()}</td>
    </tr>`);
}

function monthlySalaryCalculator(){
    monthlySalary += $('#annualSalary').val() / 12;
    $('#salaryTotal').append(monthlySalary.toFixed(2));
}