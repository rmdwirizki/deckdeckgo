import {Component, Element, Prop, State, h} from '@stencil/core';

import {SlotType} from '../../../utils/editor/create-slides.utils';
import {RevealSlotUtils} from '../../../utils/editor/reveal-slot.utils';

@Component({
    tag: 'app-slot-type',
    styleUrl: 'app-slot-type.scss'
})
export class AppSlideAdd {

    @Element() el: HTMLElement;

    @Prop()
    selectedElement: HTMLElement;

    @State()
    private currentType: SlotType;

    async componentWillLoad() {
        if (this.selectedElement) {
            const element: HTMLElement = RevealSlotUtils.isNodeReveal(this.selectedElement) ? this.selectedElement.firstElementChild as HTMLElement : this.selectedElement;

            if (element.nodeName && element.nodeName !== '') {
                this.currentType = await this.initSlotType(element.nodeName.toLowerCase());
            }
        }
    }

    private initSlotType(type: string): Promise<SlotType> {
        return new Promise<SlotType>((resolve) => {
            const templateKey: string = Object.keys(SlotType).find((key: string) => {
                return type === SlotType[key];
            });

            resolve(SlotType[templateKey]);
        });
    }

    private async closePopover(type?: SlotType) {
        await (this.el.closest('ion-popover') as HTMLIonModalElement).dismiss({
            type: this.currentType !== type ? type : null
        });
    }

    render() {
        return [<ion-toolbar>
                <h2>Toggle section</h2>
                <ion-router-link slot="end" onClick={() => this.closePopover()}><ion-icon name="close"></ion-icon></ion-router-link>
            </ion-toolbar>,

            <ion-list>
                <a onClick={() => this.closePopover(SlotType.H1)} class={this.currentType === SlotType.H1 ? "current" : ""}><ion-item><h1>Huge title</h1></ion-item></a>
                <a onClick={() => this.closePopover(SlotType.H2)} class={this.currentType === SlotType.H2 ? "current" : ""}><ion-item><h2>Large title</h2></ion-item></a>
                <a onClick={() => this.closePopover(SlotType.H3)} class={this.currentType === SlotType.H3 ? "current" : ""}><ion-item><h3>Small title</h3></ion-item></a>
                <a onClick={() => this.closePopover(SlotType.SECTION)} class={this.currentType === SlotType.SECTION ? "current" : ""}><ion-item><p>Paragraph</p></ion-item></a>
                <a onClick={() => this.closePopover(SlotType.IMG)} class={this.currentType === SlotType.IMG ? "current" : ""}><ion-item><p>Image</p></ion-item></a>
                <a onClick={() => this.closePopover(SlotType.CODE)} class={this.currentType === SlotType.CODE ? "current" : ""}><ion-item><p>Code</p></ion-item></a>
            </ion-list>
        ]
    }
}
