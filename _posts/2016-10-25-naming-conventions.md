---
layout: null
title:  "Naming Conventions"
date:   2016-10-25 08:59:23 -0400
categories: structure
weight: 51
---

Certain type of code makes sense to share across all environments you app runs in, and certain types don’t. Any code that doesn’t touch the user interface, such as model objects and services, tends to be usable regardless of your app’s platform. Code that does touch the UI, however, usually needs to be written once for the web, and once for native mobile platforms that do not use the DOM.

The Multi-Platform Starter provides a simple naming convention for handling this scenario. When you need to provide files that are specifically for native mobile environments, include a `.tns.*` in the name of the file. For instance, suppose you wish to provide a different template for a component in your web and native apps. To do that you could create one file named `home.component.html` for your web app, and another file named `home.component.tns.html` for your native apps.

```
<!-- home.component.html -->
<label>Hello World</label>

<!-- home.component.tns.html -->
<Label text="Hello World"></Label>
```

And if you then wanted to style these templates differently, you could create a `home.component.css` file for the web, and a `home.component.tns.css` file for native.

```
/* home.component.css */
/* Make labels blue on the web */
label { color: blue; }

/* home.component.tns.css */
/* Make labels red for native iOS and native Android */
Label { color: red; }
```
