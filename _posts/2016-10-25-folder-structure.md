---
layout: null
title:  "Folder Structure"
date:   2016-10-25 08:59:23 -0400
categories: structure
weight: 50
---

Now that you have your app up and running, let’s look at where to place folders and files as you build up your applications. At a high level this is what a new project built with the Angular Multi-Platform Starter looks like:

```
.
├── nativescript  <-- your NativeScript app
│   └── ...
├── package.json  <-- npm configuration, including dependencies
├── src
│   └── client    <-- main part of your app code
├── tools         <-- utility scripts used by the starter
│   └── ...
├── tsconfig.json <-- TypeScript configuration
├── tslint.json   <-- TypeScript linting config
└── typings.json  <-- TypeScript typings config
```

Most of the time you’ll be working in the `src/client` folder, which contains a structure that looks something like this:

```
.
├── app
│   └── frameworks
│       ├── core
│       │   └── ...
│       ├── electron
│       │   └── ...
│       └── sample <-- your application code goes here
│           ├── components
│           │   ├── app
│           │   │   ├── app.component.html
│           │   │   ├── app.component.tns.html
│           │   │   ├── app.component.ts
│           │   │   └── app.routes.ts
│           │   ├── home
│           │   │   ├── home.component.html
│           │   │   ├── home.component.tns.html
│           │   │   ├── home.component.ts
│           │   │   ├── home.css
│           │   │   ├── home.routes.ts
│           │   │   └── home.tns.css
│           │   └── index.ts
│           └── ...
├── assets
│   └── ...    <-- image and font assets you wish to use across platforms
└── index.html <-- landing page of your web app
```

In the structure above, the `sample` folder contains the main code of your application. You can rename this folder to the name of your application if you’d like.

The Angular components defined in the `sample/components` folder are used across all three environments that the Multi-Platform Starter supports—web, native, and Electron. If you’d like to split up your code so that different files execute in different environments you have a few different options; the first of these is a simple file naming convention.
