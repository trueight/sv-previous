# SV Previous

A simple [Svelte 5](https://svelte.dev/) library to track the previous value of a variable using the power of [Runes](https://svelte.dev/docs/svelte/what-are-runes). 

you can see a simple demo at [SV Previous](https://sv-previous.vercel.app/) website, or test it in the [Svelte Playground](https://sv-previous.vercel.app/).

a storybook is also available at [Storybook SV Previous](https://storybook.sv-previous.vercel.app/).

## Installation

#### To install the library, you can use one of the following commands:

```bash
npm install @trueight/sv-previous
```
```bash
pnpm add @trueight/sv-previous
```
```bash
yarn add @trueight/sv-previous
```
```bash
bun add @trueight/sv-previous
```	

## Usage

Here is an minimal example of how to use the `Previous` library:

```svelte
<script lang="ts">
  import { Previous } from '@trueight/sv-previous'
  let value = $state('')
  const previous = new Previous(() => value)
</script>

<div>
  <p>{previous.previous}</p>
  <p>{previous.current}</p>
  <input bind:value={value} />
</div>
```
see it in the [Svelte Playground](https://sv-previous.vercel.app/).

## Features

- **Easy to use, powerful to work with.**
- **Tracks the current and previous value of a variable.**
- **Allows manual setting of previous values.**
- **Supports limits on the number of tracked values.**
- **Create a history of previous values that can be accessed and modified.**

## Contribution

you can contribute to the project in two ways:
- reporting issues
- making a pull request

if you want to make a pull request, please make sure to open an issue first to discuss the changes you wish to make.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details and feel free to make anything you want with this code.

