## react-freeze-v12n

Simple virtualization library with [react-freeze](https://github.com/software-mansion-labs/react-freeze) and intersection observer.

### Motivation

One use case for virtualization is rendering components just inside the window.

Virtualization libraries such as [react-window](https://github.com/bvaughn/react-window) or [
react-virtualized](https://github.com/bvaughn/react-virtualized) can do this, but they require a lot of complexity for what you want to do.

React Freeze freezes the rendering the components instead of unmounting.
This library combines this approach and intersection observer to virtualize the components.

### Usage

You just wrap components.

```jsx
import React from "react";
import { Virtualization } from "react-virtualization-v12n"

const Component = () => {
  return <Virtualization><SomeItem></Virtualization>;
}
```

You also can set intersection observer options.

```jsx
const Component = () => {
  return (
    <Virtualization intersectionOptions={{
      /* Optional options */
      threshold: 0,
    }}>
      <SomeItem>
    </Virtualization>
  );
};
```
