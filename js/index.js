// 封装人数自增函数
function df_jia1(obj, cs_num, time) {
  var obj = document.querySelector(obj);
  var obj_num = cs_num;
  var obj_timer = setInterval(function() {
    obj_num++;
    obj.innerHTML = obj_num;
  }, time * 1000)
}
// 地府总人数
df_jia1("#df_show_rs", 30000, 5)
// 今日入境人数
df_jia1("#df_show_rj", 900, 5)
// 查询寿命点击事件
var use_cx = document.querySelector("#use_cx");
var use_cx_mk = document.querySelector(".use_cx");
use_cx.addEventListener('click', function() {
  use_cx_mk.style.height = "60%";
})
use_cx_mk.addEventListener('mouseleave', function() {
  this.style.height = "0%";
  cx_body.style.left = "0%";
  cx_body2.style.left = "110%";
})
// 查询寿命按钮点击事件
var cx_name = document.querySelector("#cx_name");
var cx_sex = document.querySelector("#cx_sex");
var cx_bt = document.querySelector("#cx_bt");
var cx_body = document.querySelector(".use_cx_body");
var cx_body2 = document.querySelector(".use_cx_body2");
var cx_name_v = document.querySelector("#cx_name_v");
var cx_sex_v = document.querySelector("#cx_sex_v");
cx_bt.addEventListener('click', function() {
  cx_body.style.left = "-100%";
  cx_body2.style.left = "10%";
  cx_name_v.innerHTML = cx_name.value;
  cx_sex_v.innerHTML = cx_sex.value;
})
