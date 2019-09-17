// 倒计时效果
function TimeDown(nhours, nminutes, nseconds, endDateStr) {
  var nhours = document.querySelector(nhours);
  var nminutes = document.querySelector(nminutes);
  var nseconds = document.querySelector(nseconds);
  nhours.timer = setInterval(function() {
    //结束时间
    var endDate = new Date(endDateStr);
    //当前时间
    var nowDate = new Date();
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    // 如果小于10 在前面添加0
    var less10 = [hours, minutes, seconds];
    for (var i = 0; i < less10.length; i++) {
      if (less10[i] < 10) {
        less10[i] = '0' + less10[i];
      }
    }
    // 输出到页面
    nhours.innerHTML = less10[0];
    nminutes.innerHTML = less10[1];
    nseconds.innerHTML = less10[2];
  }, 1000)
}
