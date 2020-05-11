# ![](https://github.com/hasadna/avid-covider/raw/master/src/favicon-32x32.png) Avid Covider ![](https://github.com/hasadna/avid-covider/raw/master/src/favicon-32x32.png)

The project aims to support gathering daily information on the spread of the corona virus.

Our live site [is here](https://coronaisrael.org)

The master branch is synchronized with [our staging environment](https://avid-covider.phonaris.com). This is the safe place for QA, after checking on a local environment (see below).

The aggregated information contains sensitive medical details and cannot be published as-is. However, you can see parts of the data processing pipeline at [hasadna/avid-covider-pipelines](https://github.com/hasadna/avid-covider-pipelines).

## Technical Background

### Frontend

The project based on an [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3, offering a dynamic chatbot frontend service (named hatool) and a dynamic script. Another example for a live implementation can be found on [another repo](https://github.com/hasadna/reportit-user).

### Backend

The app is served from a Google Cloud Function.
Its code is in [`backend/main.py`](https://github.com/hasadna/avid-covider/blob/master/backend/main.py).

It exposes a very simple API, in which we simply:

- Verify the recaptcha token (and save the result to the payload)
- Insert a new report in the DB

### Database

We're using a Google Cloud SQL PostgreSQL Server. 

The result table is comprised of three columns:
- `id` - running id
- `created` - automatic creation timestamp
- `data` - JSON object of the uploaded report

We recommend having an 'insert' user and a 'readonly' user for the backend & for pulling data respectively.

The commands to create these users on PostgreSQL are:
```
create database reports;
\connect reports
create table reports (id serial, created timestamp DEFAULT now(), data jsonb);
create user readonly with password '<readonly-password>';
GRANT CONNECT ON DATABASE reports to readonly;
GRANT USAGE ON SCHEMA public to readonly;
GRANT SELECT ON reports to readonly;
create user insert with password '<insert-password>';
GRANT CONNECT ON DATABASE reports to insert;
GRANT USAGE ON SCHEMA public to insert;
GRANT insert on reports to insert;
```

### Questionnaire Script

Most of content changes are taking place in the chat script. 

The script is represented in a customized YAML fie: [`scripts/script.yaml`](https://github.com/hasadna/avid-covider/blob/master/scripts/script.yaml), which is interpreted and executed using the [`hatool library`](https://github.com/akariv/hatool).

 *Note:* The YAML file is intended to enable a human-readable format. To compile your `script.yaml` to the necessary format for execution, make sure to run the `avid-covider/tools/yaml_to_json.py` script. Always check the script locally before submitting a change via a pull request.

### Localization

Translations are managed via a [Trasifex project](https://www.transifex.com/the-public-knowledge-workshop/avid-covider/dashboard/).

It contains two main resources - one for the static labels of the UI (using Angular localization framework), and the other is for translating the script itself.

When running the CI, the build script (`.travis.yml`) will push new strings to Transifex and will pull translations from it.

### Recaptcha

In order to verify the reports and ensure no bots are posting false data, we're using RecaptchaV3 from Google to check the humanity of our users.

The client generates a token right before submitting the data and the backend verifies it upon receiving the request.

### Deployment

We use travis-ci.org to deploy the app.

You can review `.travis.yml` to see the exact deployment steps.

## Local Development

### Setting a Local Environment
1. Install recent [node,js](https://nodejs.org/en/about/releases/) version (10+ should be ok)
1. Clone the repo.
1. run `npm install`
1. run `ng serve` to start the development server and open your browser at `http://localhost:4200`.
   The development server will automatically reload if you change any of the source files.

### Working with Angular

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running tests

##### E2E
We use [Protractor](http://www.protractortest.org/).
Useful sources in case you are new to e2e / protractor
* [Protractor API](https://www.protractortest.org/#/api?view=ProtractorExpectedConditions.prototype.elementToBeSelected)
* [Getting started](https://medium.com/@TammyTorres/e2e-testing-on-angular-app-with-protractor-tips-included-f3d5f65a8816)
* [video tutorial E2E with angular](https://www.youtube.com/watch?v=LCSwmJwRU1U) 

###### Concepts
Our E2E stack have 3 layers (all included in `e2e` directory):
* A page object (`app.po.ts`) - use to interact with page elements
* Chat flow (`chat-flow.e2e.ts`) - simulate a complete report interaction (randomly / by answers array)
* Specs (like `app.e2e-spec.ts`) - actual tests are here, written with [Jasmin](https://jasmine.github.io/)

The util file (`utils.e2e.ts`) contain small utility functions which does not interact with any test / browser entities.

The basic idea is: tests in spec file may use either chat-flow mechanism (`simulateChatFlow`) to simulate a complete report interaction, page object to check spec element, or both.<br>
Internally, chat-flow mechanism uses page object to interact with DOM elements.

###### Chat flow layer
The main function of this layer is `simulateChatFlow`. it can be Invoked either with or without answers array.
It will invoke a chat loop which will end when the report is done (see step 4)
The chat loop identical in both cases (with/without answers): 
1. wait for next question to be rendered to DOM
2. log question to console
3. simulate answer: If answer data exist - use it, else answer randomally.
4. check if `wouldSend` object avaible, if so - end the chat loop.

About **answers array**: each cell represent an answer.
You're not have to provide all the answers for an entire chat script - For example, if you provide array with 6 cells (6 answers), the chat flow layer will answer questions 7 & up randomly. Addionally, providing a `null` as an asnwer will also trigger a random answer. For exampl, If you only care about asnwers 5-6, you can provide answer array liek the following:
```
// 4 random answers, q5 - index 1, q6 - index 3
const asnwers = [null, null, null, null, 1, 3];
await simulateChatFlow(page, beforeAllanswers);
```  

###### Scripts:

- `e2e` - angular default 
- `e2e:ci` - uses `ci.conf` instead of default config. uses headless chrome.
- `e2e:dev` - used for runing a single run on develpment (You'll need to run angular dev server on port 4200 before running this on - `npm start`) 
- `e2e:dev-headless` - same as `e2e:dev` but with headless chrome

##### Unit
We don't unit tests at the moment, but generally that's how it's done:
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Angular help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributing

Main place to talk about the project and asking / receiving help is in our [Gitter.im Channel](https://gitter.im/avid-covider/community).

### Offering help
1. Development / Design / Content Tasks: We will add the [`easy_entry`](https://github.com/hasadna/avid-covider/issues?q=is%3Aissue+is%3Aopen+label%3Aeasy_entry) label for relevant issues. We would love to get your code donations for these (and other issues), but can not provide any support, due to the lack of resources and our time limits. 
1. All pull requests must be reviewed, no exceptions. Please be patient, but it is ok to ping about it on our gitter/slack channels.

## Forking

This is a (non) comprehensive list of what needs to be done in order to fork the project to a different region / location:

- Fork the GitHub repo to your own GH User / Organization

- Create RecaptchaV3 keys and secrets and replace them in
    - `src/index.html`
    - `src/app/constants.ts`

- Create a transifex project and make sure you update all references in the code to it:
    - `.tx/config`
    - `tools/yaml_to_json.py`
    - encrypt a `TX_TOKEN` env var into the `.travis.yml` file

- Prepare the deploy bucket
    - Create a bucket in a cloud provider with the correct permissions
    - Update the endpoint and encrypted access and secret keys in .travis.yml

- Update all references of `coronaisrael.org` in the repo to your new site URL.

- Update favicons and other assets if needed 

- Update the `site.webmanifest` file with links to apps (or remove them in case there are none)
