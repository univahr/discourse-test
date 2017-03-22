(function() {
  // Don't bother with this code if the new dialect system is present
  if (Discourse.dialect_deprecated) { return; }

  function replaceBugLinks (text) {
    while (text !== (text = text.replace(/\[bug=([^\]]+)\]((?:(?!\[bug=[^\]]+\]|\[\/bug\])[\S\s])*)\[\/bug\]/ig, function (match, p1, p2) {
      return "<a href='" + p1 + "'>" + "Bug:" + p2 + "</a>";
    })));
    return text;
  }

  Discourse.Dialect.addPreProcessor(replaceBugLinks);
  Discourse.Markdown.whiteListTag('bug');
})();
