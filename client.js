$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', employeeInfo)
}

function employeeInfo() {
    // console.log('in employeeInfo');
    $('#employeeDetails').append(`<tr>
    <td>` + $('#firstName').val() + `</td>
    <td>` + $('#lastName').val() + `</td>
    <td>` + $('#idNumber').val() + `</td>
    <td>` + $('#jobTitle').val() + `/td>
    <td>` + $('#annualSalary').val() + `</td>
    </tr>`)
}