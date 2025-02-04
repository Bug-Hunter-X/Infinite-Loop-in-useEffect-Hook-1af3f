```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: This will cause an infinite loop because the state is updated inside the effect
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```