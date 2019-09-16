function df_jia1(obj, cs_num,time) {
  var obj = document.querySelector(obj);
  var obj_num = cs_num;
  var obj_timer = setInterval(function() {
    obj_num++;
    obj.innerHTML = obj_num;
  }, time*1000)
}
// 地府总人数
df_jia1("#df_show_rs",30000,5)
// 今日入境人数
df_jia1("#df_show_rj",900,5)
