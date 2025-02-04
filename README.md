# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: creating an infinite loop within the `useEffect` hook.

## Bug Description

The `bug.js` file contains a component that attempts to update its state (`count`) within the `useEffect` hook without proper dependency management. This leads to an infinite loop, as the state change triggers a re-render, which in turn triggers the `useEffect` again, resulting in a continuous cycle of state updates.

## Solution

The `bugSolution.js` file provides a corrected version of the component. The problem is solved by correctly managing the dependencies in the useEffect function to avoid infinite loops. The solution employs the concept of functional updates in the `setCount` function, ensuring that state updates are based on the previous value.