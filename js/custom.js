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