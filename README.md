# Accessible website navigation

## [Codepen demo](https://codepen.io/siggrid-the-styleful/full/YzWaoWr)

Website navigation is implemented as unordered lists of links wrapped in a navigation landmark. Each top level element of navbar is a button that controls visibility of dropdown content (list of links).


**Styling:** default visual focus indicator(outline) is replaced with the hover-state styles. Tabbing through the navbar looks the same as when hovering over each element with a mouse. There is a visual indicator of show/hide state, that also helps to alert users that activating the button will display additional(hidden) content.


**Keyboard users:** show/hide state of a dropdown is triggered by activating the button (with Enter or Spacebar key). Users don’t have to tab through all the links before they reach an actual target. Pressing the Escape key closes the dropdown and restores focus to the corresponding button. Moving focus out of the navigation region also closes an open dropdown.


**Mouse users:** show/hide state of a dropdown is triggered by activating the button (mouse-click). Clicking outside the dropdown region closes open dropdown. Hover is not used here, because it might frustrate users if action is triggered by accident.


**Screen reader users:** button has an `“aria-expanded”` attribute, its value is toggled by script from `“true”`(dropdown open) to `“false”`(dropdown closed). Screen reader announces the state of the button as “expanded” and “collapsed” respectively.
