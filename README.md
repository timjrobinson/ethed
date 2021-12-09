# EthEd - Ethereum Education

This website was born out of the [Daily Gwei Discord](https://thedailygwei.substack.com/about) as a single place to address Ethereum misinformation.

It is community built and owned, if you have something to add please open a pull request. If you wish to debate or want more clarity, please open an issue.

It is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator + Github Pages + Github Action to auto-build and deploy on changes

## Contributing

You can create new pages in the [docs directory](./docs/) as markdown files. The filename of the page will be it's URL.

If you're new to Github see [this guide](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/) to learn how to open a pull request with your changes.
If you just want to edit a page you can open it on Github and click the edit icon in the top right to make your changes in the online editor. After you're done it will create a pull request with your changes. 
All changes to this repository are made as pull requests so they can be commented on and debated by others.

## Development

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The `main` branch is auto-deployed to `gh-pages` via a [Github Action](./workflows/publish.yml)

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, Tim Robinson has waived all copyright and related or neighboring rights to this work.
