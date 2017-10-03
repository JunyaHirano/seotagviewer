var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "images/icon/icon_16.png"});
    chrome.tabs.executeScript(tab.id, {file:"js/action.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "images/icon/icon_off.png"});
    chrome.tabs.executeScript(tab.id, {code:"$('#chrome_nofollow_notify').remove(); $('a[rel*=\"nofollow\"]').removeClass('chrome-nofollow-link');"});
  }
  chrome.storage.sync.set({ TagViewerValid : toggle }, function() {});
});