const Engineer = require("../lib/engineer")

describe('Engineer class', () => {
    const engineer = new Engineer('Robin', 'Engineer', '2', 'ijustworkhere@gmail.com', 'gitusername');

    describe('Engineer name', () => {
        it('Has a name', () => {
            expect(engineer.name).toBe('Robin')
        });
    });
    describe('Engineer Role', () => {
        it('Has a role', () => {
            expect(engineer.role).toBe('engineer')
        });
    });
    describe('Engineer ID', () => {
        it('Has an ID', () => {
            expect(engineer.id).toBe('2')
        });
    });
    describe('Engineer email', () => {
        it('Has an email', () => {
            expect(engineer.email).toBe('ijustworkhere@gmail.com')
        });
    });
    describe('Engineer Github username', () => {
        it('Has a Github username', () => {
            expect(engineer.gitHub).toBe('gitusername')
        });
    });
});