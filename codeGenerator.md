# Code generator

Ideally, we would like all projexts to be set up the same way.
Within each project, we would like all the parts to also be the same.

This way we have only one approach to learn.

We use code scaffolding technics to help saving time and also to get that consistency happening.

This project uses 2 code generators.


The second one is called plop. It is used to create element within each project.

## Creating new components using plop

### Using plop:

```
  npm run plop
```

This will call plop inside your project.

Plop will then ask you the kind of element you want to create:

- Page - Add a page template to the app
- Styleguide - Add a component to the app
- Partial - Add a partial to the app
- FED react module - Add a component to the app
- FED react component - Add a component to the app

Plop will then ask where you wnt the new component to be created.

> When creating a new styleguide page or a static page, you might have to restart your server. The resson is that the file listener, reponsiblke for creating the new HTML page,  does not yet know that a new file has been created. Restarting the server will ensure that your file system is re-scanned.

### Types of component

#### Page

This is a normal page that mocks a page on the website.
It is a static representation of the site you are working on (ex: homepage, landing page, general page, contact us etc.)

#### Styleguide

This is a styleguide page.
Ideally, any new component should have some sort of styleguide page to stage it.
If you use a styleguide for each of your component, then it will ensure that your component is documented.

#### Partial

A partial is an HTML component. It has an associated sass file.
All your component should be a re-usable partial.

#### FED react module

This is a module that will be run by your browsers only.
You use that for building webapps.

#### FED react component

This is a partial for front end code only.
