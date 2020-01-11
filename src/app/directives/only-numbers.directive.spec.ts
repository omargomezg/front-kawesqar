import { OnlyNumbersDirective } from './only-numbers.directive';

describe('OnlyNumbersDirective', () => {
  let fixture;
  it('should create an instance', () => {
    const directive = new OnlyNumbersDirective(fixture.debugElement.nativeElemet);
    expect(directive).toBeTruthy();
  });
});
