# suite-level-tags
Reduced test case for suite level configuration error.

With cypress-cucumber-preprocessor you can set per-test settings via tags.

However some settings, eg `testIsolation`, are only applicable at the suite level.

Attempting to run the test below in 13.6.4

```gherkin
@testIsolation(false)
Feature: Disable test isolation for this suite

    Scenario: Open a page
        Given I load a page

    Scenario: the page still exists
        Then the page should exist
```

does not work.

(In a real project with 13.4.0 I get

`CypressError: The testIsolation configuration can only be overridden from a suite-level override.`

<img width="1840" alt="Screenshot 2024-02-19 at 11 01 33" src="https://github.com/marvelapp/suite-level-tags/assets/265952/91e7c4a1-cf0d-4721-b718-babd88fd187f">
)

I can see from the code that configuraion set via tags is gathered and applied to each `it`, which is why suite-level options don't work.

Applying tags on `Feature` to the corresponding `describe` would possibly allow this to work.

To run this test case, clone this repo then

```
yarn install
yarn run cypress open
```

and select the `suiteLevelSettings` suite to run.
