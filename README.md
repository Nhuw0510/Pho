# Phở Website

A responsive, multi-page website for Phở restaurant. Visitors can learn about the restaurant, browse dishes by category, and follow links to external ordering services.

## Features

- Home page with restaurant introduction, highlights, reviews, and contact information.
- Menu with category filters for appetizers, phở, noodle dishes, vermicelli bowls, rice dishes, and beverages.
- Mobile navigation for the three main pages.
- Order page with links to Beyond Menu and DoorDash for pickup or delivery.
- PDF copy of the menu.

## Pages and files

| Path | Description |
| --- | --- |
| `index.html` | Home page |
| `menu.html` | Filterable food menu |
| `ordernow.html` | Links to third-party ordering services |
| `menu_pho.pdf` | PDF menu |
| `assets/css/` | Page styles |
| `assets/js/menu.js` | Menu data and filtering behavior |
| `assets/img/` | Restaurant and dish images |
| `vendor/` | Bundled front-end libraries, including Bootstrap and Bootstrap Icons |

## Run locally

Clone or download this repository, then open `index.html` in a browser. No installation or build step is required.

To serve the site locally instead, run the following command from the repository folder and open `http://localhost:8000`:

```bash
python -m http.server 8000
```

## Ordering

This repository is a front-end website. The **Order Now** page redirects visitors to external ordering platforms; orders and payments are not processed in this repository.
