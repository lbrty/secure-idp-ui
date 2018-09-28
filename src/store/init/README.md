# Init

Init module is responsible for initial application bootstrapping process.


## How is it works?

Init module is used only in one place `components/Bootstrap.vue` which watches router changes
and checks if all required data present. In case if there is no data it triggers bootstrapping process.
