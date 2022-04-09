$(document).ready(onReady);

function onReady(){
    $('#submitButton').on('click', employeeAppender);
}

// let newEmployee = {
//     firstName: $('#firstName').val(),
//     lastName: $('#lastName').val(),
//     idNumber: $('#idNumber').val(),
//     jobTitle: $('#jobTitle').val(),
//     annualSalary: $('#annualSalary').val()
// }

function employeeAppender(){
    $('.employeeDetails').append(`<tr>
    <td>${$('#firstName').val()}</td>
    <td>${$('#lastName').val()}</td>
    <td>${$('#idNumber').val()}</td>
    <td>${$('#jobTitle').val()}</td>
    <td>${$('#annualSalary').val()}</td>
    </tr>`);
}