export class User {
    constructor(id, fullName, institutionalEmail) {
        this.id = id;
        this.fullName = fullName;
        this.institutionalEmail = institutionalEmail;
    }
    getInfo() {
        return `${this.fullName} (${this.institutionalEmail})`;
    }
    setFullName(name) {
        this.fullName = name;
    }
    setInstitutionalEmail(email) {
        this.institutionalEmail = email;
    }
}
//# sourceMappingURL=user.js.map