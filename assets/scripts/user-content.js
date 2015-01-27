// for security reasons, generated-ids are now prefixed
// with user-content- in READMEs, this snippet
// checks whether someone has clicked on an
// auto-generated id.
var $ = require("jquery")

module.exports = function() {
  $(handleAnchorLinks)
}

var handleAnchorLinks = function() {

  // Go to anchor on page loading
  if (window.location.hash.length) {
    goToAnchor(window.location.hash.replace("#", ""))
  }

  // Go to anchor on readme hyperlink click
  $(document).on('click', '.content a', function() {
    var match = $(this).attr('href').match(/^#(.*)$/)

    // link was not anchor
    if (!match) return true

    return goToAnchor(match[1])
  })
}

var goToAnchor = function(anchor) {

  console.log("anchor", anchor)

  var prefix = 'user-content-'
  var el = $('#' + prefix + anchor + ' a')

  if (!el.length) return true

  var simpleAnchorUrl = window.location.href
  window.location.hash = prefix + anchor
  history.replaceState(null, null, simpleAnchorUrl)

  return false
}
