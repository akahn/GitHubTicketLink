console.log('running');
chrome.extension.sendRequest({method: "getConfig"}, function(response) {
  console.log('response:', response);
  if (window.location.href.match(new RegExp('https://github.com/.+/' + response.repoName + '/commit/.+'))) {
    var ticketUrl = response.ticketUrl,
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
            .attr('href', ticketUrl.replace('###', match.substring(1)))
            .text(match);

          return link.html();
        });

        commit.html(message);
      }
    });
  }
});
