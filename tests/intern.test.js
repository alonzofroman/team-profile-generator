const Intern = require("../lib/intern")

describe('intern class', () => {
    const intern = new Intern('Byleth', 'intern', '3', 'pleasehelpme@ofc.edu', 'Officers Academy');

    describe('intern name', () => {
        it('Has a name', () => {
            expect(intern.name).toBe('Robin')
        });
    });
    describe('intern Role', () => {
        it('Has a role', () => {
            expect(intern.role).toBe('intern')
        });
    });
    describe('intern ID', () => {
        it('Has an ID', () => {
            expect(intern.id).toBe('3')
        });
    });
    describe('Intern email', () => {
        it('Has an email', () => {
            expect(intern.email).toBe('pleasehelpme@ofc.edu')
        });
    });
    describe('intern school name', () => {
        it('Has a school', () => {
            expect(intern.school).toBe('Officers Academy')
        });
    });
});