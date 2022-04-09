$(document).ready(onReady);

function onReady(){
    $('#submitButton').on('click', employeeAppender);
    $('#submitButton').on('click', monthlySalaryCalculator);
}

let monthlySalary = 0;

function employeeAppender(){
    $('.employeeDetails').append(`<tr>
    <td>${$('#firstName').val()}</td>
    <td>${$('#lastName').val()}</td>
    <td>${$('#idNumber').val()}</td>
    <td>${$('#jobTitle').val()}</td>
    <td>${$('#annualSalary').val()}</td>
    <td><button class="delete">Delete</button></td>
    </tr>`);
    $('.delete').css({"margin": "auto", "display": "block"});
    $('.delete').on('click', deleteEmployee);
    monthlySalary += parseInt($('#annualSalary').val() / 12);
    $('.inputs').val('');
}

function monthlySalaryCalculator(){;
    $('#salaryTotal').empty();
    $('#salaryTotal').append(monthlySalary.toFixed(2));
    if (monthlySalary >= 20000) {
        $('footer').css({"background-color": "black", "color": "red"});
    }
}

function deleteEmployee() {
    $(this).closest("tr").remove();
}