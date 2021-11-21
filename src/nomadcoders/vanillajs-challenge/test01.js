let sendFamily = false;
const NATIVE_DEVICE_PUSH_TOKEN = "eeRtE5xVRWyI633MLqrAwN:APA91bFGzJFl9N73TCjTWwZdaKwIJ6sLw9zIVIgsjg1WWzeLgye89k-rmiqcwqsGifK4-k5ad72Y-tQOOVYZtya7_ZLc396jSSUvXvMxIYnkrxGdvapXQwxye3o9EYoFZ7oEpyP3m_MJ";

const superEventHandler = {
    handleImageClick: function () {
        sendFamily = confirm("가족에게 위치를 발송 하시겠습니까?");
        if (sendFamily) firebaseNotification();
    },
};

function firebaseNotification() {
    fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',

        },
        body: JSON.stringify({
            priority: 'normal',
            notification: {
                // experienceId: '@yourExpoUsername/yourProjectSlug',
                title: "\uD83D\uDCE7 You've got mail",
                body: 'Hello world! \uD83C\uDF10',
            },
        }),
    }).then((res) => {
        if(!res.ok) {
            throw new Error('400 , 500')
        }
        console.log(res)
    }).then((r) => {
        console.log(r);
    }).catch(() => {
        console.log("rrr");
    });


}

const image = document.querySelector("img");

image.addEventListener("click", superEventHandler.handleImageClick);