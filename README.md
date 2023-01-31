# VConnect

## Getting started
(Linux and macOS only)

* Install [nvm](https://github.com/nvm-sh/nvm)
```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
* Install [node](https://github.com/nodejs/node)
```
  nvm install --lts
  nvm use --lts
  ```
* Install [yarn](https://github.com/yarnpkg/yarn):
```
npm install --global yarn
```
* Install [docker](https://www.docker.com) and [docker-compose](https://docs.docker.com/compose/install):
```
sudo snap install docker
```
* [Linux only] Configure docker [as a non-root user](https://docs.docker.com/engine/install/linux-postinstall)
* Download the project:
```
git clone https://github.com/vulkan-vconnect/vconnect.git
cd vconnect
```
* Install dependencies:
```
yarn install
```
* Start mobile
```
yarn start:mobile
```
* Start docker
```
yarn start:docker
```

## Environments

* mobile
  * Production:
    ```
    exp://exp.host/@vulkan-vconnect/vconnect
    ```
* desktop:
  * Production:
    ```
     https://vconnectplatform.com 
    ```
* ws:
  * Production:
    ```
    https://vconnectplatform.com:8443
    ```

## Exposing ws
* Install [ngrok](https://github.com/inconshreveable/ngrok):
```
npm install -g ngrok
```

* Create a tunnel (with docker up)
```
ngrok http 3000
```

* Start mobile
```
REACT_NATIVE_HOST_ADDRESS=REPLACE_WITH_PUBLIC_URL yarn start:mobile
```

### Default root account
```
email: root@daitan.com
password: TdgTWEg@#$aE@#!@RTFf
```