import { Event } from "../model/event.js";
import { User } from "../model/user.js";
import { Registration } from "../model/registration.js";
let allEvents = [];
let allRegistrations = [];
let selectedEvent = null;
function showView(viewId) {
    const views = ["view-home", "view-createEvent", "view-details"];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (el)
            el.style.display = (id === viewId) ? "block" : "none";
    });
    if (viewId === "view-home")
        renderEvents(allEvents);
}
document.getElementById("navHome")?.addEventListener("click", () => showView("view-home"));
document.getElementById("Create")?.addEventListener("click", () => {
    const user = prompt("Admin Name:");
    const pass = prompt("Password:");
    if (user === "Admin" && pass === "1234")
        showView("view-createEvent");
    else
        alert("Access Denied");
});
const eventForm = document.getElementById("eventCreationForm");
eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newEvent = new Event(Date.now(), document.getElementById("eventTittle").value, document.getElementById("eventDescription").value, document.getElementById("eventDate").value, document.getElementById("eventLocation").value, document.getElementById("eventCategory").value, parseInt(document.getElementById("eventCapacity").value));
    allEvents.push(newEvent);
    eventForm.reset();
    showView("view-home");
});
function renderEvents(list) {
    const container = document.getElementById("eventContainer");
    container.innerHTML = "";
    list.forEach(ev => {
        const div = document.createElement("div");
        div.className = "card";
        div.style = "display: flex; flex-direction: column ";
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
function openDetails(ev) {
    const content = document.getElementById("detailContent");
    const occupiedplace = allRegistrations.filter(place => place.event.id === ev.id).length;
    const remainingPlace = ev.maxCapacity - occupiedplace;
    content.innerHTML = `<h1>${ev.title}</h1>
                         <p><strong>Description</strong> :${ev.description}</p>
                         <p style="color: ${remainingPlace > 0 ? 'green' : 'red'}; font-weight: bold" > 
                          ${remainingPlace > 0 ? remainingPlace : "FULL"}</p>`;
    showView("view-details");
}
const regForm = document.getElementById("registrationForm");
regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selectedEvent)
        return;
    const email = document.getElementById("userEmail").value;
    const name = document.getElementById("userName").value;
    const isFull = allRegistrations.filter(r => r.event.id === selectedEvent.id).length >= selectedEvent.maxCapacity;
    const isDup = allRegistrations.some(r => r.user.institutionalEmail === email && r.event.id === selectedEvent.id);
    if (isFull)
        return alert("Event is full!");
    if (isDup)
        return alert("Already registered!");
    allRegistrations.push(new Registration(new User(Date.now(), name, email), selectedEvent));
    alert("Registration Successful!");
    regForm.reset();
    showView("view-home");
});
const themeBtn = document.getElementById("themeToggle");
themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerText = "☀️ Light Mode";
    }
    else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});
//# sourceMappingURL=main.js.map