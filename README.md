# string2tree

convert string array to tree

[![Build Status](https://travis-ci.org/stevennuo/string2tree.svg?branch=master)](https://travis-ci.org/stevennuo/string2tree)

## Example
``` javascript
string2tree({
    "a.b.c.d":val,
    "a.b": obj,
    "a.b.e": func,
    "f.g": array
  }
);

output:{
  "a":{
    "b":{
      "c":{
        "d":{
          "_v": val
        }
      },
      "_v": obj,
      "e":{
        "_v": func
      }
    }
  },
  "f":{
    "g":{
      "_v": array
    }
  }
}
```

## To begin
* install
``` bash
$ npm install string2tree --save
```
* require & use
``` javascript
const string2tree = require('string2tree')

string2tree({
    "a.b.c.d":val,
    "a.b": obj,
    "a.b.e": func,
    "f.g": array
  }
);
```