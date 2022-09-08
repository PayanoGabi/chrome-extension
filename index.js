console.log('This is always executed');
var form = document.querySelector("body > section > div.row-One > form");
//console.log(form)
// will need to check what information is entered in form - for now using sessionStorage
var tabID;
var message = 'This is a message from the extension';
// send message to active tab
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabs.forEach(function (tab) {
        if (tab.id) {
            chrome.tabs.sendMessage(tab.id, message);
        }
    });
});
// creating an array that will contains strings
var arr = [];
form.onsubmit = function () {
    var formData = new FormData(form);
    var text = formData.get('keywords');
    console.log(text);
    var textWord = { keyword: text };
    arr.push(textWord);
    console.log(arr);
    var keyIndex;
    for (var i = 0; i < arr.length; i++) {
        keyIndex = [i];
    }
    localStorage.setItem("" + keyIndex + "", text);
    return false; // prevent reload
};
function getCurrentTabUrl() {
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, function (tabs) {
        var tab = tabs[0];
        var currentHref = tab.url;
        console.log(tab.url);
        console.log(document);
    });
}
getCurrentTabUrl();
console.log(chrome.tabs);
// const r = Object.keys(arr);
// console.log(r + "key");
// if(currentHref?.indexOf('google')){
//   console.log('true dat')
// }
//  const values = Object.keys(arr)
//  const commaJoinedValues = values.join(",");
// // send message to content
// chrome.runtime.sendMessage(message);
// send message to every active tab
// chrome.tabs.query({}, (tabs) => {
//   tabs.forEach((tab) => {
//     if (tab.id) {
//       chrome.tabs.sendMessage(tab.id, message);
//     }
//   });
// });
// get current tab ID
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {  
//   // chrome.tabs.sendMessage(tabs[0].id, {message: 'Hello Background! How are you?'}, function(response) {  
//   // });  
// tabs[0].id
// });
