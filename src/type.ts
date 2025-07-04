import { ReactElement, ReactNode, ReactPortal } from "react";

export type ReducedReactNode = Exclude<ReactNode, string | number | boolean | ReactPortal | Iterable<ReactNode>>;
export type ReducedReactNodeWithBoolean = Exclude<ReactNode, string | number | ReactPortal | Iterable<ReactNode>>;

type InternalUI5WCSlotsNode =
    | ReducedReactNode
    | Iterable<ReducedReactNode>
    | false
    | ReactElement /* necessary for React v16 & v17 ReactNode type*/;

export type UI5WCSlotsNode = InternalUI5WCSlotsNode | InternalUI5WCSlotsNode[];


export interface Ui5CustomEvent<EventTarget = HTMLElement, Detail = never>
    extends Omit<CustomEvent<Detail>, 'target' | 'currentTarget'> {
    target: EventTarget;
    currentTarget: EventTarget | null;
}
