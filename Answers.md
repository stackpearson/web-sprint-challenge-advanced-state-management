1. What problem does the context API help solve?

<!-- Cotnext API helps us access state in any component without having to pass it down through props from parent to child -->

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

<!-- A reducer is a pure function that takes in state and an action. The action’s purpose is to take a slice of state that’s been updated in our app & feed it to the reducer. The reducer can then return a copy of our modified state which replaces the original state in our store. -->

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

<!-- Application state can be accessed anywhere in the application either via props (or other methods). Component state lives within a specific component and cannot be accessed outside of that specific component.

A good time to use component state would be for less important UI information like expandable text drop downs or hiding images on click. App state would be more appropriate for something that needs accessed anywhere in the app such as a user preference like dark mode. -->


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

<!-- Thunk is a middleware that intercepts actions & allows us to manage state in an asynchronous manner instead of the default synchronous actions. It modifies our action-creators to be able to dispatch functions via thunk. -->

1. What is your favorite state management system you've learned and this sprint? Please explain why!

<!-- I really enjoy Context API. It makes accessing and keeping track of state so much simpler to me. I've struggled with props drilling in the past and having a way to avoid going through that hassle is extremely convenient! -->
