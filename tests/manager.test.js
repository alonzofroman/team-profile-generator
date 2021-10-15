const Manager = require("../lib/manager")

describe('Manager class', () => {
    const manager = new Manager('Snake', 'manager', '4', 'bigboss@mg3.com', '555-5555');

    describe('Manager name', () => {
        it('Has a name', () => {
            expect(manager.name).toBe('Snake')
        });
    });
    describe('Manager Role', () => {
        it('Has a role', () => {
            expect(manager.role).toBe('manager')
        });
    });
    describe('Manager ID', () => {
        it('Has an ID', () => {
            expect(manager.id).toBe('4')
        });
    });
    describe('Manager email', () => {
        it('Has an email', () => {
            expect(manager.email).toBe('bigboss@mg3.com')
        });
    });
    describe('Manager office number', () => {
        it('Has an office number', () => {
            expect(manager.office).toBe('555-5555')
        });
    });
});