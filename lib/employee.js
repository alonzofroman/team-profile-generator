// Create a class for employee

class Employee {
    constructor (name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;

    }

getName() {
    return this.name
}

getRole() {
    return 'Employee'
}

getId() {
    return this.id
}

getEmail() {
    return this.email
}

};





module.exports = Employee;