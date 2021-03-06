import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitComponent } from './split.component';
import { SplitAreaDirective } from './splitArea.directive';
import { SplitGutterDirective } from './splitGutter.directive';
export var AngularSplitModule = (function () {
    function AngularSplitModule() {
    }
    AngularSplitModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SplitComponent,
                        SplitAreaDirective,
                        SplitGutterDirective
                    ],
                    exports: [
                        SplitComponent,
                        SplitAreaDirective,
                        SplitGutterDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    AngularSplitModule.ctorParameters = function () { return []; };
    return AngularSplitModule;
}());
//# sourceMappingURL=/home/adebisi/Public/splitsplitsplit/angularSplit.module.js.map