/**
 * Actions can return an object containing the two properties defined in this interface. Both are optional.
 * - update: An action can have a parameter. This method will be called whenever that parameter changes,
 *   immediately after Svelte has applied updates to the markup.
 * - destroy: Method that is called after the element is unmounted
 *
 * Additionally, you can specify which additional attributes and events the action enables on the applied element.
 * This applies to TypeScript typings only and has no effect at runtime.
 *
 * Example usage:
 * ```ts
 * interface Attributes {
 * 	newprop?: string;
 *	'on:event': (e: CustomEvent<boolean>) => void;
 * }
 *
 * export function myAction(node: HTMLElement, parameter: Parameter): ActionReturn<Parameter, Attributes> {
 *   // ...
 *   return {
 *     update: (updatedParameter) => {...},
 *     destroy: () => {...}
 *   };
 * }
 * ```
 *
 * Docs: https://svelte.dev/docs#template-syntax-element-directives-use-action
 */
interface ActionReturn<Parameter = any, Attributes extends Record<string, any> = Record<never, any>> {
    update?: (parameter: Parameter) => void;
    destroy?: () => void;
    /**
     * ### DO NOT USE THIS
     * This exists solely for type-checking and has no effect at runtime.
     * Set this through the `Attributes` generic instead.
     */
    $$_attributes?: Attributes;
}
/**
 * Actions are functions that are called when an element is created.
 * You can use this interface to type such actions.
 * The following example defines an action that only works on `<div>` elements
 * and optionally accepts a parameter which it has a default value for:
 * ```ts
 * export const myAction: Action<HTMLDivElement, { someProperty: boolean }> = (node, param = { someProperty: true }) => {
 *   // ...
 * }
 * ```
 * You can return an object with methods `update` and `destroy` from the function and type which additional attributes and events it has.
 * See interface `ActionReturn` for more details.
 *
 * Docs: https://svelte.dev/docs#template-syntax-element-directives-use-action
 */
interface Action<Element = HTMLElement, Parameter = any, Attributes extends Record<string, any> = Record<never, any>> {
    <Node extends Element>(node: Node, parameter?: Parameter): void | ActionReturn<Parameter, Attributes>;
}

declare type ParticleShape = 'mix' | 'circles' | 'rectangles';
declare type ConfettiOptions = {
    /**
     * Number of confetti particles to create
     *
     * @default 150
     */
    particleCount?: number;
    /**
     * Shape of particles to use. Can be `mix`, `circles` or `rectangles`
     *
     * `mix` will use both circles and rectangles
     * `circles` will use only circles
     * `rectangles` will use only rectangles
     *
     * @default 'mix'
     */
    particleShape?: ParticleShape;
    /**
     * Size of the confetti particles in pixels
     *
     * @default 12
     */
    particleSize?: number;
    /**
     * Duration of the animation in milliseconds
     *
     * @default 3500
     */
    duration?: number;
    /**
     * Colors to use for the confetti particles. Pass string array of colors. Can use hex colors, named colors,
     * CSS Variables, literally anything valid in plain CSS.
     *
     * @default ['#FFC700', '#FF0000', '#2E3191', '#41BBC7']
     */
    colors?: string[];
    /**
     * Force of the confetti particles. Between 0 and 1. 0 is no force, 1 is maximum force.
     *
     * @default 0.5
     */
    force?: number;
    /**
     * Height of the stage in pixels. Confetti will only fall within this height.
     *
     * @default 800
     */
    stageHeight?: number;
    /**
     * Width of the stage in pixels. Confetti will only fall within this width.
     *
     * @default 1600
     */
    stageWidth?: number;
    /**
     * Whether or not destroy all confetti nodes after the `duration` period has passed. By default it destroys all nodes, to preserve memory.
     *
     * @default true
     */
    destroyAfterDone?: boolean;
};
declare const confetti: Action<HTMLElement, ConfettiOptions>;

export { ConfettiOptions, ParticleShape as ConfettiParticleShape, confetti };
