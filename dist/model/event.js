export var EventCategory;
(function (EventCategory) {
    EventCategory["Workshop"] = "workshop";
    EventCategory["Conference"] = "conference";
    EventCategory["Sport"] = "sport";
    EventCategory["Other"] = "other";
})(EventCategory || (EventCategory = {}));
export class Event {
    constructor(id, title, description, date, location, category, maxCapacity) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.category = category;
        this.maxCapacity = maxCapacity;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDate() {
        return this.date;
    }
    getCapacity() {
        return this.maxCapacity;
    }
    setTitle(title) {
        this.title = title;
    }
    setCapacity(capacity) {
        this.maxCapacity = capacity;
    }
}
//# sourceMappingURL=event.js.map