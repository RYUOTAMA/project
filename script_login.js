var objpeople = [
    {
        username: "heeyaimak",
        password: "HEE"
    }    
];

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (i = 0; i < objpeople.length; i++) {
        if (username == objpeople[i].username && password == objpeople[i].password){
            console.log(HEE);
        }
    }
}