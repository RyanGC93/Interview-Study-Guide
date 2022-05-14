# Time Of Array Methods 

<details>
<summary>Resources</summary>

https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168

</details>
<details>
<summary>Quick View</summary>

1. **push**  O(1)  
2. **pop**   O(1) 
3. **shift**   O(N) 
4. **slice**   O(N) 
5. **splice**  Worst O(N) 
6. **sort**  Average O(N log N), Can be O(N^2) depending on engine

</details>

<details>
<summmary> Explanation </summary>

`push` is _O(1)_, however, in practice it will encounter an _O(N)_ copy costs at engine defined boundaries as the slot array needs to be reallocated. These boundaries are typically logarithmic.

`pop` is _O(1)_ with a similar caveat to `push` but the _O(N)_ copy is rarely encountered as it is often folded into garbage collection (e.g. a copying collector could only copy the used part of an array).

`shift` is at worst _O(N)_ however it can, in specially cases, be implemented as _O(1)_ at the cost of slowing down indexing so your mileage may vary.

`slice` is _O(N)_ where _N_ is `end - start`. Not a tremendous amount of optimization opportunity here without significantly slowing down writes to both arrays.

`splice` is, worst case, _O(N)_. There are array storage techniques that divide _N_ by a constant but they significantly slow down indexing. If an engine uses such techniques you might notice unusually slow operations as it switches between storage techniques triggered by access pattern changes.

One you didn't mention, is `sort`. It is, in the average case, _O(N log N)_. However, depending on the algorithm chosen by the engine, you could get _O(N^2)_ in some cases. For example, if the engine uses QuickSort (even with an late out to InsertionSort), it has well-known _N^2_ cases. This could be a source of DoS for your application. If this is a concern either limit the size of the arrays you sort (maybe merging the sub-arrays) or bail-out to HeapSort.

</details>