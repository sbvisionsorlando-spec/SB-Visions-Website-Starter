const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const services = data.getAll('services');
  const subject = encodeURIComponent('Conference content inquiry from ' + data.get('name'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\n' +
    'Organization: ' + data.get('organization') + '\n' +
    'Email: ' + data.get('email') + '\n' +
    'Event name: ' + data.get('event_name') + '\n' +
    'Event dates: ' + data.get('event_dates') + '\n' +
    'Event location: ' + data.get('event_location') + '\n' +
    'Services needed: ' + (services.length ? services.join(', ') : 'Not selected') + '\n\n' +
    'Event goals and important details:\n' + data.get('details')
  );
  status.textContent = 'Your email application is opening with the event details ready to send.';
  window.location.href = 'mailto:hello@sb-visions.com?subject=' + subject + '&body=' + body;
});
