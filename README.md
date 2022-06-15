# Github Repositories MVST Challenge

This project was done for a technical challenge to MVST.
It's based in github, basically you can filter the repositories of the current user profile

- Atomic design

This project was done using an atomic design, which components folder have specific structure:

    .
    ├── components                  # This folder stores all the components.
    │   ├── atoms                   # Small components, like tags, title or descriptions
    │   ├── molecules               # Containers or wrappers, in this case will be the card component.
    │   └── organism                # These components are sections of the page , in this case will be the ScrollBox
    └── ...


## How to run the project

- This project is deployed in:

```
/* Install the dependencies */
npm install

/* Run the project*/
npm run start

```

##How to execute the test suite

```
/* Run all tests */
npm run test

/* Run testing coverage */
npm run test--coverage

```

