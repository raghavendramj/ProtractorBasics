"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const _03_CalculatorPage_1 = require("./pageObjects/03_CalculatorPage");
describe('Calulator Application', () => {
    it('Simple Calc App', () => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new _03_CalculatorPage_1.Calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        expect(protractor_1.browser.getTitle()).toEqual('Super Calculator');
        yield calculator.firstEditBox.sendKeys('3');
        yield calculator.secondEditBox.sendKeys('5');
        yield calculator.go.click();
        yield calculator.getResult.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("Result Text is: ", text);
            yield protractor_1.browser.sleep(2000);
        }));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDNfQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLzAzX0NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsd0VBQTZEO0FBRzdELFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7SUFFbkMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQVMsRUFBRTtRQUU3QixJQUFJLFVBQVUsR0FBRyxJQUFJLCtCQUFVLEVBQUUsQ0FBQztRQUVsQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV2RCxNQUFNLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLE1BQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9