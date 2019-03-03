/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  DeckdeckgoEvent,
  DeckdeckgoSlideDefinition,
} from 'deckdeckgo-types';
import {
  EventEmitter,
} from '@stencil/core';
import {
  ConnectionState,
} from './services/communication/communication.service';


export namespace Components {

  interface DeckgoRemote {
    'connect': () => Promise<void>;
    'height': number;
    'length': number;
    'moveDraw': (leftOffset: number, transitionDuration: string) => Promise<void>;
    'nextSlide': () => void;
    'prevSlide': () => void;
    'room': string;
    'server': string;
    'slideTo': (index: number, speed?: number) => Promise<void>;
    'slides': DeckdeckgoSlideDefinition[];
    'width': number;
  }
  interface DeckgoRemoteAttributes extends StencilHTMLAttributes {
    'height'?: number;
    'length'?: number;
    'onEvent'?: (event: CustomEvent<DeckdeckgoEvent>) => void;
    'onState'?: (event: CustomEvent<ConnectionState>) => void;
    'room'?: string;
    'server'?: string;
    'slides'?: DeckdeckgoSlideDefinition[];
    'width'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DeckgoRemote': Components.DeckgoRemote;
  }

  interface StencilIntrinsicElements {
    'deckgo-remote': Components.DeckgoRemoteAttributes;
  }


  interface HTMLDeckgoRemoteElement extends Components.DeckgoRemote, HTMLStencilElement {}
  var HTMLDeckgoRemoteElement: {
    prototype: HTMLDeckgoRemoteElement;
    new (): HTMLDeckgoRemoteElement;
  };

  interface HTMLElementTagNameMap {
    'deckgo-remote': HTMLDeckgoRemoteElement
  }

  interface ElementTagNameMap {
    'deckgo-remote': HTMLDeckgoRemoteElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}