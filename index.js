const myform = document.getElementById('guest');
const guestinput = document.getElementById('name');
const guestList = document.getElementById('guest-list');

myform.addEventListener('submit', formHandler);
guestinput.addEventListener('input', inputhandler);

function inputhandler(e) {
  console.log('Guest name is changing:', e.target.value);
}

function formHandler(e) {
  e.preventDefault(); // Prevent form reload

  const guestname = guestinput.value.trim();
  if (!guestname) return;

  if (guestList.children.length >= 10) {
    alert("Guest list limit reached (10 guests max).");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${guestname} - Not Attending`;


  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.style.marginLeft = "10px";

  // Remove guest from list
  removeBtn.addEventListener("click", function (event) {
    event.stopPropagation(); 
    li.remove();
  });

  li.addEventListener("click", function (event) {
    if (event.target !== removeBtn) {
      const isAttending = li.textContent.includes("Not Attending");
      li.textContent = `${guestname} - ${isAttending ? "Attending" : "Not Attending"}`;
      li.appendChild(removeBtn); 
    }
  });

  li.appendChild(removeBtn);
  guestList.appendChild(li);
  myform.reset(); 
}




