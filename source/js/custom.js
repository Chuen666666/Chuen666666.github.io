// Google Sheet
function initSheetZoom() {
  const slider = document.getElementById('zoomSlider');
  const frame = document.getElementById('sheetFrame');
  const valLabel = document.getElementById('zoomValue');
  
  // 檢查頁面上是否存在這些元素，避免在沒有表格的頁面報錯
  if (slider && frame && valLabel) {
    slider.addEventListener('input', (e) => {
      const scale = e.target.value;
      valLabel.innerText = Math.round(scale * 100) + '%';
      
      // 更新縮放與比例補償
      frame.style.transform = `scale(${scale})`;
      frame.style.width = (100 / scale) + '%';
      frame.style.height = (600 / scale) + 'px';
    });
  }
}

// 確保在頁面載入完成後執行
document.addEventListener('DOMContentLoaded', initSheetZoom);
// 如果你有使用 PWA 或某些局部刷新的插件，可能也需要監聽此事件
document.addEventListener('pjax:complete', initSheetZoom);

// 依台北時區計算交往天數，起始日視為第 1 日
function initRelationshipDays() {
  const counter = document.getElementById('relationshipDays');
  if (!counter) return;

  const startDate = counter.dataset.startDate.split('-').map(Number);
  const taipeiDateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).formatToParts(new Date());
  const getDatePart = (type) => Number(
    taipeiDateParts.find((part) => part.type === type).value
  );

  const startTime = Date.UTC(startDate[0], startDate[1] - 1, startDate[2]);
  const todayTime = Date.UTC(
    getDatePart('year'),
    getDatePart('month') - 1,
    getDatePart('day')
  );
  const days = Math.floor((todayTime - startTime) / 86400000) + 1;

  counter.textContent = days.toLocaleString('zh-TW');
}

document.addEventListener('DOMContentLoaded', initRelationshipDays);
document.addEventListener('pjax:complete', initRelationshipDays);
