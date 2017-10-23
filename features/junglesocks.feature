Feature: The user goes to jungle socks app and requests for animal socks with differeent quantities
As a customer I am looking to get animal socks in variying quantity by using the jungle socks app.

  Background: The user logs in to the jungle socks website
    Given the user goes to the jungle socks website


#Negative Test Case
  @test1
  Scenario Outline: The user requests for negative and alphanumeric quantity.
    When the user adds "<quantity-zebra>" for zebra socks
    And the user adds "<quantity-lion>" for lion socks
    And the user adds "<quantity-elephant>" for elephant socks
    And the user adds "<quantity-giraffe>" for giraffe socks
    And the user selects "<state>" for the ship to state
    And the user clicks on the checkout button to go to the error page
    Then the user should get an error message with "<expected-error-text>"
    Examples:
    |quantity-zebra |quantity-lion |quantity-elephant |quantity-giraffe |expected-error-text                        |state     |
    |-1             |-30           |-45               |-67              |Quantity specified should be greater than 0|California|
    |^&             |H%            |R$                |#                |Quantity specified should be a number      |California|


#Negative Test Case
 @test2
  Scenario Outline: The user requests for quantity more than available InStock.
    When the user adds "<quantity-zebra>" for zebra socks
    And the user adds "<quantity-lion>" for lion socks
    And the user adds "<quantity-elephant>" for elephant socks
    And the user adds "<quantity-giraffe>" for giraffe socks
    And the user selects "<state>" for the ship to state
    And the user clicks on the checkout button to go to the error page
    Then the user should get an error message with "<expected-error-text>"
    Examples:
    |quantity-zebra |quantity-lion |quantity-elephant |quantity-giraffe |expected-error-text                                           |state     |
    |30             |20            |100               |30               |Quantity specified should not be greater the in stock quantity|California|


#Negative Test Case
  @test3
   Scenario Outline: The user orders items for a blank state.
     When the user adds "<quantity-zebra>" for zebra socks
     And the user adds "<quantity-lion>" for lion socks
     And the user adds "<quantity-elephant>" for elephant socks
     And the user adds "<quantity-giraffe>" for giraffe socks
     And the user selects "<state>" for the ship to state
     And the user clicks on the checkout button to go to the error page
     Then the user should get an error message with "<expected-error-text>"
     Examples:
     |quantity-zebra |quantity-lion |quantity-elephant |quantity-giraffe |expected-error-text         |state |
     |1              |2             |1                 |2                |Please select a valid state |      |


#Positive Test Case
  @test4
  Scenario Outline: The user requests for zero or does not specify a quantity.
    When the user adds "<quantity-zebra>" for zebra socks
    And the user adds "<quantity-lion>" for lion socks
    And the user adds "<quantity-elephant>" for elephant socks
    And the user adds "<quantity-giraffe>" for giraffe socks
    And the user selects "<state>" for the ship to state
    And the user clicks on the checkout button to go to the confirmation page
    Then the user validates "<quantity-zebra>" for zebra socks in the confirmation page
    And the user validates "<quantity-lion>" for lion socks in the confirmation page
    And the user validates "<quantity-elephant>" for elephant socks in the confirmation page
    And the user validates "<quantity-giraffe>" for giraffe socks in the confirmation page
    And the user checks subtotal and taxes and total for "<state>" with "<quantity-zebra>" and "<quantity-lion>" and "<quantity-elephant>" and "<quantity-giraffe>"
    Examples:
    |quantity-zebra |quantity-lion |quantity-elephant |quantity-giraffe |state     |
    |0              |0             |0                 |0                |California|
    |               |              |                  |                 |California|


#Positive Test Case
  @test5
  Scenario Outline: The user requests for maximum available quantity.
    When the user adds "<quantity-zebra>" for zebra socks
    And the user adds "<quantity-lion>" for lion socks
    And the user adds "<quantity-elephant>" for elephant socks
    And the user adds "<quantity-giraffe>" for giraffe socks
    And the user selects "<state>" for the ship to state
    And the user clicks on the checkout button to go to the confirmation page
    Then the user validates "<quantity-zebra>" for zebra socks in the confirmation page
    And the user validates "<quantity-lion>" for lion socks in the confirmation page
    And the user validates "<quantity-elephant>" for elephant socks in the confirmation page
    And the user validates "<quantity-giraffe>" for giraffe socks in the confirmation page
    And the user checks subtotal and taxes and total for "<state>" with "<quantity-zebra>" and "<quantity-lion>" and "<quantity-elephant>" and "<quantity-giraffe>"
    Examples:
    |quantity-zebra |quantity-lion |quantity-elephant |quantity-giraffe |state     |
    |23             |12            |3                 |15               |California|


#Positive Test Case
 @test6
  Scenario Outline: The user requests for correct quantity for different states.
    When the user adds "<quantity-zebra>" for zebra socks
    And the user adds "<quantity-lion>" for lion socks
    And the user adds "<quantity-elephant>" for elephant socks
    And the user adds "<quantity-giraffe>" for giraffe socks
    And the user selects "<state>" for the ship to state
    And the user clicks on the checkout button to go to the confirmation page
    Then the user validates "<quantity-zebra>" for zebra socks in the confirmation page
    And the user validates "<quantity-lion>" for lion socks in the confirmation page
    And the user validates "<quantity-elephant>" for elephant socks in the confirmation page
    And the user validates "<quantity-giraffe>" for giraffe socks in the confirmation page
    And the user checks subtotal and taxes and total for "<state>" with "<quantity-zebra>" and "<quantity-lion>" and "<quantity-elephant>" and "<quantity-giraffe>"
    Examples:
    |quantity-zebra |quantity-lion |quantity-elephant |quantity-giraffe |state     |
    |1              |2             |1                 |2                |Alabama   |
    |1              |2             |1                 |2                |Alaska    |
    |1              |2             |1                 |2                |Arizona   |
    |1              |2             |1                 |2                |Arkansas  |
    |1              |2             |1                 |2                |California|
    |1              |2             |1                 |2                |Colorado  |
    |1              |2             |1                 |2                |New York  |
    |1              |2             |1                 |2                |Minnesota |
