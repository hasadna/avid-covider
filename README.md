# AvidCovider
The project aims to support gathering daily information on the spread of the corona virus.
The project based on an [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3, offering a dynamic chatbot frontend service (named Chatool) and a dynamic script. Another example for a live implementation can be found on [another repo](https://github.com/hasadna/reportit-user).

## Live Site

[link](https://coronaisrael.org)

## Technical Background


### Staging Enviroment

The master branch is synchronized with [our staging enviroment](https://avid-covider.phonaris.com). This is the safe place for QA, after checking on a local enviorment (see below).

### Offering help
1. Translations are managed via a [Trasifex project](https://www.transifex.com/the-public-knowledge-workshop/avid-covider/dashboard/).
1. Development / Design / Content Tasks: We will add the [`easy_entry`](https://github.com/hasadna/avid-covider/issues?q=is%3Aissue+is%3Aopen+label%3Aeasy_entry) label for relevant issues. We would love to get your code donations for these (and other issues), but can not provide any support, due to the lack of resources and our time limits. 
1. All pull request must be reviewed, no exceptions. Please be patience, but it is ok to ping about it on our slack channel.


### Main Parts / Porject Structure

- Usage Scenarios / Chats Flow : most of content changes are taking place in the chat script. The script is represented in a custumized YAML fie: [`https://github.com/hasadna/avid-covider/blob/master/scripts/script.yaml`](https://github.com/hasadna/avid-covider/blob/master/scripts/script.yaml). *Note:* The YAML file is intended to enable a human-readable format. To check the updated version of your `script.yaml`, make sure to run the `avid-covider/tools/yaml_to_json.py` compiler and to include both `script.yaml` and `script.json` in your commit and pull request.

- Chatool: The technical core of the the site. 

- Markups

- Design


### Setting a Local Enviroment
1. Install recent [node,js](https://nodejs.org/en/about/releases/) version.
1. Clone the repo.
1. `npm install`

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Angular help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
