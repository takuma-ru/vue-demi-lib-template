# <div style="text-align: center;">vue-demi-lib-template</div>
<!-- <p align="center">
  <img src="/static/icon.png"  width="256" height="256" alt="nuxt-firebase logo">
</p> -->

## Description
UI Library development templates for vue2, vue3, nuxt2, nuxt3 using `vue-demi`

## Features
- [x] Library development projects using vite
- [x] Project for testing with vue3(vite)
- [x] Project for testing with vue2(nuxt)
- [ ] Template project for library documentation (nuxt3)
- [ ] Enable development with `tsx`
- [ ] Automatic update of test projects
- [ ] Introduction of storybook
- [ ] Introduction of jest (in test project)

## Dependencies / DevDependencies
<details>
  <summary>
    package/lib
  </summary>
  <table>
    <thead>
      <tr>
        <th colspan="1">name</th>
        <th colspan="1">version</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>@vueuse/core</td>
        <td>8.9.4</td>
      </tr>
      <tr>
        <td>vue-demi</td>
        <td>^0.13.11</td>
      </tr>
      <tr>
        <td>@vue/composition-api</td>
        <td>^1.7.0</td>
      </tr>
      <tr>
        <td>eslint</td>
        <td>^8.23.1</td>
      </tr>
      <tr>
        <td>sass</td>
        <td>^1.53.0</td>
      </tr>
      <tr>
        <td>vite</td>
        <td>^3.1.0</td>
      </tr>
      <tr>
        <td>vite-plugin-css-injected-by-js</td>
        <td>^1.5.1</td>
      </tr>
      <tr>
        <td>vue-tsc</td>
        <td>^1.0.8</td>
      </tr>
      <tr>
        <td>vue</td>
        <td>^3.2.37</td>
      </tr>
      <tr>
        <td>vue2</td>
        <td>^2.6</td>
      </tr>
      <tr>
        <td>vue2.7</td>
        <td>^2.7.10</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>
    examples/nuxt2.6
  </summary>
  <table>
    <thead>
      <tr>
        <th colspan="1">name</th>
        <th colspan="1">version</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>@nuxtjs/composition-api</td>
        <td>^0.33.1</td>
      </tr>
      <tr>
        <td>eslint</td>
        <td>^8.24.0</td>
      </tr>
      <tr>
        <td>nuxt</td>
        <td>^2.15.8</td>
      </tr>
      <tr>
        <td>vue</td>
        <td>^2.6.14</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>
    examples/vue3
  </summary>
  <table>
    <thead>
      <tr>
        <th colspan="1">name</th>
        <th colspan="1">version</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>vue</td>
        <td>^3.2.37</td>
      </tr>
      <tr>
        <td>vite</td>
        <td>^3.1.0</td>
      </tr>
      <tr>
        <td>vue-tsc</td>
        <td>^0.40.4</td>
      </tr>
    </tbody>
  </table>
</details>

## Getting Started

#### 0. Click to "Use this template"
[![use-this-temp-button](https://user-images.githubusercontent.com/49429291/202691047-cdf8ce37-1be6-47fa-898c-f143b2773aca.png)](https://github.com/takuma-ru/vue-demi-lib-template/generate)

#### 1. Install node_modules
```md
yarn
```

#### 2. Build Library
Because of the use of "--watch", files are automatically rebuilt when they are modified.
Automatically generates `.d.ts` files.
```md
yarn dev:lib
```

#### 3. Test for `vue3`
Automatically installs dependencies and starts the server.
```md
yarn dev:3
```
Access to [localhost:3030](http://localhost:3030/)

#### 3. Test for `vue2.6`
Automatically installs dependencies and starts the server.
```md
yarn dev:2.6
```
Access to [localhost:3020](http://localhost:3020/)

## Deploy Service
none

## ScreenShot
none

----

<!-- I would appreciate it if you would not delete this statement -->
**This template was created by [@takuma-ru](https://github.com/takuma-ru)**
