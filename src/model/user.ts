export class User {
    //  Properties
    public id: number;
    public fullName: string;
    public institutionalEmail: string; 

    //  Constructor
    constructor(id: number, fullName: string, institutionalEmail: string) {
        this.id = id;
        this.fullName = fullName;
        this.institutionalEmail = institutionalEmail;
    }

    //  Methods (Getters)
    getInfo(): string {
        return `${this.fullName} (${this.institutionalEmail})`;
    }

    //  Setters 
    setFullName(name: string): void {
        this.fullName = name;
    }

    setInstitutionalEmail(email: string): void {
        this.institutionalEmail = email;
    }
}