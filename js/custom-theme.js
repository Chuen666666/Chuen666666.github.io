// custom-theme.js
document.addEventListener('DOMContentLoaded', function() {
  // 建立 progress bar
  var p = document.createElement('div');
  p.id = 'progressbar';
  document.body.appendChild(p);

  // 監聽 scroll 更新進度
  window.addEventListener('scroll', function() {
    var h = document.documentElement;
    var st = h.scrollTop || document.body.scrollTop;
    var sh = h.scrollHeight - h.clientHeight;
    var pct = (st / sh) * 100;
    document.getElementById('progressbar').style.width = pct + '%';
  });

  // 回到頂端按鈕
  var btn = document.createElement('div');
  btn.id = 'toTopBtn';
  btn.title = '回到頂端';
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 15 12 9 18 15"></polyline></svg>';
  document.body.appendChild(btn);
  btn.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });

  // 顯示按鈕條件
  window.addEventListener('scroll', function() {
    btn.style.display = (window.scrollY > 240) ? 'grid' : 'none';
  });
});