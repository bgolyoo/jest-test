import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('summ', () => {
    it('should return summed value of passed numbers', () => {
      expect(component.summ(4, 4)).toBe(8);
    });
  });

  describe('multiply', () => {
    it('should return multiplied value of passed numbers', () => {
      expect(component.multiply(1, 3)).toBe(3);
    });
  });

  describe('subtract', () => {
    it('should return subtracted value of passed numbers', () => {
      expect(component.subtract(8, 1)).toBe(7);
    });
  });

});
