function getEventList(){
    let newsList = "";
    for(let i = 0; i<10 && i< fakeDatabase.events.length; i++){
        let event = fakeDatabase.events[i]
        let date = event.date.getDate() + " " + months[event.date.getMonth()]+ ", " + event.date.getFullYear();
       newsList += `<div class="event-item">
       <img src=${event.thumbnail}>
       <div class="event-item-info">
           <a href="../deadend">${event.title}</a><br><span class="date-tag">${date}</span>
       </div>
   </div>`
    }

    return newsList;
}

function generateEvents(){
    let events = `<h2>Upcoming Events</h2>
    ${getEventList()}
`;
    let eventBox = document.getElementById("upcoming-events");
    if(eventBox !== null){
        eventBox.innerHTML = events;
    }
}

window.addEventListener("load", generateEvents);