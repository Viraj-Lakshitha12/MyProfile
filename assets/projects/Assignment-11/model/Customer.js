export class Customer {
    constructor(customer_id, customer_first_name, age, customer_address, customer_salary) {
        this._customer_id = customer_id;
        this._customer_first_name = customer_first_name;
        this._age = age;
        this._customer_address = customer_address;
        this._customer_salary = customer_salary;
    }

    get customer_id() {
        return this._customer_id;
    }

    set customer_id(value) {
        this._customer_id = value;
    }

    get customer_first_name() {
        return this._customer_first_name;
    }

    set customer_first_name(value) {
        this._customer_first_name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get customer_address() {
        return this._customer_address;
    }

    set customer_address(value) {
        this._customer_address = value;
    }

    get customer_salary() {
        return this._customer_salary;
    }

    set customer_salary(value) {
        this._customer_salary = value;
    }
}