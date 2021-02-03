"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = require("cucumber-html-reporter");
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../features/01_Demo.feature' // accepts a glob
    ],
    cucumberOpts: {
        tags: "@calculatortesting",
        format: 'json:./cucumber_report.json',
        onComplete: () => {
            console.log("onComplete is called!");
            var options = {
                theme: 'bootstrap',
                jsonFile: '../cucumber_report.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        // require step definitions
        require: [
            './stepDefinitions/*.js' // accepts a glob
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXIuY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2N1Y3VtYmVyLmNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbURBQWtEO0FBRXZDLFFBQUEsTUFBTSxHQUFXO0lBRTFCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELEtBQUssRUFBRTtRQUNMLDZCQUE2QixDQUFDLGlCQUFpQjtLQUNoRDtJQUVELFlBQVksRUFBRTtRQUVaLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsTUFBTSxFQUFFLDZCQUE2QjtRQUVyQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksT0FBTyxHQUFHO2dCQUNaLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFO29CQUNSLGFBQWEsRUFBRSxPQUFPO29CQUN0QixrQkFBa0IsRUFBRSxTQUFTO29CQUM3QixTQUFTLEVBQUUsc0JBQXNCO29CQUNqQyxVQUFVLEVBQUUsWUFBWTtvQkFDeEIsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2lCQUNyQjthQUNGLENBQUM7WUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDQywyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1Qsd0JBQXdCLENBQUMsaUJBQWlCO1NBQzNDO0tBQ0Y7Q0FDRixDQUFDIn0=