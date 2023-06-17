import {Customer} from "../model/Customer.js";
import {getAllCustomerDB, saveCustomerDB} from "../db/DB";
// import {getAllCustomerDB, saveCustomerDB, updateCustomerDB, deleteCustomerDB} from "../DB/db.js";

// export class CustomerController {
//     constructor() {
//         $('#btnSaveCustomer').click(alert("hii"));
//         // $('#btnCustomerUpdate').click(this.handleUpdateCustomerValidation.bind(this));
//         // $('#btnCustomerDelete').click(this.handleDeleteCustomerValidation.bind(this));
//         // $('#tblCustomerBody').click(event=>this.handleSelectCustomer(event));
//         //this.handleSaveCustomer.bind(this);
//         //this.handleLoadCustomers();
//     }
//
//     handleLoadCustomers() {
//
//         $('#customerTable').empty();
//         getAllCustomerDB().map((result, index) => {
//             var row = "<tr class='customer-row-data'>" +
//                 "<td>" + result._customer_id + "</td>" +
//                 "<td>" + result._customer_first_name + "</td>" +
//                 "<td>" + result._age + "</td>" +
//                 "<td>" + result._customer_address + "</td>" +
//                 "<td>" + result._customer_salary + "</td>" +
//                 "</tr>";
//             $('#customerTable').append(row);
//         })
//     }
//
//     handleSaveCustomerValidation() {
//
//         var customer_id = $('#customerID').val();
//         var customer_name = $('#customerName').val();
//         var customer_age = $('#customerAge').val();
//         var customer_salary = $('#customerSalary').val();
//         var customer_address = $('#CustomerAddress').val();
//
//         const regexNumber = /^\d+$/;
//
//         !regexNumber.test(customer_id) ?
//             alert('Invalid Id') :
//                 (!customer_name) ?
//                     alert('Invalid Name') :
//                     (!customer_age) ?
//                         alert('Invalid Age') :
//                     (!customer_salary) ?
//                         alert('Invalid Salary') :
//                         (!customer_address) ?
//                             alert('Invalid Address') :
//                             this.handleSaveCustomer();
//     }
//
//     handleSaveCustomer() {
//         var customer_id = $('#customerID').val();
//         var customer_name = $('#customerName').val();
//         var customer_age = $('#customerAge').val();
//         var customer_salary = $('#customerSalary').val();
//         var customer_address = $('#CustomerAddress').val();
//
//         let customer = new Customer(
//             customer_id,
//             customer_name,
//             customer_age,
//             customer_salary,
//             customer_address
//         );
//
//         saveCustomerDB(customer);
//         this.handleLoadCustomers();
//     }
//
//
// }


export class CustomerController {
    constructor() {
        $('#btnCustomerSave').click(this.handleSaveCustomerValidation.bind(this));
        $('#btnCustomerUpdate').click(this.handleUpdateCustomerValidation.bind(this));
        $('#btnCustomerDelete').click(this.handleDeleteCustomerValidation.bind(this));
        $('#tblCustomerBody').click(event=>this.handleSelectCustomer(event));
        this.handleSaveCustomer.bind(this);
        this.handleLoadCustomers();
    }


    handleSaveCustomerValidation() {
        var customer_id = $('#txtNewCustomerID').val();
        var customer_nic = $('#txtNewCustomerNIC').val();
        var customer_name = $('#txtNewCustomerName').val();
        var customer_salary = $('#txtNewCustomerSalary').val();
        var customer_address = $('#txtNewCustomerAddress').val();

        const regexNumber = /^\d+$/;

        !regexNumber.test(customer_id) ?
            alert('Invalid Id') :
            (!customer_nic) ?
                alert('Invalid Nic') :
                (!customer_name) ?
                    alert('Invalid Name') :
                    (!customer_salary) ?
                        alert('Invalid Salary') :
                        (!customer_address) ?
                            alert('Invalid Address') :
                            this.handleSaveCustomer();
    }

    handleSaveCustomer() {
        var customer_id = $('#customerID').val();
        var customer_name = $('#customerName').val();
        var customer_age = $('#customerAge').val();
        var customer_salary = $('#customerSalary').val();
        var customer_address = $('#CustomerAddress').val();

        let customer = new Customer(
            customer_id,
            customer_name,
            customer_age,
            customer_salary,
            customer_address
        );

        saveCustomerDB(customer);
        this.handleLoadCustomers();
    }

    // handleUpdateCustomerValidation() {
    //     var customer_id = $('#customerID').val();
    //     var customer_name = $('#customerName').val();
    //     var customer_age = $('#customerAge').val();
    //     var customer_salary = $('#customerSalary').val();
    //     var customer_address = $('#CustomerAddress').val();
    //
    //     (getAllCustomerDB().findIndex(customer => customer._customer_id === customer_id ) < 0) ?
    //         alert("not found customer") :
    //         (!customer_age) ?
    //             alert('Invalid Age') :
    //             (!customer_name) ?
    //                 alert('Invalid Name') :
    //                 (!customer_salary) ?
    //                     alert('Invalid Salary') :
    //                     (!customer_address) ?
    //                         alert('Invalid Address') :
    //                         this.handleUpdateCustomer();
    // }

    // handleUpdateCustomer() {
    //     var customer_id = $('#customerID').val();
    //     var customer_name = $('#customerName').val();
    //     var customer_age = $('#customerAge').val();
    //     var customer_salary = $('#customerSalary').val();
    //     var customer_address = $('#CustomerAddress').val();
    //
    //
    //     let customer = new Customer(
    //         customer_id,
    //         customer_name,
    //         customer_age,
    //         customer_salary,
    //         customer_address
    //     );
    //
    //     updateCustomerDB(customer);
    //     this.handleLoadCustomers();
    //     $('#btnCustomerEdit').prop( "disabled", true);
    // }

    // handleDeleteCustomerValidation(){
    //     var customer_id = $('#customerID').val();
    //     (getAllCustomerDB().findIndex(customer => customer._customer_id === customer_id ) < 0) ?
    //         alert("not found customer") :
    //         this.handleDeleteCustomer();
    // }

    // handleDeleteCustomer() {
    //     var customer_id = $('#customerID').val();
    //     var customer_name = $('#customerName').val();
    //     var customer_age = $('#customerAge').val();
    //     var customer_salary = $('#customerSalary').val();
    //     var customer_address = $('#CustomerAddress').val();
    //
    //     let customer = new Customer(
    //         customer_id,
    //         customer_name,
    //         customer_age,
    //         customer_salary,
    //         customer_address
    //     );
    //
    //     deleteCustomerDB(customer);
    //     this.handleLoadCustomers();
    //     $('#btnCustomerEdit').prop( "disabled", true);
    // }

    // handleSelectCustomer(event){
    //     let row = $(event.target).closest('tr').find('td');
    //     $('#tblCustomerBody tr').removeClass('selected');
    //     $(event.target).closest('tr').addClass('selected');
    //     $('#btnCustomerEdit').prop( "disabled", false);
    //
    //     $('#txtEditCustomerID').val(row.eq(0).text());
    //     $('#txtEditCustomerNIC').val(row.eq(1).text());
    //     $('#txtEditCustomerName').val(row.eq(2).text());
    //     $('#txtEditCustomerSalary').val(row.eq(3).text());
    //     $('#txtEditCustomerAddress').val(row.eq(4).text());
    // }
}

new CustomerController();

