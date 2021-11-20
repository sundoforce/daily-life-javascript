let sendFamily = false;
const superEventHandler = {
    handleImageClick: function () {
        sendFamily = confirm("가족에게 위치를 발송 하시겠습니까?");
        if (sendFamily) pushSend();
    },
};

function pushSend() {
    // 푸시 발송
    const key = '';
    let to = "";
    const notification = {
        'title': '제목',
        'body': '내용',
        // 'icon': '아이콘',
        // 'click_action': 'url'
    };

    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            'Authorization': 'key=' + key,
            'Content-Type': 'application/json',
            'mode': 'cors',
        },
        'body': JSON.stringify({
            'notification': notification,
            'to': to
        })
    }).then(function (response) {
        console.log('fetch success');
        console.log(response);
    }).catch(function (error) {
        console.error(error);
        alert('fetch error');
    });
}

const image = document.querySelector("img");

image.addEventListener("click", superEventHandler.handleImageClick);