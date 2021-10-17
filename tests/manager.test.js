const Manager = require("../lib/manager")

describe('Manager class', () => {
    const manager = new Manager('David', 'manager', '4', 'bigboss@gmail.com', '555-5555');

    describe('Manager name', () => {
        it('Has a name', () => {
            expect(manager.name).toBe('David')
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
            expect(manager.email).toBe('bigboss@gmail.com')
        });
    });
    describe('Manager office number', () => {
        it('Has an office number', () => {
            expect(manager.office).toBe('555-5555')
        });
    });
    describe('getName', () => {
        it('Returns Name', () => {
            expect(manager.getName()).toBe('David')
        });
    });
    describe('getRole', () => {
        it('Returns Role', () => {
            expect(manager.getRole()).toBe('Manager')
        });
    });
    describe('getId', () => {
        it('Returns ID', () => {
            expect(manager.getId()).toBe('4')
        });
    });
    describe('getEmail', () => {
        it('Returns Email', () => {
            expect(manager.getEmail()).toBe('bigboss@gmail.com')
        });
    });
    describe('getOffice', () => {
        it('Returns Office Number', () => {
            expect(manager.getOffice()).toBe('555-5555')
        });
    });
});