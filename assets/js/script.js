'use strict';

$(document).ready(function() {
  //Example 1: Every link will open in a new window
  $('a[href^="http://"]').attr("target", "_blank");
});
