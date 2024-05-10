// Lấy phần tử form
var loginForm = document.querySelector("form");

// Mặc định ẩn form khi trang được tải
loginForm.style.display = "none";

// Lấy phần tử button sign-in
var signInBtn = document.querySelector(".sign-in");

// Khi click vào button sign-in, hiển thị form
signInBtn.onclick = function() {
  loginForm.style.display = "block";
}

// Lấy phần tử đóng form
var closeBtn = document.querySelector(".close");

// Khi click vào nút đóng (x), đóng form
closeBtn.onclick = function(event) {
  loginForm.style.display = "none";
  event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click
}

// Khi click ngoài form, không làm gì cả
loginForm.onclick = function(event) {
  event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click
}

// Khi click ngoài form, đóng form
window.onclick = function(event) {
  if (event.target !== signInBtn && event.target !== loginForm) {
    loginForm.style.display = "none";
  }
}

// ------------------------------
// ẩn hiện password
const passwordInput = document.getElementById('password');
const toggleEye = document.querySelectorAll('.bi');

toggleEye.forEach(eye => {
  eye.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eye.classList.remove('bi-eye-slash');
      eye.classList.add('bi-eye');
    } else {
      passwordInput.type = 'password';
      eye.classList.remove('bi-eye');
      eye.classList.add('bi-eye-slash');
    }
  });
});
// -------------------------------
