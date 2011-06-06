var ticketUrl = 'https://paperlesspost.unfuddle.com/a#/projects/2/tickets/by_number/',
    ticketRegexp = /\#(\d+)/;

$('.commit .human pre').each(function(i, elem) {
  var commit = $(elem),
      message = commit.text();

  if (message.match(ticketRegexp)) {
    message = message.replace(/\#(\d+)/, function(match) {
      var link = '<a style="color:#4183C4" href="' + ticketUrl + match.substring(1) + '">' + match + '</a>';
      return link;
    });

    commit.html(message);
  }
});
