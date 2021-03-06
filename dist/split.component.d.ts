import { ChangeDetectorRef, ElementRef, SimpleChanges, EventEmitter, Renderer, OnDestroy, OnChanges } from '@angular/core';
import { SplitAreaDirective } from './splitArea.directive';
export declare class SplitComponent implements OnChanges, OnDestroy {
    private cdRef;
    private elementRef;
    private renderer;
    direction: string;
    width: number;
    height: number;
    gutterSize: number;
    disabled: boolean;
    dragStart: EventEmitter<number[]>;
    dragProgress: EventEmitter<number[]>;
    dragEnd: EventEmitter<number[]>;
    readonly styleFlexDirection: string;
    readonly styleWidth: string;
    readonly styleHeight: string;
    private readonly nbGutters;
    private minPercent;
    private areas;
    private isDragging;
    private containerSize;
    private areaASize;
    private areaBSize;
    private eventsDragFct;
    constructor(cdRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer);
    ngOnChanges(changes: SimpleChanges): void;
    addArea(component: SplitAreaDirective, orderUser: number | null, sizeUser: number | null, minPixel: number): void;
    updateArea(component: SplitAreaDirective, orderUser: number | null, sizeUser: number | null, minPixel: number): void;
    removeArea(area: SplitAreaDirective): void;
    private refresh();
    private refreshStyleSizes();
    startDragging(startEvent: MouseEvent | TouchEvent, gutterOrder: number): void;
    private dragEvent(event, start, areaA, areaB);
    private drag(start, end, areaA, areaB);
    private stopDragging();
    private notify(type);
    ngOnDestroy(): void;
}
