chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "title": "Permute this page",
    "id": "permute",
    "contexts": ["page"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.executeScript(tab.id, {
    file: 'permute.js'
  });
  chrome.tabs.executeScript(tab.id, {
    file: 'jquery.min.js'
  });
  chrome.tabs.executeScript(tab.id, {
    file: 'inject.js'
  });
  chrome.contextMenus.update(
    "permute",
    { title : permuteText("Permute this page", Date.now()) }
  );
});
