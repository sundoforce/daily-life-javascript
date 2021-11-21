let sendFamily = false;
const NATIVE_DEVICE_PUSH_TOKEN = ""
const serverKey = ''

const superEventHandler = {
    handleImageClick: function () {
        sendFamily = confirm("가족에게 위치를 발송 하시겠습니까?");
        if (sendFamily) firebaseNotification();
    },
};

function firebaseNotification() {
    var  body = {
        to: NATIVE_DEVICE_PUSH_TOKEN,
        notification: {
                title: "마이렌 - 가족 사고위치 알림",
                body: '사고위치: 대전 유성구 덕명동  \n' +
                    '[지도보기]',
                // sound: "default",
                // priority: "high",
                // show_in_foreground: true,
                // targetScreen: "detail"

        },
        priority: "high",
    }

    axios({
        method: 'post', //you can set what request you want to be
        url: 'https://fcm.googleapis.com/fcm/send',
        data: body,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "key=" + serverKey
        }
    }).then((res)=>{
        console.log(res)
    }).catch((e)=>{
        console.log(e)
    })
}

const image = document.querySelector("img");
image.addEventListener("click", superEventHandler.handleImageClick);