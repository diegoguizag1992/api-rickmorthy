
                DIRECCIONAMIENTO PAGINAS

Existen dos formas de redireccionar paginas.

1. La primera es con [routerLink]="['/personajes']",  Se coloco el nombre de la pagina nombrado en app-routing-module

2. La segunda forma es por medio de uns funcion,  (click)="consultar(input.value)" luego de declararla en el HTML
    vamos a
    Headers.components.ts
    consultar(input){
       this.router.navigate(['/personaje']);
    }
