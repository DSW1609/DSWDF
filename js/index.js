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
// 获取上方logo设置上移事件
var use_cx_im = document.querySelector(".use_cx_im");

// 查询寿命点击事件
use_cx.addEventListener('click', function() {
  use_cx_mk.style.height = "40%";
  use_cx_im.style.top = "-20px";
})
// 查询模块移出事件
use_cx_mk.addEventListener('mouseleave', function() {
  cx_body_gb();
})
// 关闭按钮点击事件
use_gb_bt.addEventListener('click', function() {
  cx_body_gb();
})
// 返回按钮点击事件
use_fh_bt.addEventListener('click', function() {
  cx_body.style.left = "0%";
  cx_body2.style.left = "110%";
  use_cx_mk.style.height = "40%";
})
// 关闭调用函数
function cx_body_gb() {
  use_cx_mk.style.height = "0%";
  cx_body.style.left = "0%";
  cx_body2.style.left = "110%";
  // 清空文本框的内容
  cx_name.value = "";
  cx_sex.value = "";
  use_cx_im.style.top = "0px";
}
// 查询寿命按钮点击事件
var cx_name = document.querySelector("#cx_name");
var cx_sex = document.querySelector("#cx_sex");
var cx_bt = document.querySelector("#cx_bt");
var cx_body = document.querySelector(".use_cx_body");
var cx_body2 = document.querySelector(".use_cx_body2");
var cx_name_v = document.querySelector("#cx_name_v");
var cx_sex_v = document.querySelector("#cx_sex_v");
// 判断用户输入性别是否合法
var cx_name_t = document.querySelectorAll(".cx_name_t");
cx_bt.addEventListener('click', function() {
  if (cx_name.value == "") {
    cx_name_t[0].style.opacity = "1";
    cx_bt.style.background = "#d81f07";
  } else {
    cx_name_t[0].style.opacity = "0";
    cx_bt.style.background = "#000";
  }
  if (cx_sex.value == "男" || cx_sex.value == "女") {
    if (cx_name.value == "") {
      return false;
    }
    cx_name_t[1].style.opacity = "0";
    cx_bt.style.background = "#000";
    cx_body.style.left = "-100%";
    cx_body2.style.left = "10%";
    use_cx_mk.style.height = "60%";
    cx_name_v.innerHTML = cx_name.value;
    cx_sex_v.innerHTML = cx_sex.value;
  } else {
    cx_name_t[1].style.opacity = "1";
    cx_bt.style.background = "#d81f07";
    return false;
  }
})
// 调用倒计时函数
TimeDown("#cx_hours", "#cx_minutes", "#cx_seconds", "2019-9-18 24:00:00");
// 顶部公告滚动事件
var df_gg_th = document.querySelector(".df_gg_th");
var df_gd_te = document.querySelector("#df_gd_te");
// 创建数组板寸公告信息
var gd_te_arr = ['公告：今天地府天气晴,气温75°C', '公告：本网站纯属娱乐,切勿当真']
window.addEventListener('DOMContentLoaded', function() {
  // 优先调用一次滚动函数
  df_gd()
  setInterval(function() {
    df_gd()
  }, 7100)
})
// 创建一个变量，用来输出数组内的内容
var gd_count = 0;
// 滚动函数
function df_gd() {
  df_gg_th.style.transition = "7s linear";
  df_gg_th.style.left = "-130%";
  df_gd_te.innerHTML = gd_te_arr[gd_count];
  gd_count++;
  if (gd_count == gd_te_arr.length) {
    gd_count = 0;
  }
  setTimeout(function() {
    if (df_gg_th.style.left == "-130%") {
      df_gg_th.style.transition = "0s linear";
      df_gg_th.style.left = "100%";
    }
  }, 7000)
}
// 底部导航栏点击切换事件
var nav_btm_one = document.querySelectorAll(".nav_btm_one");
var df_body = document.querySelectorAll(".df_body");
var btm_te_fff = document.querySelector(".df_nav_btm").querySelectorAll("span");
// 循环注册点击事件
for (var i = 0; i < nav_btm_one.length; i++) {
  nav_btm_one[i].addEventListener("click", function() {
    // 得到当前点击的自定义属性
    var nav_btm_index = this.getAttribute("data-index");
    // 首先隐藏所有的df_body
    for (var i = 0; i < df_body.length; i++) {
      df_body[i].style.display = "none";
    }
    // 根据自定义属性显示对应的df_body
    df_body[nav_btm_index].style.display = "block";
    // 清除所有的btm_te_fff类名
    for (var i = 0; i < btm_te_fff.length; i++) {
      btm_te_fff[i].classList.remove("btm_te_fff");
    }
    // 根据自定义属性给对应的按钮添加类名
    btm_te_fff[nav_btm_index].classList.add("btm_te_fff");
  })
}
// 入境管理按钮点击事件
// 获得入境管理按钮
var use_rj = document.querySelector("#use_rj");
// 获得入境管理弹出模块
var use_rj_mk = document.querySelector(".use_rj")
// 获得上方logo
var use_rj_im = document.querySelector(".use_rj_im");
// 设置点击事件
use_rj.addEventListener("click", function() {
  use_rj_mk.style.height = "80%";
  use_rj_im.style.top = "-20px";
})
// 设置移出事件
use_rj_mk.addEventListener("mouseleave", function() {
  use_rj_mk.style.height = "0%";
  use_rj_im.style.top = "0px";
})
// 入境模块点击关闭事件
var use_rj_gb = document.querySelector(".use_rj_gb");
use_rj_gb.addEventListener("click", function() {
  use_rj_mk.style.height = "0%";
  use_rj_im.style.top = "0px";
})
