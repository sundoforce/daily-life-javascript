let sendFamily = false;

const superEventHandler = {
    handleImageClick: function () {
        sendFamily = confirm("가족에게 위치를 발송 하시겠습니까?");
        if (sendFamily) firebaseNotification();
    },
};

function pushSend() {
    // 푸시 발송
    const notification = {
        'title': '마이렌 - 가족 사고위치 알림',
        'body': '사고위치: 대전 유성구 덕명동  \n' +
            '[지도보기]',
        // 'icon': '아이콘',
        // 'click_action': 'url'
    };

    const options =
        {
            "notification": {
                "title": "CWMS",
                "body": "from google apps scritpt",
                "click_action": "site",
                "icon": "http://url-to-an-icon/icon.png"
            },
            "to": "key"
        };

    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'mode': 'no-cors',
        'headers': {
            'Authorization': `key=${key}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        'body': {
            'notification': notification,
            'to': to,
            'priority': 'high',
        }
    }).then(function (response) {
        console.log('fetch success');
        console.log(response);
    }).catch(function (error) {
        console.error(error);
        alert('fetch error');
    });
}

function firebaseNotification() {
    var headers = {
        "Authorization" : key,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };

    // Modified
    var payload = {
        "notification": {
            "title": "CWMS",
            "body": "from google apps scritpt",
            // "click_action": "site",
            // "icon": "http://url-to-an-icon/icon.png"
        },
        "to": to,
        'priority': 'high',
    };

    // Modified
    var options = {
        method: "POST",
        mode: 'no-cors',
        contentType: "application/json",
        headers: headers,
        payload: JSON.stringify(payload) // <--- Modified
    }


    fetch('https://fcm.googleapis.com/fcm/send',options).then(function (response) {
        console.log('fetch success');
        console.log(response);
    }).catch(function (error) {
        console.error(error);
        alert('fetch error');
    });
}

const image = document.querySelector("img");

image.addEventListener("click", superEventHandler.handleImageClick);