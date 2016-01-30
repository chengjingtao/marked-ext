# marked-ext
Extend for github.com/chjj/marked. Support flowchart and sequence chart


# surport
flow  chart syntax http://flowchart.js.org/
```flow
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
        

```
sequence chart syntax  https://bramp.github.io/js-sequence-diagrams/
```seq
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!

```

# Thanks 
Many thanks to  
- [marked](https://github.com/chjj/marked)
- [js-sequence-diagrams](http://bramp.github.io/js-sequence-diagrams/)
- [flowchart.js](https://github.com/adrai/flowchart.js)


