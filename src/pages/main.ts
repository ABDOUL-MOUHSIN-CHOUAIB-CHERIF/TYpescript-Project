import { Event, EventCategory } from "../model/event.js";
import { User } from "../model/user.js";
import { Registration } from "../model/registration.js";

//  Storage
let allEvents: Event[] = [];
let allRegistrations: Registration[] = [];
let selectedEvent: Event | null = null;


// View Switcher Logic
function showView(viewId: string) {
    const views = ["view-home", "view-createEvent", "view-details"];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === viewId) ? "block" : "none";
    });
    if (viewId === "view-home") renderEvents(allEvents);
}

//  Navigation Listeners
document.getElementById("navHome")?.addEventListener("click", () => showView("view-home"));
document.getElementById("Create")?.addEventListener("click", () => {
    // Admin Check before showing create view
    const user = prompt("Admin Name:");
    const pass = prompt("Password:");
    if (user === "Admin" && pass === "1234") showView("view-createEvent");
    else alert("Access Denied");
});

// Create Event Logic
const eventForm = document.getElementById("eventCreationForm") as HTMLFormElement;
eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newEvent = new Event(
        Date.now(),
        (document.getElementById("eventTittle") as HTMLInputElement).value,
        (document.getElementById("eventDescription") as HTMLTextAreaElement).value,
        (document.getElementById("eventDate") as HTMLInputElement).value,
        (document.getElementById("eventLocation") as HTMLInputElement).value,
        (document.getElementById("eventCategory") as HTMLSelectElement).value as EventCategory,
        parseInt((document.getElementById("eventCapacity") as HTMLInputElement).value)
    );
    allEvents.push(newEvent);
    eventForm.reset();
    showView("view-home");
});

//  Render Events
function renderEvents(list: Event[]) {
    const container = document.getElementById("eventContainer")!;
    container.innerHTML = "";
    list.forEach(ev => {
        const div = document.createElement("div");
        div.className = "card";
        div.style ="display: flex; flex-direction: column ";
        div.innerHTML = `<h4>${ev.title}</h4><p>${ev.date}</p>
        <p>${ev.description}</p>
        <p>${ev.getCapacity()}</p>
        <button id="btn-${ev.id}">Details</button>`;
        container.appendChild(div);
        document.getElementById(`btn-${ev.id}`)?.addEventListener("click", () => {
            selectedEvent = ev;
            openDetails(ev);
        });
    });
}

// Registration Logic
function openDetails(ev: Event) {
    const content = document.getElementById("detailContent")!;
    
    // calculte the number of places only occupied
    const occupiedplace = allRegistrations.filter(place => place.event.id === ev.id).length;

    // calculate the number of remainniiig places
    const remainingPlace = ev.maxCapacity - occupiedplace;

    content.innerHTML = `<h1>${ev.title}</h1>
                         <p><strong>Description</strong> :${ev.description}</p>
                         <p style="color: ${remainingPlace>0? 'green' : 'red'}; font-weight: bold" > 
                          ${remainingPlace >0 ? remainingPlace : "FULL"}</p>`;
    showView("view-details");
}

const regForm = document.getElementById("registrationForm") as HTMLFormElement;
regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    const email = (document.getElementById("userEmail") as HTMLInputElement).value;
    const name = (document.getElementById("userName") as HTMLInputElement).value;

    // VALIDATION GUARDS
    const isFull = allRegistrations.filter(r => r.event.id === selectedEvent!.id).length >= selectedEvent.maxCapacity;
    const isDup = allRegistrations.some(r => r.user.institutionalEmail === email && r.event.id === selectedEvent!.id);

    if (isFull) return alert("Event is full!");
    if (isDup) return alert("Already registered!");

    allRegistrations.push(new Registration(new User(Date.now(), name, email), selectedEvent));
    alert("Registration Successful!");
    regForm.reset();
    showView("view-home");
});

// light and dark mode
const themeBtn = document.getElementById("themeToggle");

themeBtn?.addEventListener("click", () => {
    // 1. Toggle the class on the body tag
    document.body.classList.toggle("dark-theme");

    // 2. Change the button text/icon based on the current mode
    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});