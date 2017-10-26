react-shapeshifter
==================

A React component that is able to render various commonly used button shapes
with only three lines, morphing smootly between shapes using CSS transitions.

Usage
-----

```js
const Shapeshifter = require('react-shapeshifter')

const App = () => (
  <Shapeshifter shape="menu" />
)
```

Props
-----

The component supports the following props:

* `shape`: defines the shape that the button will show. Currently supported
  shapes are as follows:

  * `menu` - a standard "hamburger"-style menu icon

  * `close` - a "close" icon showing an X

  * `left` - left-pointing arrow

  * `right` - right-pointing arrow

  * `up` - up-pointing arrow

  * `down` - down-pointing arrow

* `color`: specifies the color of the component. You can use anything that
  is accepted in CSS for the `background-color` property.

* `thickness`: the thickness of each line in the component.

* `width`: the length of each line in the component when showing the
  "hamburger" icon. It should be set to nine times the thickness if you
  want nice square-shaped buttons.

* `padding`: additional padding around the button, in pixels. The default
  settings produce 48x48 px icons, suitable for touch targets in mobile
  apps.

* `style`: allows you to specify additional CSS properties that will be
  merged into the root tag of the component.

* `onClick`: callback function to call when the user clicks on the
  component.
