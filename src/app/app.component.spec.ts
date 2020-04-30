import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

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
    expect(component.isValidPesel('9703100302')).toBe(false);
    expect(component.isValidPesel('000031003029')).toBe(false);
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
    expect(component.isValidPesel('01072696366')).toBe(true);
    expect(component.isValidPesel('33413002857')).toBe(true);
    
  });

  it('should reject PESEL numbers of invalid type', () => {
    expect(component.isValidPesel('')).toBe(false);
    expect(component.isValidPesel(1)).toBe(false);
    expect(component.isValidPesel(true)).toBe(false);
    expect(component.isValidPesel(null)).toBe(false);
    expect(component.isValidPesel([])).toBe(false);
  });
// to jest bez sensu i mieliśmy to zostawić gdyż z getDate korzysta tylko onSubmit()
  it('GetDate', () => {
    expect(component.getDate(97070304651)).toBe(undefined);
    expect(component.getDate(90070304651)).toBe(undefined);
    expect(component.getDate(73070304651)).toBe(undefined);
  });

  it('should accept valid dates', () => {
    expect(component.verifyDate(2019, 2, 28)).toBe(true);
    expect(component.verifyDate(2020, 2, 29)).toBe(true);
    expect(component.verifyDate(2020, 1, 1)).toBe(true);
    expect(component.verifyDate(2020, 12, 31)).toBe(true);
    expect(component.verifyDate(2020, 2, 31)).toBe(false);
    expect(component.verifyDate(2020, 13, 31)).toBe(false);
    expect(component.verifyDate(2021, 2, 31)).toBe(false);
    expect(component.verifyDate(1000, 0, 40)).toBe(false);
  });

  // it('should accept valid control number', () => {
  //   expect(component.verifyControlNumber([97070304651])).toBe(false);
  //   expect(component.verifyControlNumber([97130304651])).toBe(false);
  //   expect(component.verifyControlNumber([95022907815])).toBe(false);
  // });

  it('should reject invalid dates', () => {
    expect(component.verifyDate(2019, 1, 31)).toBe(true);
    expect(component.verifyDate(2019, 2, 28)).toBe(true);
    expect(component.verifyDate(2020, 2, 29)).toBe(true);
    expect(component.verifyDate(2019, 3, 31)).toBe(true);
    expect(component.verifyDate(2019, 4, 30)).toBe(true);
    expect(component.verifyDate(2019, 5, 31)).toBe(true);
    expect(component.verifyDate(2019, 6, 30)).toBe(true);
    expect(component.verifyDate(2019, 7, 31)).toBe(true);
    expect(component.verifyDate(2019, 8, 31)).toBe(true);
    expect(component.verifyDate(2019, 9, 30)).toBe(true);
    expect(component.verifyDate(2019, 10, 31)).toBe(true);
    expect(component.verifyDate(2019, 11, 30)).toBe(true);
    expect(component.verifyDate(2019, 12, 31)).toBe(true);
    expect(component.verifyDate(2019, 13, 31)).toBe(false);
    expect(component.verifyDate(2019, 13, 33)).toBe(false);
    expect(component.verifyDate(2019, 2, 31)).toBe(false);
  });

});
