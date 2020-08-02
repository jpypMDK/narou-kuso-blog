document.oncontextmenu = function() {
    rightclickcheck = document.getElementById("rightclickcheck").checked;
    if (rightclickcheck == true) {
        alert("右クリック禁止！");
        return false;
    }
}

var device = navigator.userAgent.toLowerCase();

function isSmartPhone() {

    if (device.match(/iPhone|Android.+Mobile/)) {
        document.body.style.backgroundColor = "#fff";
        return true;
    } else {
        document.body.style.backgroundColor = "#000";
        return device;
    }
}