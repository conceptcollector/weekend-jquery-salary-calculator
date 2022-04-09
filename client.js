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
    monthlySalary += parseInt($('#annualSalary').val() / 12);
    $('.inputs').val('');
}

function monthlySalaryCalculator(){;
    $('#salaryTotal').empty();
    $('#salaryTotal').append(monthlySalary.toFixed(2));
}