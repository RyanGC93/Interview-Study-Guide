# Hash

Overview:
- Hash tables are used to store key-value pairs.

What Makes a Hash Table Good?
- Hash tables are fast to search.
- Doesn't cluster outputs at specific indices but rather clusters them in buckets.
- Deterministic.(Same input always returns same output)

```js
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

```

Dealing with collisions:
- Linear probing.
  - With linear probing, when a collision occurs, the next available slot is used.
- Separate chaining.
  - With seperate chaining, at each index, we can store a more sophisticated data structure. (array, linked list, etc.)

# Hash Table Class Implementation

```js
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
}

```

# Time and Space Complexity

| Data Structure | Access (avg) | Search (avg) | Insertion (avg) | Deletion | Access (worst) | Search (worst) | Insertion (worst) | Deletion (worst) | Space Complexity (worst) |
|------|--------------|--------------|-----------------|----------|----------------|----------------|-------------------|------------------|--------------------------|
| Hash | N/A          | Θ(1)         | Θ(1)            | Θ(1)     | N/A            | O(n)           | O(n)              | O(n)             | O(n)                     |

