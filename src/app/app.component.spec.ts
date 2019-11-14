import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

let component: AppComponent;

describe("AppComponent", () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it("should accept valid PESEL numbers", () => {
    expect(component.isValidPesel("64042999928")).toBe(true);
    expect(component.isValidPesel("52022114478")).toBe(true);
    expect(component.isValidPesel("72021706812")).toBe(true);
    expect(component.isValidPesel("80042448774")).toBe(true);
    expect(component.isValidPesel("97031003029")).toBe(true);
  });

  it("should reject PESEL numbers with invalid controlNumber", () => {
    expect(component.isValidPesel("44051401358")).toBe(false);
    expect(component.isValidPesel("97031003021")).toBe(false);
    expect(component.isValidPesel("97031003023")).toBe(false);
  });

  it("should reject PESEL numbers with invalid date", () => {
    expect(component.isValidPesel("96023007818")).toBe(false);
    expect(component.isValidPesel("96130207819")).toBe(false);
    expect(component.isValidPesel("96000207813")).toBe(false);
    expect(component.isValidPesel("95022907815")).toBe(false);
  });

  it("should reject PESEL numbers of invalid type", () => {
    expect(component.isValidPesel("")).toBe(false);
    expect(component.isValidPesel(1)).toBe(false);
    expect(component.isValidPesel(true)).toBe(false);
    expect(component.isValidPesel(null)).toBe(false);
  });

  it("should accept valid dates", () => {
    expect(component.verifyDate(2019, 2, 28)).toBe(true);
    expect(component.verifyDate(2020, 2, 29)).toBe(true);
    expect(component.verifyDate(2020, 1, 1)).toBe(true);
    expect(component.verifyDate(2020, 12, 31)).toBe(true);
  });

  it("should reject invalid dates", () => {
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

  it("should return correct date from a valid pesel", () => {
    component.getDate([9, 6, 1, 0, 1, 9, 0, 0, 7, 9, 4]);
    expect(component.day).toBe(19);
    expect(component.year).toBe(1996);
    expect(component.month).toBe(10);
  });

  it("getYear should return correct year from pesel", () => {
    expect(component.getYear([9, 6, 9, 0, 1, 9, 0, 0, 7, 9, 4])).toBe(1896);
    expect(component.getYear([9, 6, 2, 1, 1, 0, 1, 3, 3, 1, 6])).toBe(2096);
    expect(component.getYear([9, 6, 4, 1, 1, 0, 1, 3, 3, 1, 6])).toBe(2196);
    expect(component.getYear([9, 6, 6, 1, 1, 0, 1, 3, 3, 1, 6])).toBe(2296);
  });
});
