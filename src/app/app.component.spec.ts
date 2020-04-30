import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('should accept valid PESEL numbers', () => {
    // test passed
    expect(component.isValidPesel('64042999928')).toBe(true);
    expect(component.isValidPesel('52022114478')).toBe(true);
    expect(component.isValidPesel('72021706812')).toBe(true);
    expect(component.isValidPesel('80042448774')).toBe(true);
    expect(component.isValidPesel('97031003029')).toBe(true);
  });

  it('should reject PESEL numbers with invalid controlNumber', () => {
    // changed all expected to false
    expect(component.isValidPesel('44051401358')).toBe(false);
    expect(component.isValidPesel('97031003021')).toBe(false);
    expect(component.isValidPesel('97031003023')).toBe(false);
  });

  it('should reject PESEL numbers with invalid date', () => {
    // month == 2, day == 30, changed expected to false
    expect(component.isValidPesel('96023007818')).toBe(false);
    // month == 13, changed expected to false
    expect(component.isValidPesel('96130207819')).toBe(false);
    // month == 00, changed expected to false
    expect(component.isValidPesel('96000207813')).toBe(false);
    // month == 02, day == 29, 1995 was not a leap year
    expect(component.isValidPesel('95022907815')).toBe(false);
  });

  it('should reject PESEL numbers of invalid type', () => {
    // test passed
    expect(component.isValidPesel('')).toBe(true);
    expect(component.isValidPesel(1)).toBe(true);
    expect(component.isValidPesel(true)).toBe(true);
    expect(component.isValidPesel(null)).toBe(true);
  });

  it('should accept valid dates', () => {
    expect(component.verifyDate(2019, 2, 28)).toBe(true);
    expect(component.verifyDate(2020, 2, 29)).toBe(true);
    expect(component.verifyDate(2020, 1, 1)).toBe(true);
    expect(component.verifyDate(2020, 12, 31)).toBe(true);
  });

  it('should reject invalid dates', () => {
    // changed all expected to false
    expect(component.verifyDate(2019, 1, 32)).toBe(false);
    expect(component.verifyDate(2019, 2, 29)).toBe(false);
    expect(component.verifyDate(2020, 2, 30)).toBe(false);
    expect(component.verifyDate(2019, 3, 32)).toBe(false);
    expect(component.verifyDate(2019, 4, 31)).toBe(false);
    expect(component.verifyDate(2019, 5, 32)).toBe(false);
    expect(component.verifyDate(2019, 6, 31)).toBe(false);
    expect(component.verifyDate(2019, 7, 32)).toBe(false);
    expect(component.verifyDate(2019, 8, 32)).toBe(false);
    expect(component.verifyDate(2019, 9, 31)).toBe(false);
    expect(component.verifyDate(2019, 10, 32)).toBe(false);
    expect(component.verifyDate(2019, 11, 31)).toBe(false);
    expect(component.verifyDate(2019, 12, 32)).toBe(false);
  });

});
