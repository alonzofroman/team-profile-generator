const Intern = require("../lib/intern")

describe('intern class', () => {
    const intern = new Intern('Byleth', 'Intern', '3', 'byleth@ofc.edu', 'Officers Academy');

    describe('intern name', () => {
        it('Has a name', () => {
            expect(intern.name).toBe('Byleth')
        });
    });
    describe('intern Role', () => {
        it('Has a role', () => {
            expect(intern.role).toBe('Intern')
        });
    });
    describe('intern ID', () => {
        it('Has an ID', () => {
            expect(intern.id).toBe('3')
        });
    });
    describe('Intern email', () => {
        it('Has an email', () => {
            expect(intern.email).toBe('byleth@ofc.edu')
        });
    });
    describe('intern school name', () => {
        it('Has a school', () => {
            expect(intern.school).toBe('Officers Academy')
        });
    });
    describe('getName', () => {
        it('Returns Name', () => {
            expect(intern.getName()).toBe('Byleth')
        });
    });
    describe('getRole', () => {
        it('Returns Role', () => {
            expect(intern.getRole()).toBe('Intern')
        });
    });
    describe('getId', () => {
        it('Returns ID', () => {
            expect(intern.getId()).toBe('3')
        });
    });
    describe('getEmail', () => {
        it('Returns Email', () => {
            expect(intern.getEmail()).toBe('byleth@ofc.edu')
        });
    });
    describe('getSchool', () => {
        it('Returns School', () => {
            expect(intern.getSchool()).toBe('Officers Academy')
        });
    });
});