<p align="center">
  <a href="https://tatum.com/">
    <img src="https://tatum.io/images/Light.svg" alt="Logo" width="200" height="100">
  </a>
</p>

<h3 align="center">Tatum Sdk</h3>

<p align="center">
  Tatum Sdk allows browsers and Node.js clients to interact Blockchain.
  <br>
  <a href="https://tatum.io/apidoc"><strong>Documentation</strong></a>
  <br>
  <br>
  <a href="https://github.com/tatumio/tatum-js/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
</p>

<div align="center">

<a href="">[![GitHub license](https://img.shields.io/npm/dm/@tatumcom/js)](https://img.shields.io/npm/dm/@tatumcom/js)</a>
<a href="">[![npm version](https://img.shields.io/npm/v/@tatumcom/js.svg?style=flat-square)](https://www.npmjs.com/package/@tatumcom/js)</a>
<a href="">[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tatumio/tatum-js/blob/master/LICENSE.txt)</a>

</div>
<hr>

## Installation
#### Install using [npm](https://www.npmjs.com/)

```console
npm install @tatumcom/js
```

#### Install using [yarn](https://yarnpkg.com/)

```console
yarn add @tatumcom/js
```

#### Install using [pnpm](https://pnpm.io/)
```console
pnpm install @tatumcom/js
```

## Getting started
Subscribe for any transaction on Ethereum address.
```js
import { TatumSdk } from '@tatumcom/js'

const tatum = await TatumSdk({ apiKey: '<Your API Key>', mainnet: true }).init()

const { data } = await tatum.notification.subscribe.addressTransaction({
  url: '<Your Webhook URL>',
  chain: Chain.ethereum,
  address: '0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990',
})

// 🎉  Now your address is subscribed for any events!
```
## Documentation
Visit https://tatum-technology.readme.io/reference/getting-started-1 to view the full documentation.

## Legacy versions
Older versions of the Tatum Sdk has been moved to long living branches [`Tatum SDK V1`](https://github.com/tatumio/tatum-js/tree/v1) and [`Tatum SDK V2`](https://github.com/tatumio/tatum-js/tree/v2).

## Contributing

Contributions to the Tatum SDK are welcome. Please ensure
that you have tested your changes with a local client and have added unit test
coverage for your code.

### Bugs and feature requests

Have a bug or a feature request? Please first read the issue guidelines and search for existing and closed issues. If your problem or idea is not addressed yet, please open a [new issue]( [please open a new issue](https://github.com/tatumio/tatum-js/issues/new/choose)).
