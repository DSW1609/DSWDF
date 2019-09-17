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
df_jia1("#df_show_rs", 58660, 5)
// 今日入境人数
df_jia1("#df_show_rj", 283, 5)
// 查询寿命点击事件-------------
// 获取查询寿命按钮
var use_cx = document.querySelector("#use_cx");
// 获取查询按钮弹出模块
var use_cx_mk = document.querySelector(".use_cx");
var use_gb_bt = document.querySelector(".use_gb_bt");
var use_fh_bt = document.querySelector(".use_fh_bt");
use_cx.addEventListener('click', function() {
  use_cx_mk.style.height = "50%";
})
use_cx_mk.addEventListener('mouseleave', function() {
  cx_body_gb();
})
use_gb_bt.addEventListener('click', function() {
  cx_body_gb();
})
// 返回按钮点击事件
use_fh_bt.addEventListener('click', function() {
  cx_body.style.left = "0%";
  cx_body2.style.left = "110%";
  use_cx_mk.style.height = "50%";
})
// 关闭调用函数
function cx_body_gb() {
  use_cx_mk.style.height = "0%";
  cx_body.style.left = "0%";
  cx_body2.style.left = "110%";
  // 清空文本框的内容
  cx_name.value = "";
  cx_sex.value = "";
}
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
  use_cx_mk.style.height = "60%";
  cx_name_v.innerHTML = cx_name.value;
  cx_sex_v.innerHTML = cx_sex.value;
})
// 调用倒计时函数
TimeDown("#cx_hours", "#cx_minutes", "#cx_seconds", "2019-9-17 24:00:00");
