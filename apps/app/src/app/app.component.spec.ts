import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { initEnv, mount } from 'cypress-angular-unit-test';
import { CardComponent, UiModule } from '@cypress-angular-component-testing/ui';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() => {
    initEnv(AppComponent, {
      declarations: [NxWelcomeComponent],
      imports: [UiModule]
    });
  });

  it('should create the app', () => {
    const fixture = mount(AppComponent);
    const app = fixture.componentInstance;
    expect(app).to.exist;
  });

  it(`should have as title 'app'`, () => {
    const fixture = mount(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).to.equal('app');
  });

  it('should render title', () => {
    const fixture = mount(AppComponent);
    cy.get('h1').should('contain.text', 'Welcome app');
  });

  it('should render CardComponent', () => {
    const fixture = mount(AppComponent);
    const card = fixture.debugElement.query(By.directive(CardComponent))
    expect(card).to.exist;
  })
});
