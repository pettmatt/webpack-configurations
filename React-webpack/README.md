# Essential information

This project uses React's getting started application as a base, which has been modified to host basic example application to demonstrate how webpack is used.

# Instructions

The application uses webpack bundler to build the application which is usually done with `react scripts` build command.

The webpack handles serving the application using `webpack-dev-server` package. Replacing the default `react scripts` serving option.

It's good to note that this template was created by following my personal believes how things should be handled. This can be seen in `package.json` file in `scripts` section where I have created invidual scripts for development and production. With this small detail developer doesn't need to touch webpack config file in order to produce the final production version.

**Please read the the `package.json` file if previous expalanations were not sufficient enough.

## Webpack settings

This section doesn't include every detail how webpack is used and what it includes. Use this as a snippet of what you should expect to see inside of the webpack config file.

**Please read the the `webpack.config.js` file if previous expalanations were not sufficient enough.