## React Preloaders Plugin
[![NPM version](https://badge.fury.io/js/react-preloaders.svg)](http://badge.fury.io/js/react-preloaders)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

it's fastest way to add nice preloader to your application.
#### [vamosgs.github.io/react-preloaders](https://vamosgs.github.io/react-preloaders/demo/)

### Setup
Install it:
```bash
npm install react-preloaders --save
```
or
```bash
yarn add react-preloaders --save
```

### Get Started
#### find full preloaders list [here](https://vamosgs.github.io/react-preloaders/demo/).
```jsx
import Lines from 'react-preloaders/Preloaders/Lines';

class App extends Component {
    render () {
        return (
            <Lines
            color={'#f7f7f7'} //Default #2D2D2D
            bgColor={'#222'} //Default #F7F7F7
            time={1400}/> //Default #1300

            <YourApp/>
        )
    }
}
```
#### Add this to your webpack if you don't have css loader yet
```js
  {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
  }
```
### Properties (Props)
<table>
  <tr>
    <th>Props -> </th>
    <th>Color</th>
    <th>bgColor</th>
    <th>Time</th>
  </tr>
  <tr>
    <th>type</th>
    <td>String(rgb, hex ...)</td>
    <td>String(rgb, hex ...)</td>
    <td>Number(Milliseconds)</td>
  </tr>
  <tr>
    <th>Default Value</th>
    <td>#2D2D2D</td>
    <td>#F7F7F7</td>
    <td>1300ms</td>
  </tr>
</table>

