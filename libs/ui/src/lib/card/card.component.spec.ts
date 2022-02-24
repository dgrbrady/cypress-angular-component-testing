import { ComponentFixture } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { initEnv, mount } from 'cypress-angular-unit-test';

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    initEnv(CardComponent);
    fixture = mount(CardComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).to.exist;
  });
});
