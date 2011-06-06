var ticketUrl = 'https://paperlesspost.unfuddle.com/a#/projects/2/tickets/by_number/',
    ticketRegexp = /\#(\d+)/;

$('.commit .human pre').each(function(i, elem) {
  var commit = $(elem),
      message = commit.text();

  if (message.match(ticketRegexp)) {
    message = message.replace(ticketRegexp, function(match) {
      var link = $('<div><a></a></div>');

      link
        .find('a')
        .css('color', '#4133C4')
        .attr('href', ticketUrl + match.substring(1))
        .text(match);

      return link.html();
    });

    commit.html(message);
  }
});
