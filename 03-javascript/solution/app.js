// A plain data array: one object per workshop.
const workshops = [
  { name: "Introduction to AWS", date: "12 October", level: "Beginner", featured: true },
  { name: "Getting Started with Google Cloud", date: "19 October", level: "Beginner", featured: false },
  { name: "Cloud Security Basics", date: "26 October", level: "Intermediate", featured: false }
];

// Build one <article> card per workshop and add it to the grid.
const list = document.querySelector('#workshop-list');

workshops.forEach(w => {
  const card = document.createElement('article');
  card.className = 'workshop' + (w.featured ? ' featured' : '');
  const heading = document.createElement('h3');
  heading.textContent = w.name;
  const details = document.createElement('p');
  details.textContent = `${w.date} · ${w.level}`;
  card.append(heading, details);
  list.appendChild(card);
});

// Handle the registration form without reloading the page.
const form = document.querySelector('#register-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    const name = document.querySelector('#fullname').value;
    const workshopSelect = document.querySelector('#workshop');
    const workshopName = workshopSelect.options[workshopSelect.selectedIndex].text;

    const confirmation = document.createElement('p');
    confirmation.className = 'confirm';
    confirmation.textContent = `Thanks, ${name}! You're registered for ${workshopName}.`;
    form.after(confirmation);
  } catch (error) {
    console.log('Could not show confirmation:', error);
  }
});
