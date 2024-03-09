## Props
- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.
  - It is like html attributes but we can pass any JS value through them, including objects,array and functions.
  
### Familiar Props
- Props are the information that we pass to a JSX tag. For ex, *className*, *src*, *alt*, *width* and *height* are some of the props we can pass to an `<img>`
- The props we can pass to and `<img>` tag are predefined. But we can pass any props to our own components to customize them.

### Passing props to a component
- Passing props to a child component. Two props are passed `person` and `size`.
```
export default function Profile() {
  return (
    <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100}/>
  );
}
```
- Read props inside the child component. Using Destructuring
```

```