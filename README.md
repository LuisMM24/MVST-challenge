# Github Repositories MVST Challenge

This project was done for a technical challenge to MVST.
It's based in github, basically you can filter the repositories of the current user profile

> Project built with:

- React
- React-testing-library
- Typescript
- CSS
- Storybook

> Atomic design

This project was done using an atomic design, which components folder have specific structure:

    .
    ├── components                  # This folder stores all the components.
    │   ├── atoms                   # Small components, like buttons or inputs.
    │   ├── molecules               # Containers or wrappers
    │   └── organism                # These components are sections of the page
    └── ...


## How to run the project

> This project has been deployed in Netlify: <a href="https://62ab0083fbd3a9681e0ccf33--imaginative-granita-e4a4e5.netlify.app/">Press here to visit it</a>

```
/* Install the dependencies */

npm install

/* Run the project*/

npm run start

/* Run storybooks */

npm run storybook

```



## How to execute the test suite

```
/* Run all tests */

npm run test src/

/* Run testing coverage */

npm run coverage src/

```

## Future improvements

- Improve the query system with Graphql using the github v4 API
- You should see the entire user profile, navigate between the overview, repos, projects, packages, etc.
- Integration testing
- Improve the filter system, you can filter by lastest commited projects, by language, or sort by name.

## Feedback

In my opinion, this challenge helped me to:

- Understand better how the RTL (React-testing-library) works
- Improve my knowledge of atomic design and abstraction of components.

To do this challenge you need to know the principles and basics of React and the API's REST

Thanks to MVST for giving me the opportunity to do this challenge, it was an incredible experience.
