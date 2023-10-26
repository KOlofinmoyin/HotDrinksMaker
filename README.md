# Hot Drinks Maker

A modelling of the operation of a hot drinks machine.

![hotDrinksMaker](https://github.com/Codecademy/wedding-rsvp-off-platform-project/assets/33905131/1c3352e8-3ae8-4381-b259-db06d3b23947)

## Stories:

```
- As a Tea lover
- I want to order a Lemon Tea drink
- So that I can enjoy my drink
```

```
- As a Coffee lover
- I want to order a Coffee drink
- So that I can enjoy my drink
```

```
- As a Chocolate drink lover
- I want to order a Coffee drink
- So that I can enjoy my drink
```

## Mockups:

![HotDrinksMaker](https://github.com/Codecademy/wedding-rsvp-off-platform-project/assets/33905131/af980c96-dfdd-4c17-ab80-5bf93695baab)

## Running the app:

1. Locate the `index.html`, then either `open with Live Server` or `copy the Full path` and view in browser

## Technologies used:

- HTML
- CSS
- Javascript
- JQuery
- NPM
- Selenium
- Mocha

## Tests:

### To execute tests:

1. Run `npm i`
2. Run `npm install selenium-webdriver`
3. Run `npm install -g mocha`
4. Navigate to the directory where the test script is located **e.g.** `Tests\makeACupOfLemonTea.spec`, then run `mocha makeACupOfLemonTea.spec.js`

### Test Scenarios

```
- Given I am on the Hot Drinks Maker website
- When I select a Lemon Tea drink
- Then my drink progress is displayed
- And my drink is prepared for my enjoyment
```

```
- Given I am on the Hot Drinks Maker website
- When I select a Coffee drink
- Then my drink progress is displayed
- And my drink is prepared for my enjoyment
```

```
- Given I am on the Hot Drinks Maker website
- When I select a Chocolate drink
- Then my drink progress is displayed
- And my drink is prepared for my enjoyment
```

<a href="https://github.com/users/KOlofinmoyin/projects/7/views/1"> _Known issue: Executing tests to 'Make a cup of Lemon Tea', 'Coffee' or 'Chocolate', results in Error: Timeout of 30000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves._ </a>
