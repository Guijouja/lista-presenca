document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("confirmation-form");
    const nameInput = document.getElementById("name-input");
    const guestList = document.getElementById("guest-list");
  
    
    const savedGuests = JSON.parse(localStorage.getItem("guestList")) || [];
    savedGuests.forEach(addGuestToList);
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const guestName = nameInput.value.trim();
      if (guestName) {
        addGuestToList(guestName);
        savedGuests.push(guestName);
        localStorage.setItem("guestList", JSON.stringify(savedGuests));
        nameInput.value = ""; 
      }
    });
  
    function addGuestToList(name) {
      const li = document.createElement("li");
      li.textContent = name;
      guestList.appendChild(li);
    }
  });
  