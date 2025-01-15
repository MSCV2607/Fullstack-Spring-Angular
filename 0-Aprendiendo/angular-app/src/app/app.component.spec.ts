import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Describe las pruebas que se realizarán sobre el componente AppComponent
describe('AppComponent', () => {
  beforeEach(async () => {
    // Configura el entorno de pruebas para el componente
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Verifica que el componente se crea correctamente
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-app' title`, () => {
    // Verifica que el componente tiene la propiedad 'title' correcta
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-app');
  });

  it('should render title', () => {
    // Verifica que el valor de 'title' se muestra correctamente en el HTML
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // Detecta los cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-app');
  });
});

