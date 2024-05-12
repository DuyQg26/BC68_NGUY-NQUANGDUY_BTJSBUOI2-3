// Bài 1

document.getElementById("calc1").onclick = function () {
  let ngay = document.getElementById("daynumb").value * 1;
  let ketqua = ngay * 100000;
  let show1 = document.getElementById("result1");
  //   console.log(ketqua.toLocaleString('vi-VN'))
  show1.innerHTML =
    "Lương bạn nhận được là: " + ketqua.toLocaleString("vi-VN") + "đ";
  document.getElementById("result1").appendChild(show1);
};

// Bài 2
document.getElementById("calc2").onclick = function () {
  let so1 = document.getElementById("numb1").value * 1;
  let so2 = document.getElementById("numb2").value * 1;
  let so3 = document.getElementById("numb3").value * 1;
  let so4 = document.getElementById("numb4").value * 1;
  let so5 = document.getElementById("numb5").value * 1;
  let trungBinhCong = (so1 + so2 + so3 + so4 + so5) / 5;
  document.getElementById("result2").innerHTML =
    "Số trung bình cộng là: " + trungBinhCong;
  //   document.getElementById("result2").appendChild(trungBinhCong);
};

// Bài 3

document.getElementById("calc3").onclick = function () {
  let soTien = document.getElementById("amount").value * 1;
  let quyDoi = soTien * 23.5 * 1000;
  document.getElementById("result3").innerHTML =
    "Số tiền quy đổi ra là: " + quyDoi.toLocaleString("vi-VN") + " VND";
  // document.getElementById("result3").appendChild
};

// Bài 4
document.getElementById("calc4").onclick = function () {
  let doDaiA = document.getElementById("a").value * 1;
  let doDaiB = document.getElementById("b").value * 1;
  if (doDaiA == doDaiB) {
    document.getElementById("alert").innerHTML =
      "Xin vui lòng nhập lại độ dài 1 trong 2 cạnh";
  } else {
    document.getElementById("alert").innerHTML = "";
    let dienTich = doDaiA * doDaiB;
    let chuVi = (doDaiA + doDaiB) * 2;
    document.getElementById("result4").innerHTML =
      "Diện tích của HCN là: " + dienTich;
    document.getElementById("result5").innerHTML =
      "Chu vi của HCN là: " + chuVi;
  }
};

// Bài 5
document.getElementById("calc5").onclick = function () {
  let so = document.getElementById("numb").value * 1;
  if (so < 10 || so >= 100) {
    document.getElementById("alert1").innerHTML = "Xin vui lòng nhập lại";
    document.getElementById("result6").innerHTML = ""
  } else {
    
    let hangDV = so % 10;
    let hangChuc = Math.floor(so / 10);
    console.log(hangDV);
    console.log(hangChuc);
    let tong = hangDV + hangChuc;
    document.getElementById("result6").innerHTML =
      "Tổng của 2 ký số là: " + tong;
    document.getElementById("alert1").innerHTML = "";
  }
}