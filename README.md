# gimme-port
Super-small node.js utility to find unused port

```
npm i -g gimme-port
gimme-port
```

```javascript
require('gimme-port')(function(err, port) {
    if (err) console.error(err);
    console.log(port);
});
```
