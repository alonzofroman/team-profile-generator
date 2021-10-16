const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, role, id, email, office) {
        super(name, role, id, email)
        this.office = office;
    }
};

module.exports = Manager;