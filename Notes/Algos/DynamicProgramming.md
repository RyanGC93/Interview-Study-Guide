# Dynamic programming

- Most of the time, we can solve a problem with dynamic programming in two ways
  - Memoization **(top-down)**
  - Tabulation **(bottom-up)**


### Memoization

- Memoization is a technique to solve a problem in a way that can be used to solve the same problem in the future.
- There are two features that compromise memoization:
    - the function is recursive
    - the additional data is stored in a memo object

- Performance
  - Time complexity >> **O(n)**
  - Space complexity >> **O(n)**


### Tabulation

- Tabulation is a technique to solve a problem in a way that can be used to solve the same problem in the future.
- There are two features that compromise tabulation:
    - the function is not recursive and iterative
    - the additional data is stored in a table

- Performance
  - Time complexity >> **O(n)**
  - Space complexity >> **O(n)**
    - Can be refactored to **O(1)**