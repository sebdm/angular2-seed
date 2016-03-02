import {Router} from 'angular2/router';
import {isPresent} from 'angular2/src/facade/lang';
import {
  Directive,
  Query,
  QueryList,
  Attribute,
  ElementRef,
  Renderer,
  Optional,
  OnInit, Input, OnDestroy
} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Directive({
  selector: '[router-active]'
})
export class RouterActive implements OnInit, OnDestroy {
  routerSubscription: any;
  routerActiveClass: string = 'is-active';

  constructor(
    private router: Router,
    private element: ElementRef,
    private renderer: Renderer,
    @Query(RouterLink) public routerLink: QueryList<RouterLink>,
    @Optional() @Input('router-active') routerActiveAttr?: string) {

    this.routerActiveClass = this._defaultAttrValue(routerActiveAttr);
  }

  ngOnInit() {
    this.routerSubscription = this.router.subscribe(() => {
      if (this.routerLink.first) {
        let active = this.routerLink.first.isRouteActive;
        this.renderer.setElementClass(this.element.nativeElement, this.routerActiveClass, active);
      }
    });

  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  private _defaultAttrValue(attr?: string) {
    return attr || this.routerActiveClass;
  }
}
