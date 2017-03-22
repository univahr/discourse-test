import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["bbcode-bug_links"] = true;
});

function replaceBugLink(text) {
  text = text || "";
  while (text !== (text = text.replace(/\[bug=([^\]]+)\]((?:(?!\[bug=[^\]]+\]|\[\/bug\])[\S\s])*)\[\/bug\]/ig, function (match, p1, p2) {
    return `<a href='${p1}'>${p2}</a>`;
  })));
  return text;
}

export function setup(helper) {
  helper.whiteList(['bug']);

  helper.addPreProcessor(text => replaceBugLink(text));
}
