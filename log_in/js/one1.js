var telephone=document.getElementById("telephone"),//获取电话ID地址
    password=document.getElementById("password"),//获取密码ID地址
    password_=document.getElementById("password_"),//获取确认密码
    btn=document.getElementById("btn"); //获取验证码的ID地址
var items=document.querySelectorAll(".item");
var count=60;
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
    items[2].innerHTML = "6-12位字母,数字或符号";
    items[2].style.color = "green";
};
password.onblur = function () {
    var reg = /^\w{6,12}$/;
    if (this.value == "") {
        items[2].innerHTML = "请您输入密码!";
        items[2].style.color = "red";
    } else {
        if (!reg.exec(password.value)) {
            items[2].innerHTML = "请输入6-12位字母,数字或符号";
            items[2].style.color = "red";
        } else {
            items[2].innerHTML = "格式正确";
            items[2].style.color = "green";
            test2 = true;
        }
    }
};

//确认两次密码是否一样
password_.onfocus = function () {
    items[3].innerHTML = "请确认两次密码相同";
    items[3].style.color = "green";
};
password_.onblur = function () {
    if (this.value === "") {
        items[3].innerHTML = "请务必再次确认密码";
        items[3].style.color = "red";
    } else {
        if (this.value != password.value) {
            items[3].innerHTML = "两次密码不相同";
            items[3].style.color = "red";
        } else {
            items[3].innerHTML = "格式正确";
            items[3].style.color = "green";
            test4 = true;
        }
    }
};


//验证码倒计时
    function gettime(obj){
            if(count==0){
                obj.removeAttribute("disabled");
                obj.value="获取验证码";
                count=60;
                return;
            }else{
                obj.setAttribute("disabled",true);
                obj.value="重新发送("+count+")";
                count--;
            }

            setTimeout(function(){
           gettime(obj)},1000)
    }

    btn.onclick=function(){gettime(this);}  