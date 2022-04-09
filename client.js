$(document).ready(onReady);

function onReady(){
    $('#submitButton').on('click', employeeAppender);
    $('#submitButton').on('click', monthlySalaryCalculator);
    $(document).on('click', '.delete', deleteEmployee);
}

let monthlySalary = 0;
let newEmployee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: $('#idNumber').val(),
    jobTitle: $('#jobTitle').val(),
    annualSalary: $('#annualSalary').val()
}

function employeeAppender(){
    $('.employeeDetails').append(`<tr>
    <td>${$('#firstName').val()}</td>
    <td>${$('#lastName').val()}</td>
    <td>${$('#idNumber').val()}</td>
    <td>${$('#jobTitle').val()}</td>
    <td class="salary">${$('#annualSalary').val()}</td>
    <td><button class="delete" style="background-color: rgb(239, 239, 239)",
    "color: black">Delete</button></td>
    </tr>`);
    $('.delete').css({"margin": "auto", "display": "block"});
    monthlySalary += $('#annualSalary').val() / 12;
    $('.inputs').val('');
}

function monthlySalaryCalculator(){;
    $('#salaryTotal').empty();
    $('#salaryTotal').append(monthlySalary.toFixed(2));
    if (monthlySalary >= 20000) {
        $('footer').css({"background-color": "black", "color": "red"});
        $('#bottomLine').css({"background-color": "black", "color": "red"});
        $('.delete').css({"background-color": "red", "color": "white"});
    }
}

function deleteEmployee() {
    let negativeSalary = $(this).closest('tr').children('td.salary').text();
    $(this).closest("tr").remove();
    monthlySalary -= (negativeSalary / 12);
    $('#salaryTotal').empty();
    $('#salaryTotal').append(monthlySalary.toFixed(2));
    if (monthlySalary < 20000) {
        $('footer').css({"background-color": "salmon", "color": "gray"});
        $('#bottomLine').css({"background-color": "gray", "color": "white"});
        $('.delete').css({"background-color": "rgb(239, 239, 239)",
        "color": "black"});
    }
}