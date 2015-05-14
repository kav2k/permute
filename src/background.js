chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'permute.js'
  });
  chrome.tabs.executeScript({
    file: 'jquery.min.js'
  });
  chrome.tabs.executeScript({
    file: 'inject.js'
  });
  chrome.browserAction.setTitle({
    title : permuteText("Click to permute!", Date.now())
  });
});
