// User class - model for user data
// Define the allowed categories as an Enum
export enum EventCategory {
    Workshop = "workshop",
    Conference = "conference",
    Sport = "sport",
    Other = "other"
}

export class Event {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    category: EventCategory;
    maxCapacity: number;

    constructor(
        id: number, title: string, description: string, date: string, location: string,  category: EventCategory, maxCapacity: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.category = category;
        this.maxCapacity = maxCapacity;
    }

    // Getters
    getTitle(): string {
        return this.title;
    }

    getDescription(): string {
        return this.description;
    }

    getDate(): string {
        return this.date;
    }

    getCapacity(): number {
        return this.maxCapacity;
    }

    // Setters
    setTitle(title: string): void {
        this.title = title;
    }

    setCapacity(capacity: number): void {
        this.maxCapacity = capacity;
    }
}