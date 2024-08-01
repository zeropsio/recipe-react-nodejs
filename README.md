# Zerops x React - Node.js

React is a JavaScript web library for building fast, dynamic full-stack web apps with both server-side rendering and static site generation. <a href="https://zerops.io/" target="_blank">Zerops</a> makes deploying and running React apps, both server-side rendered and static, a breeze.

This recipe showcases the SSR version, see [zeropsio/recipe-react-static](https://github.com/zeropsio/recipe-react-static) for the SSG Static version.

![react](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-react.svg)

<br/>

## Deploy to Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-react-nodejs/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/react-nodejs)

<br/>

## Recipe features
- Latest version of **React + Vite + Express** with SSR running on a load-balanced **Zerops Node.js** service.

<br/>

## Production vs. development
This recipe is ready for production as is, and will scale horizontally by adding more containers in case of high traffic surges. If you want to achieve the highest baseline reliability and resilience, start with at least two containers (add `minContainers: 2` in recipe YAML in the `app` service section, or change the minimum containers in "Automatic Scaling configuration" section of service detail).

<br/>

## Changes made over the default installation
If you want to modify your existing React app to efficiently run on Zerops, follow the steps below:

1. You'll need to setup a [`server.js`](https://github.com/zeropsio/recipe-react-nodejs/blob/main/server.js) file - Make sure you have the used packages check the [package.json](https://github.com/zeropsio/recipe-react-nodejs/blob/main/package.json) to know the used packages.
2. Check the scripts used in [Package.json](https://github.com/zeropsio/recipe-react-nodejs/blob/main/package.json) ~ Make sure you have the following scripts.

Now, just add the [zerops.yml](https://github.com/zeropsio/recipe-react-nodejs/blob/main/zerops.yml) file to the root of your project.

<br/>
<br/>

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
