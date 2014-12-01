SimpleQueue-Javascript
======================

### How to use ??
```
var q = Queue();
q.add(function() {console.log('one');});
q.add(function() {console.log('two');});


q.drain();
//one
//two

```
This is a simple queue with three methods. add(), drain(), getItems() 

