function onGeoOk(position){
    console.log(position);
}
function onGoeError(){
    alert('error');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGoeError);
