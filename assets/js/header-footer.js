function toggleMobileMenu(x) {
  // Toggle hiệu ứng icon (nếu có)
  x.classList.toggle("change");
  
  // Tìm menu và backdrop
  const mobileMenu = document.querySelector('.mobile-menu');
  const backdrop = document.querySelector('.nav-backdrop');
  
  // Thêm/Xóa class active để hiển thị
  mobileMenu.classList.toggle('active');
  
  // Hiển thị backdrop (lớp phủ mờ) nếu cần
  if(backdrop) {
    backdrop.hidden = !backdrop.hidden;
  }
}