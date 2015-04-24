# UI developer test

The lastminute.com mobile website includes a number of pages allowing users to book flights and hotels. **We want to reimplement the hotel list page** using mobile-friendly, modular and testable
principles.

The following two pictures describe how this new page should look, respectively on small and larger screen devices.

**Mobile design**

![Mobile design](mobile_test-000.jpg)

**Desktop Design**

![Desktop Design](mobile_test-001.jpg)

## Breakpoints
Use **640 pixels** as a breakpoint value.

## Behaviour
The interaction with the page is simple: whenever the user clicks an hotel name in the list, the description panel should be
updated with the relevant hotel information.

## Data
We provide you with a file containing the hotel data: ```hotels.json```. Parse this file and use the data in the application.
You can either use the content of this file as a static JavaScript object or load it using a server. This file references a number of images all located in the ```images``` folder.

## No library allowed

We are keen on evaluating your deep understanding of JavaScript, therefore **you should not use any library** in the application code.

Keep your code clean, simple and reusable.

Support for IE is not required.

## Testing
Tests are part of this test, so add either unit or functional tests to the application. For this part, feel free to use any library or
framework.
