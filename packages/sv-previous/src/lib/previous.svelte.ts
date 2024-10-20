/**
 * A simple library to track the previous value of a variable.
 * made by trueight for svelte 5
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *   import { Previous } from 'sv-previous'
 *   let value = $state('')
 *   const previous = new Previous(() => value)
 * </script>
 * 
 * <div>
 *   <p>{previous.previous}</p>
 *   <p>{previous.current}</p>
 *   <input bind:value={value} />
 * </div>
 * ```
 */

export class Previous {
  #history: (string | number | boolean)[] = $state([])

  /**
   * @param current - The current value that will be tracked.
   * @param limit - The limit of the tracked history.
   */
  constructor(current: () => string | number | boolean, limit: number = 2) {
    this.trackPrevious(current, limit)
  }

  private trackPrevious(current: () => string | number | boolean, limit: number) {
    $effect(() => {
      if (this.#history[this.#history.length - 1] !== current()) {
        this.#history.push(current())
      }

      if (this.#history.length > limit) {
        this.#history.shift()
      }
    })
  }

  /**
   * Returns the current value.
   */
  get current() {
    return this.#history[this.#history.length - 1]
  }

  /**
   * Returns the previous value.
   */
  get previous() {
    return this.#history[this.#history.length - 2]
  }

  /**
   * You can set the previous value for some reason.
   * @param value - The value to set.
   */
  set previous(value: string | number | boolean) {
    this.#history[this.#history.length - 2] = value
  }

  /**
   * Returns the previous value based on the offset.
   * The history parameter must be greater or equal to offset to generate a value.
   * @param offset - The offset of the previous value. Default: 2.
   */
  getPrevious(offset: number = 2) {
    return this.#history[this.#history.length - offset]
  }

  /**
   * You can set the previous value for some reason.
   * @param value - The value to set.
   * @param offset - The offset of the previous value. Default: 2.
   */
  setPrevious(value: string | number | boolean, offset: number = 2) {
    this.#history[this.#history.length - offset] = value
  }
}
