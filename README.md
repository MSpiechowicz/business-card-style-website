# Business Card Website

This is a basic business card website that you can use as a template for your personal website. It is built using React and Vite.

## Installation

To install the project, clone the repository and run the following command:

```bash
yarn install
```

Project is following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Development

To start the development server, run the following command:

```bash
yarn dev
```

## Configuration

In case you would like to modify the default variables, you can do so by updating the .env.example file and adjusting it to your needs (remember to remove the *.example* extension inside the filename and remove the github ignore rule or move entire variables to your CI/CD pipeline). Below is a list of available variables.

| Variable                                | Description                                                     |
|-----------------------------------------|-----------------------------------------------------------------|
| VITE_APP_TITLE                          | The title of the website                                        |
| VITE_APP_ICON                           | The path to the icon of the website                             |
| VITE_APP_BACKGROUND_COLOR               | The background color of the website                             |
| VITE_APP_BUSINESS_CARD_PRIMARY_COLOR    | The primary color of the business card                          |
| VITE_APP_BUSINESS_CARD_SECONDARY_COLOR  | The secondary color of the business card                        |
| VITE_APP_BUSINESS_CARD_TITLE            | The title of the business card                                  |
| VITE_APP_BUSINESS_CARD_SUB_TITLE        | The subtitle of the business card                               |
| VITE_APP_BUSINESS_CARD_INITIALS         | The initials of the business card                               |
| VITE_APP_BUSINESS_CARD_MOTTO            | The motto of the business card                                  |
| VITE_APP_BUSINESS_CARD_VERSION          | The version of the business card (number of the version)        |
| VITE_APP_BUSINESS_CARD_LINKEDIN         | The LinkedIn link of the business card                          |
| VITE_APP_BUSINESS_CARD_GITHUB           | The GitHub link of the business card                            |
| VITE_APP_BUSINESS_CARD_EMAIL            | The email of the business card                                  |
| VITE_APP_BUSINESS_CARD_PHONE            | The phone number of the business card                           |
| VITE_APP_BUSINESS_CARD_WEBSITE          | The website address of the business card                        |

In case you would like to modify the default assets for the corresponding version of the Business Card, you have to go into the `public` folder and replace the files. It is always best idea to minify the images before replacing them.

## Business Card Versions

Currently available versions of the Business Card are:

- **version 1**

![Business Card Version 1](public/examples/bs_v1.png)

- **version 2**

![Business Card Version 2](public/examples/bs_v2.png)

- **version 3**

![Business Card Version 3](public/examples/bs_v3.png)

- **version 4**

![Business Card Version 4](public/examples/bs_v4.png)

### Github Actions

The project is using Github Actions for CI/CD. The workflow is triggered on every push to the main branch. The workflow is defined in the `.github/workflows/release.yml` file.

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
