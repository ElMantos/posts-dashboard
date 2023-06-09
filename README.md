# Posts dashboard

# Starting application

1. Run `npm install`
2. Run `npm run start` - This will start application locally

# Building production ready app

1. Run `npm install`
2. Run `npm run build`
3. Build will be located in `<rootDir>/build` directory

# Features

- User can see a list of posts
- Posts can be re-ordered by draging and dropping
- Upon clicking on post a modal will open. It will show user the name of post author
- Bar chart shows top 5 post creators
- Button that will throw error to show how ErrorBoundary component will catch error and display custom component

# Modules and import aliases

- Modules and import aliases are created with the help of `@craco/craco` package by adding webpack aliases. Upon creating new module it needs to be added to `aliases.js` file as well as included in `tsconfig.paths.json` file

# State management

- Basic, component level state management is done with hooks
- API data is managed with react-query, this helps us with caching, optimistic UI, error handling and other API state related things

# Error handling

- API error handling is done with the help of react-query hooks, rendering component level errors if they occur
- HOC `withModuledErrorBoundary` prevents application from breaking if any single feature encounters error. Other features should keep working as intended

# Some other improvements to dev experience could be made...

- standardised eslint and prettier rules
- added pre-commit hooks to run code linter/tests
- added commit-lint to ensure standard naming/description practices

# Things to keep in mind while using dashboard...

- After typing into autocomplete input, there is .5sec debounce to prevent API throttling. This is done to simulate real-life search input with bigger datasets that cannot be received in one request due to size or how long it would take for request to go through. However, the provided API will not find user if only some part of the name is provided and it may look like a bug, but its not - it has to be full name.
- Sorry about poor desing :D
