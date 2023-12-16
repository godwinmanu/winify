<p align="center">
  <a href="https://github.com/godwinmanu/winify">
    <img src="https://github.com/godwinmanu/winify/raw/main/assets/winify.png" alt="Winify logo"/>
  </a>
</p>

<h1 align="center">Build modern applications with reusable components based on web components 🚀</h1>
<br />

<div align="center">
    <img src="https://badgen.net/npm/v/winify" alt="NPM Version" />
  <img src="https://badgen.net/bundlephobia/minzip/winify" alt="minzipped size"/>
</div>

<br />

Winify is an innovative UI component library, framework-agnostic and based on [Lit](https://lit.dev/) technology. Its distinctive feature lies in the exclusive utilization of web components, ensuring a modular and efficient web development experience.

## Table of contents

<!-- - 📋 [Documentation](#documentation) -->

- 🚀 [Features](#features)
- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
<!-- - 📚 [CodeSandbox Templates](#codesandbox-templates) -->
- 📝 [Contributing](#contributing)
<!-- - 💖 [Support](#support-winify) -->
- ✨ [Contributors](#contributors)

<!-- ## Documentation

It's the https://chakra-ui.com website for the latest version of Chakra UI. For
older versions head over here

- v1: https://v1.chakra-ui.com
- v0: https://v0.chakra-ui.com
 -->

## Features

- 🔩 **Easily Customizable**
- 🖱 **Flexible & Reusable** - _Winify components are built on top of Lit to allow interoperability_
- 🕊 **Lightweight** <!-- - _less than 10kb including styles_ -->
- 😍 **Framework-agnostic** - _Web components are designed to be framework agnostic, meaning they can be used with any framework or library, or on their own, without requiring additional dependencies_

## Installation

To use winify components, all you need to do is install the
`winify` package.

According to the package manager you use, use the suitable command line:

```sh
# with Yarn
$ yarn add winify

# with npm
$ npm i winify

# with pnpm
$ pnpm add winify

# with Bun
$ bun add winify
```

## Usage

Once installed, you can import the necessary web components into your application. Here are different ways to use components according to your frontend framework or library.

**Note** : _Winify web components follow a naming convention. They start with "w-" followed by the component name, with the exception of React._

## In a React project

For React, use the component with a capital letter and without the "w-" prefix:

```jsx
import { Button } from "winify";

// Use the Button component
function App() {
  return <Button>My Button</Button>;
}
```

## In other frameworks/libraries (Vuejs, Angular) or in Vanilla JavaScript

For other frameworks, use the lower-case prefix "w-":

```javascript
import { w-button } from "winify";

<w-button>My Button</w-button>
```

## Components can take attributes. For example, for the button:

```javascript
<w-button variant="outline">My Button</w-button>
<w-button loading>My Button</w-button>
```

## Contributing

Your contribution is welcome! Here's how you can participate in the development of Winify:

- Report issues: If you find a bug or have an improvement idea, please [create an issue](https://github.com/godwinmanu/winify/issues) on our GitHub page.

- Propose enhancements: Do you have ideas for new components or additional features? Let us know on [GitHub](https://github.com/godwinmanu/winify).

- Submit pull requests: If you are familiar with the code, feel free to submit pull requests to fix issues or add features.

- Share and support: Share Winify with other developers and give it a ⭐ on [GitHub](https://github.com/godwinmanu/winify) if you appreciate it.
