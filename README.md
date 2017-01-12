# Media Capture from DOM Elements

Documents the use of `captureStream()` to acquire the rendered output of media elements (`<video>` and `<audio>`).

[Editor's Copy](https://w3c.github.io/mediacapture-fromelement)


Notes on bikeshedding :bicyclist:
--------------

To compile `index.bs` into `index.html` , I'm using the online compiler:

```
curl https://api.csswg.org/bikeshed/ -F file=@index.bs -F force=1 > index.html
```

if the produced file has a strange size (i.e. zero, a few KBs), then something went terribly wrong; run instead:

```
curl https://api.csswg.org/bikeshed/ -F file=@index.bs -F output=err
```

and try to figure out why `bikeshed` did not like the `.bs` :'(
