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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: '@calculatortesting' }, function () {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@calculatortesting" }, function () {
    console.log("Test is completed!");
});
cucumber_1.Before({ tags: "@AngularTesting" }, function () {
    console.log("I need to execute first!");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Test is completed for: ", scenario);
        if (scenario.result.status == cucumber_1.Status.FAILED) {
            //code to take screenshots
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUQ7QUFDakQsMkNBQXFDO0FBRXJDLGlCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsRUFBRTtJQUNuQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxFQUFFO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDLENBQUM7QUFHSCxnQkFBSyxDQUFDLFVBQWUsUUFBUTs7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3pDLDBCQUEwQjtZQUMxQixNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=