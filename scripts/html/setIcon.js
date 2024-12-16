const icon = import.meta.env.VITE_APP_ICON || 'https://www.svgrepo.com/show/207158/business-card-id-card.svg';

document.querySelector('link[rel="icon"]').href = icon;
