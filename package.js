Package.describe({
  name: "charpeni:materialize-clockpicker",
  version: "0.0.1",
  summary: "A materialize clockpicker",
  git: "https://github.com/Charpeni/materialize-clockpicker.git",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('jquery', 'client');
  api.use('materialize:materialize@0.97.0', 'client');
  api.addFiles('lib/materialize.clockpicker.js', 'client');
  api.addFiles('lib/materialize.clockpicker.css', 'client');
});
