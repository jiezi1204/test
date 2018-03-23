var telephone=document.getElementById("telephone"),//获取电话ID地址
    password=document.getElementById("password");//获取密码ID地址
var items=document.querySelectorAll(".item");
var test1 = false, test2 = false, test3 = false, test4 = false;
   //电话验证
    telephone.onfocus = function () {
    items[0].innerHTML = "请输入您的手机号码";
    items[0].style.color = "green";
};
telephone.onblur = function () {
    var reg = /^\d{11}$/;
    if (this.value == "") {
        items[0].innerHTML = "请您输入11位手机号码!";
        items[0].style.color = "red";
    } else {
        if (!reg.exec(telephone.value)) {
            items[0].innerHTML = "请您输入11位手机号码";
            items[0].style.color = "red";
        } else {
            items[0].innerHTML = "格式正确";
            items[0].style.color = "green";
            test1 = true;
        }
    }
};

 //密码验证
 password.onfocus = function () {
    items[1].innerHTML = "6-12位字母,数字或符号";
    items[1].style.color = "green";
};
password.onblur = function () {
    var reg = /^\w{6,12}$/;
    if (this.value == "") {
        items[1].innerHTML = "请您输入密码!";
        items[1].style.color = "red";
    } else {
        if (!reg.exec(userPass.value)) {
            items[1].innerHTML = "请输入6-12位字母,数字或符号";
            items[1].style.color = "red";
        } else {
            items[1].innerHTML = "格式正确";
            items[1].style.color = "green";
            test2 = true;
        }
    }
};

