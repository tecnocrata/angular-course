import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appUcbHighlight]',
})
export class UcbHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input('appUcbHighlight') plan: string = '';
  ngOnInit() {
    if (this.plan === 'pagado') {
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'yellow'
      );
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    }
  }
}
