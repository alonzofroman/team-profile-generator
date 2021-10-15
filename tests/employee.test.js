const Employee = require("../lib/employee")

describe('Employee class', () => {
    const employee = new Employee('Tyler', 'Employee', '1', 'test@fake.com');

    describe('Employee name', () => {
        it('Has a name', () => {
            expect(employee.name).toBe('Tyler')
        });
    });
    describe('Employee Role', () => {
        it('Has a role', () => {
            expect(employee.role).toBe('Employee')
        });
    });
    describe('Employee ID', () => {
        it('Has an ID', () => {
            expect(employee.id).toBe('1')
        });
    });
    describe('Employee Email', () => {
        it('Has an Email', () => {
            expect(employee.email).toBe('test@fake.com')
        });
    });
});