import { createElement, Component, render } from './toy-react';

class MyComponent extends Component {
  render() {
    const children = this.children;
    
    return (
      <div>
        <div>my component</div>
        {children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
  </MyComponent>, document.body);