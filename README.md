# Questions Application
A sample project with React and MaterialUI that allows user to retrieve questions from [Apiary Polls example](https://polls.apiblueprint.org/) and cast votes for a specific choice:
- Initial screen shows all available questions.
- Guest select which question to view.
- Guest selects an option and cast her vote for that question.

Application was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It uses [MaterialUI](http://www.material-ui.com/#/get-started/required-knowledge) component library to provide a consistent look and feel and responsiveness to different viewports.

## Dev environment

Application can be run locally by using:
  - `yarn start`

## Application Layout

### Models
 - Questions
Contains wrappers to interact with Polls API with promises

### App
The application loads the questions and manages it in the state and pass properties to its components either a container for the list or a detail for a specific question.

- Container: includes all Questions with an overview.
- Detail: show the details and voting action.

## Limitations

- Uses many ES6 APIs that may need polyfill:fetch API, Object.assign, Array.prototype.find.
- Uses Flexbox for responsiveness.

## Pending work

- Calling VOTE method.
- VIEW for Create an Answer.
- Back button from Details View.
- Show error when API calls fail.
- Add tests for components and API.
