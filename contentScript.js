/*let bottomMessage = `<div id="fuck" style="width: 3.5rem;height: 3.5rem;border-radius: 100%;background: white;box-shadow: 0px 0px 10px -1px black;right: 1rem;bottom: 1rem;position: fixed;"><div title='fucked by my extension' style="width: 3.5rem;background:url('${
    chrome.runtime.getURL(
    "icon32.png"
)}');height: 3.5rem;background-repeat: no-repeat;background-position: center;"></div><p style="position: absolute;top: 50%;right: 100%;width: 15rem;display:none;">Fucked up by my extension</p></div>`;*/
// chrome.runtime.geturl dotn work in MAIN environment
//document.body.innerHTML += bottomMessage;
window.onload = function () {
    document.body.parentNode.replaceChild(
        document.body.cloneNode(true),
        document.body
    );
    let elem = document.createElement("style");
    elem.append(
        ":not(input):not(textarea), img{user-select:auto!important;}#fuck:hover p {display:block!important}"
    );
    document.body.appendChild(elem);

    window.removeEventListener("keyup", window.wpccpDisableKeys);
    window.removeEventListener("keydown", window.wpccpDisableKeys);
    window.removeEventListener("keydown", window.wpccpDisableCtrlActions);
    window.removeEventListener("keyup", window.wpccpDisableCtrlActions);
};
