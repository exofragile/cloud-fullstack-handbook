const list = document.querySelector('#workshop-list');
const form = document.querySelector('#register-form');
const errorBox = document.querySelector('#form-error');
const comments = document.querySelector('#comments');
const counter = document.querySelector('#comment-count');

/* ---------- Extra 1: fetch the workshops from workshops.json ---------- */
function renderWorkshops(workshops) {
  for (const w of workshops) {
    const card = document.createElement('article');
    card.className = 'workshop' + (w.featured ? ' featured' : '');
    const heading = document.createElement('h3');
    heading.textContent = w.name;
    const details = document.createElement('p');
    details.textContent = `${w.date} · ${w.level}`;
    card.append(heading, details);
    list.appendChild(card);
  }
}

async function loadWorkshops() {
  try {
    const response = await fetch('workshops.json');
    if (!response.ok) {
      throw new Error(`Server answered ${response.status}`);   // fetch does NOT throw on 404 by itself
    }
    const workshops = await response.json();
    renderWorkshops(workshops);
  } catch (error) {
    console.log('Could not load workshops:', error);
    const message = document.createElement('p');
    message.className = 'error';
    message.textContent = 'Sorry, the workshops could not be loaded right now.';
    list.appendChild(message);
  }
}

loadWorkshops();

/* ---------- Extras 2 + 3: validation, confirmation, cancel ---------- */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    document.querySelector('.confirm')?.remove();              // never show two confirmations
    const name = document.querySelector('#fullname').value;
    const select = document.querySelector('#workshop');

    // Extra 3: an inline error message instead of alert()
    if (select.value === '') {
      errorBox.textContent = 'Please choose a workshop before registering.';
      errorBox.hidden = false;
      return;
    }
    errorBox.hidden = true;

    const workshopName = select.options[select.selectedIndex].text;

    const confirmation = document.createElement('div');
    confirmation.className = 'confirm';

    const text = document.createElement('p');
    text.textContent = `Thanks, ${name}! You're registered for ${workshopName}.`;

    // Extra 2: a button that removes the confirmation again
    const cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.textContent = 'Cancel registration';
    cancel.addEventListener('click', () => confirmation.remove());

    confirmation.append(text, cancel);
    form.after(confirmation);
  } catch (error) {
    console.log('Could not show confirmation:', error);
  }
});

/* ---------- Extra 4: live "characters remaining" counter ---------- */
comments.addEventListener('input', () => {
  const left = comments.maxLength - comments.value.length;
  counter.textContent = `${left} characters remaining`;
});
