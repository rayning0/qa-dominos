# Using [Cypress](https://www.cypress.io/) for QA [End-to-End Testing](https://circleci.com/blog/what-is-end-to-end-testing/)

See **[13.5 minute YouTube video](https://www.youtube.com/watch?v=KhAJLar-KIY)** explaining how to set up Cypress and how I wrote my code. See my **[LinkedIn post](https://bit.ly/3x0bYPX)** on this.

To teach junior engineers to use Cypress to automatically click through a browser, I wrote this JavaScript test code to order a pizza on Domino's website in New York City and put it in the shopping cart.

Usually QA engineers do **manual testing**, where they click through a browser by hand to test specific features created by software engineers. My code tests these steps:

1. Order pizza for carryout
2. Find pizza store in New York City (2nd address)
3. Build your own pizza
4. With light cheese
5. With extra Robust Inspired Tomato Sauce
6. With pepperoni
7. Add to order (put in shopping cart)
8. Finally, it checks if shopping cart has text `Large (14") Hand Tossed Pizza`

Software like [Cypress](https://www.cypress.io/) and [Selenium](https://www.selenium.dev/) automates the manual software testing process.

If you apply for a QA engineering job and show Cypress code to test part of your target company's website, it will impress them and instantly make you stand out from hundreds of job applicants.

Video of my code in action:

https://user-images.githubusercontent.com/1870151/216524062-f9cba37b-7711-44a4-9e18-ebda9eada598.mp4

