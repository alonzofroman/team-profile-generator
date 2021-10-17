const Engineer = require("../lib/engineer")

describe('Engineer class', () => {
    const engineer = new Engineer('Robin', 'Engineer', '2', 'robin@gmail.com', 'gitusername');

    describe('Engineer name', () => {
        it('Has a name', () => {
            expect(engineer.name).toBe('Robin')
        });
    });
    describe('Engineer Role', () => {
        it('Has a role', () => {
            expect(engineer.role).toBe('Engineer')
        });
    });
    describe('Engineer ID', () => {
        it('Has an ID', () => {
            expect(engineer.id).toBe('2')
        });
    });
    describe('Engineer email', () => {
        it('Has an email', () => {
            expect(engineer.email).toBe('robin@gmail.com')
        });
    });
    describe('Engineer Github username', () => {
        it('Has a Github username', () => {
            expect(engineer.github).toBe('gitusername')
        });
    });
    describe('getName', () => {
        it('Returns Name', () => {
            expect(engineer.getName()).toBe('Robin')
        });
    });
    describe('getRole', () => {
        it('Returns Role', () => {
            expect(engineer.getRole()).toBe('Engineer')
        });
    });
    describe('getId', () => {
        it('Returns ID', () => {
            expect(engineer.getId()).toBe('2')
        });
    });
    describe('getEmail', () => {
        it('Returns Email', () => {
            expect(engineer.getEmail()).toBe('robin@gmail.com')
        });
    });
    describe('getGithub', () => {
        it('Returns Github', () => {
            expect(engineer.getGithub()).toBe('gitusername')
        });
    });
});