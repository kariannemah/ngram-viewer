chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "render ngram for selected text";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
    "id": "context" + context});
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = "https://books.google.com/ngrams/graph?content=" + encodeURIComponent(sText);
  window.open(url, '_blank');
};
