import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { SplitComponent } from './split.component';
export var SplitAreaDirective = (function () {
    function SplitAreaDirective(elementRef, renderer, split) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.split = split;
        this._order = null;
        this._size = null;
        this._minSizePixel = 0;
        this.eventsLockFct = [];
    }
    Object.defineProperty(SplitAreaDirective.prototype, "order", {
        set: function (v) {
            this._order = !isNaN(v) ? v : null;
            this.split.updateArea(this, this._order, this._size, this._minSizePixel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitAreaDirective.prototype, "size", {
        set: function (v) {
            this._size = !isNaN(v) ? v : null;
            this.split.updateArea(this, this._order, this._size, this._minSizePixel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitAreaDirective.prototype, "minSizePixel", {
        set: function (v) {
            this._minSizePixel = (!isNaN(v) && v > 0) ? v : 0;
            this.split.updateArea(this, this._order, this._size, this._minSizePixel);
        },
        enumerable: true,
        configurable: true
    });
    SplitAreaDirective.prototype.ngOnInit = function () {
        this.split.addArea(this, this._order, this._size, this._minSizePixel);
    };
    SplitAreaDirective.prototype.lockEvents = function () {
        this.eventsLockFct.push(this.renderer.listen(this.elementRef.nativeElement, 'selectstart', function (e) { return false; }));
        this.eventsLockFct.push(this.renderer.listen(this.elementRef.nativeElement, 'dragstart', function (e) { return false; }));
    };
    SplitAreaDirective.prototype.unlockEvents = function () {
        while (this.eventsLockFct.length > 0) {
            var fct = this.eventsLockFct.pop();
            if (fct) {
                fct();
            }
        }
    };
    SplitAreaDirective.prototype.setStyle = function (key, value) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, key, value);
    };
    SplitAreaDirective.prototype.ngOnDestroy = function () {
        this.split.removeArea(this);
    };
    SplitAreaDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'split-area',
                    host: {
                        '[style.flex-grow]': '"0"',
                        '[style.flex-shrink]': '"0"',
                        '[style.overflow-x]': '"hidden"',
                        '[style.overflow-y]': '"auto"',
                        '[style.height]': '"100%"'
                    }
                },] },
    ];
    /** @nocollapse */
    SplitAreaDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: SplitComponent, },
    ]; };
    SplitAreaDirective.propDecorators = {
        'order': [{ type: Input },],
        'size': [{ type: Input },],
        'minSizePixel': [{ type: Input },],
    };
    return SplitAreaDirective;
}());
//# sourceMappingURL=/home/adebisi/Public/splitsplitsplit/splitArea.directive.js.map