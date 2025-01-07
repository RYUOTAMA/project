var objpeople = [
    {
        username: "thai go",
        password: "HEE"
    }    
];

function getInfo() {
    var username = document.getElementById("username")?.value;
    var password = document.getElementById("password")?.value;

    var isMatch = false;

    for (i = 0; i < objpeople.length; i++) {
        if (username == objpeople[i].username && password == objpeople[i].password){
            window.location.href = 'index.html';
            isMatch = true;
            break;
        }
    }
    if (!isMatch) {
        alert("Username หรือ Password ไม่ถูกต้อง!");
    }
}