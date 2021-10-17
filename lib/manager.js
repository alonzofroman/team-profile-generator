const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, role, id, email, office) {
        super(name, role, id, email)
        this.office = office;
    }

getRole() {
    return 'Manager'
}

getOffice() {
    return this.office
}

};

module.exports = Manager;