Feature: I am going to validate Calculator App


@calculatortesting
Scenario Outline: Calculator Add functionality testing

Given I will navigate to "<website>" page
When I add two numbers "<firstNumber>" and "<secondNumber>"
Then the output displayed should be "<result>"

Examples:
    | website | firstNumber | secondNumber | result | 
    | Calculator  | 3  | 5  | 7 |
    | Calculator  | 2  | 7  | 9 |
    | Calculator  | 4  | 1  | 5 |


@AngularTesting
Scenario: Navigate from AngularJS to Angular website

Given I will navigate to "Angular JS" page
When I click on header link
And You will navigate to latest Angular page.
Then you will enter "hello" in search box 	