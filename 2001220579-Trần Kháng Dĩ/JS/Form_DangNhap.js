var x=document.getElementById("login");
          var y=document.getElementById("register");
          var z=document.getElementById("btn");

          function register(){
              x.style.left = "-400px";
              y.style.left = "50px";
              z.style.left = "110px";
          }

          function login(){
              x.style.left = "50px";
              y.style.left = "450px";
              z.style.left = "0";
          }


          function KiemTraLogin() {
              var password = document.getElementById("login-password").value;
              var passwordError = document.getElementById("login-password-error");

              // Xóa thông báo lỗi cũ
              passwordError.textContent = "";


              // Kiểm tra password
              var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/;
              if (password.length <= 10 || !passwordPattern.test(password)) {
                  passwordError.textContent = "Password phải trên 10 ký tự bao gồm cả chữ cái và số";
                  return false;
              }
              window.location.href = "index.html";
              return false;
          }

          function KiemTraRegister() {
              var email = document.getElementById("register-email").value;
              var password = document.getElementById("register-password").value;
              var emailError = document.getElementById("register-email-error");
              var passwordError = document.getElementById("register-password-error");

              // Xóa thông báo lỗi cũ
              emailError.textContent = "";
              passwordError.textContent = "";

              // Kiểm tra email
              var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (email.length <= 10 || !emailPattern.test(email)) {
                  emailError.textContent = "Email không hợp lệ";
                  return false;
              }

              // Kiểm tra password
              var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/;
              if (password.length <= 10 || !passwordPattern.test(password)) {
                  passwordError.textContent = "Password phải trên 10 ký tự bao gồm cả chữ cái và số";
                  return false;
              }

              return true;
          }