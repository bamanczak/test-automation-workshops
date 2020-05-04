import {async} from '@angular/core/testing';
import {AppComponent} from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('should accept valid PESEL numbers', () => {
    expect(component.isValidPesel('64042999928')).toBe(true);
    expect(component.isValidPesel('52022114478')).toBe(true);
    expect(component.isValidPesel('72021706812')).toBe(true);
    expect(component.isValidPesel('80042448774')).toBe(true);
    expect(component.isValidPesel('97031003029')).toBe(true);
  });

  it('should reject PESEL numbers with invalid controlNumber', () => {
    expect(component.isValidPesel('44051401358')).toBe(false);
    expect(component.isValidPesel('97031003021')).toBe(false);
    expect(component.isValidPesel('97031003023')).toBe(false);
  });

  it('should reject PESEL numbers with invalid date', () => {
    expect(component.isValidPesel('96023007818')).toBe(false);
    expect(component.isValidPesel('96130207819')).toBe(false);
    expect(component.isValidPesel('96000207813')).toBe(false);
    expect(component.isValidPesel('95022907815')).toBe(false);
  });

  it('should reject PESEL numbers of invalid type', () => {
    expect(component.isValidPesel('')).toBe(false);
    expect(component.isValidPesel(1)).toBe(false);
    expect(component.isValidPesel(true)).toBe(false);
    expect(component.isValidPesel(null)).toBe(false);
  });

  it('should accept valid dates', () => {
    expect(component.verifyDate(2019, 2, 28)).toBe(true);
    expect(component.verifyDate(2020, 2, 29)).toBe(true);
    expect(component.verifyDate(2020, 1, 1)).toBe(true);
    expect(component.verifyDate(2020, 12, 31)).toBe(true);
  });

  it('should reject invalid dates', () => {
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

  it('should parse pesel date correctly', () => {
    component.getDate([6, 4, 0, 4, 2, 9, 9, 9, 9, 2, 8]);
    expect(component.year).toBe(1964);
    expect(component.month).toBe(0o4);
    expect(component.day).toBe(29);
    component.getDate([5, 2, 0, 2, 2, 1, 1, 4, 4, 7, 8]);
    expect(component.year).toBe(1952);
    expect(component.month).toBe(0o2);
    expect(component.day).toBe(21);
    component.getDate([9, 7, 0, 3, 1, 0, 0, 3, 0, 2, 9]);
    expect(component.year).toBe(1997);
    expect(component.month).toBe(0o3);
    expect(component.day).toBe(10);
    component.getDate([8, 0, 8, 4, 2, 0, 1, 7, 9, 3, 0]);
    expect(component.year).toBe(1880);
    expect(component.month).toBe(0o4);
    expect(component.day).toBe(20);
    component.getDate([1, 0, 2, 7, 1, 7, 0, 7, 8, 1, 6]);
    expect(component.year).toBe(2010);
    expect(component.month).toBe(0o7);
    expect(component.day).toBe(17);
  });
});
