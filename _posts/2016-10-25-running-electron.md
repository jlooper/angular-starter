---
layout: null
title:  "Electron"
date:   2016-10-25 08:59:23 -0400
categories: running-your-apps
weight: 5
---

The Multi-Platform Starter also has support for Electron built in. You can start your app up on Electron using the `npm run start.desktop` command on Macs, and `npm run start.desktop.windows` on Windows.

```bash
npm run start.desktop
npm run start.desktop.windows
```

With your app running, use the `npm run start.livesync.desktop` (Mac) or `npm run start.livesync.desktop.windows` (Windows) command to set up a file watcher, which will watch for changes and apply them to your desktop application.

```bash
npm run start.livesync.desktop
npm run start.livesync.desktop.windows
```