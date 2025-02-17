## Machine Coding Round Question: Sortable and Searchable List

**Task:** Create a React component that displays a list of users with the following features:

1. **Sorting:** The list should be sortable by "Name" (ascending and descending) and "Age" (ascending and descending).
2. **Searching:** Implement a search bar that filters the list based on the user's input (searches by name). The search should be case-insensitive.
3. **Data Fetching (Optional):** For a more advanced implementation, fetch the user data from an API endpoint (you can provide a mock API or use a public API like JSONPlaceholder). If you don't fetch data, you can hardcode a sample user list in your component.

**Data Structure:** Each user object in the list should have at least the following properties:

```javascript
{
  id: 1,
  name: "John Doe",
  age: 30,
  // ... other properties if needed
}
```

**Requirements:**

- Use functional components and hooks.
- Implement clear and concise code with good naming conventions.
- Handle potential edge cases (e.g., empty list, invalid search input).
- Consider performance optimization for large lists (if implementing data fetching). (e.g., debouncing the search input).

**Bonus:**

- Add pagination to the list if the data is large.
- Implement visual cues (e.g., icons) to indicate the current sorting order.

**Example Interaction:**

- The initial list should display all users in the default order (you can choose the default order).
- Clicking on the "Name" header should sort the list by name in ascending order. Clicking again should toggle to descending order.
- Clicking on the "Age" header should sort the list by age in ascending order. Clicking again should toggle to descending order.
- Typing in the search bar should filter the list to show only users whose names match the search term.

---
