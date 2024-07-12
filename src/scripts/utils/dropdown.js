/* eslint-disable no-undef */
/* eslint-disable default-case */
export function handleKeydown(event) {
  const { target } = event;
  const dropdown = target.closest('.dropdown');
  if (!dropdown) return;

  const button = dropdown.querySelector('a[aria-haspopup="true"]');
  const menu = dropdown.querySelector('.dropdown-content');

  switch (event.key) {
    case 'Enter':
    case ' ':
      if (target === button) {
        event.preventDefault();
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        menu.style.display = expanded ? 'none' : 'block';
        if (!expanded) {
          menu.querySelector('a').focus();
        }
      }
      break;
    case 'Escape':
      if (menu.style.display === 'block') {
        button.setAttribute('aria-expanded', 'false');
        menu.style.display = 'none';
        button.focus();
      }
      break;
    case 'Tab':
      if (menu.style.display === 'block' && !menu.contains(document.activeElement)) {
        button.setAttribute('aria-expanded', 'false');
        menu.style.display = 'none';
      }
      break;
  }
}

export function handleClick(event) {
  const { target } = event;
  const dropdown = target.closest('.dropdown');
  if (!dropdown) return;

  const button = dropdown.querySelector('a[aria-haspopup="true"]');
  const menu = dropdown.querySelector('.dropdown-content');
  const expanded = button.getAttribute('aria-expanded') === 'true';

  if (target === button) {
    event.preventDefault();
    button.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'block';
    if (!expanded) {
      menu.querySelector('a').focus();
    }
  } else {
    button.setAttribute('aria-expanded', 'false');
    menu.style.display = 'none';
  }
}

export function addLayananTabListener(layananButton) {
  layananButton.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && event.target.getAttribute('aria-expanded') === 'false') {
      event.preventDefault();
      event.target.click();
    }
  });
}
