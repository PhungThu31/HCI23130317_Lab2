function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Lưu thông tin xác thực bất kỳ (không kiểm tra tính hợp lệ)
    localStorage.setItem("isAuthenticated", "true"); // Lưu thông tin xác thực
    alert("Đăng nhập thành công!"); // Hiển thị thông báo đăng nhập thành công
    window.location.href = "dashboard.html"; // Chuyển hướng đến trang dashboard
    return false; // Ngăn không cho form được submit
  }
  