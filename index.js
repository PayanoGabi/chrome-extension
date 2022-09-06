console.log('This is always executed');
var form = document.querySelector("body > section > div.row-One > form");
console.log(form);
var arr = [];
form.onsubmit = function () {
    var formData = new FormData(form);
    var text = formData.get('keywords');
    console.log(text);
    var textWord = { keyword: text };
    arr.push(textWord);
    console.log(arr);
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
        // let strGoogle = new String('google')
        if (currentHref === null || currentHref === void 0 ? void 0 : currentHref.indexOf('google')) {
            console.log('truedat');
        }
    });
}
getCurrentTabUrl();
console.log(chrome.tabs);
