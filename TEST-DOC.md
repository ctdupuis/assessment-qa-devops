# Test Planning

## Bug Reports

- See All Bots does not correctly fetch from the backend, causing it not to render in browser

- Winning a game records the win in the losses column

## Test Plan

#### See All Bots Button

- Checking the terminal after pressing the button alerts me that `botsArr` is not defined. This leads me to assume that there is an undeclared variable somewhere in the route that needs to be adjusted in order for the button to function properly

#### Loss Recording

- Since a win records in the loss column, I can think of a few places to inspect. The first place I'd look is in `index.js`, finding the method that records wins and losses and making sure its persisting the correct data. If that looks clean, I'd move to the `server.js` route that processes the request and check there. If that passes, the bug would most likely be back in `index.js` inside the method that renders wins and losses

## Suggested Changes

- Not a bug, but maybe have the Draw button also render the text "Choose 2" so that way the user doesn't see "Draw 2" when they land on the page and get confused

- Include a toggle or another button to hide bots after clicking the button to display them

- Have the bots render side-by-side in a full window so the user doesn't have to scroll down to view each individual bot