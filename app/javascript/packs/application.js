// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'core-js/stable'
import 'regenerator-runtime/runtime'

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

/* REACT */
require("./app")

/* STYLES */
require("../stylesheets/application.sass")

/* FONT AWESOME */
const webfonts = require.context('@fortawesome/fontawesome-free/webfonts', true)
import '@fortawesome/fontawesome-free/scss/fontawesome'
import '@fortawesome/fontawesome-free/scss/solid'
import '@fortawesome/fontawesome-free/scss/regular'
import '@fortawesome/fontawesome-free/scss/brands'
import '@fortawesome/fontawesome-free/scss/v4-shims'
import '@fortawesome/fontawesome-free/js/fontawesome.min'

// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
