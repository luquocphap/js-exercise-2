# Mô Hình 3 Khối Cho 4 Bài Tập JavaScript

Mỗi bài tập trong project đều có thể chia thành 3 phần:

```text
Đầu vào -> Xử lý -> Đầu ra
```

Nói đơn giản:

- Đầu vào là dữ liệu người dùng nhập trên giao diện.
- Xử lý là phần JavaScript kiểm tra dữ liệu và tính toán.
- Đầu ra là kết quả hoặc thông báo lỗi hiển thị lại cho người dùng.

## Bài 1: Kết Quả Tuyển Sinh

### Đầu vào

Người dùng nhập hoặc chọn các thông tin:

- Tên thí sinh
- Điểm chuẩn
- Điểm môn 1
- Điểm môn 2
- Điểm môn 3
- Khu vực ưu tiên
- Đối tượng ưu tiên

### Xử lý

Chương trình thực hiện các bước:

- Kiểm tra tên thí sinh có được nhập hay chưa.
- Kiểm tra điểm chuẩn và điểm 3 môn có đầy đủ hay không.
- Kiểm tra điểm chuẩn nằm trong khoảng từ 0 đến 30.
- Kiểm tra điểm mỗi môn nằm trong khoảng từ 0 đến 10.
- Tính tổng điểm của thí sinh.
- Kiểm tra có môn nào bị 0 điểm hay không.
- So sánh tổng điểm với điểm chuẩn.

Công thức tính tổng điểm:

```text
Tổng điểm = Điểm môn 1 + Điểm môn 2 + Điểm môn 3 + Điểm khu vực + Điểm đối tượng
```

Thí sinh đậu khi:

```text
Tổng điểm >= Điểm chuẩn và không có môn nào bị 0 điểm
```

### Đầu ra

Chương trình hiển thị:

- Thí sinh đậu hoặc rớt.
- Tên thí sinh.
- Tổng điểm.
- Thông báo lỗi nếu dữ liệu nhập không hợp lệ.

## Bài 2: Tính Tiền Điện

### Đầu vào

Người dùng nhập:

- Tên khách hàng
- Số điện sử dụng, tính theo kWh

### Xử lý

Chương trình thực hiện các bước:

- Kiểm tra tên khách hàng có được nhập hay chưa.
- Kiểm tra số điện đã được nhập hay chưa.
- Kiểm tra số điện không được nhỏ hơn 0.
- Tính tiền điện theo từng bậc giá.

Bảng giá điện:

| Mức sử dụng | Đơn giá |
| --- | ---: |
| 50 kWh đầu | 500 VND/kWh |
| 50 kWh tiếp theo | 650 VND/kWh |
| 100 kWh tiếp theo | 850 VND/kWh |
| 150 kWh tiếp theo | 1.100 VND/kWh |
| Phần còn lại | 1.300 VND/kWh |

### Đầu ra

Chương trình hiển thị:

- Tên khách hàng.
- Số điện đã sử dụng.
- Tổng tiền điện phải trả.
- Thông báo lỗi nếu dữ liệu nhập không hợp lệ.

## Bài 3: Tính Thuế Thu Nhập Cá Nhân

### Đầu vào

Người dùng nhập:

- Họ và tên
- Tổng thu nhập năm
- Số người phụ thuộc

### Xử lý

Chương trình thực hiện các bước:

- Kiểm tra họ tên có được nhập hay chưa.
- Kiểm tra tổng thu nhập năm và số người phụ thuộc có đầy đủ hay không.
- Kiểm tra tổng thu nhập năm không được nhỏ hơn 0.
- Kiểm tra số người phụ thuộc là số nguyên từ 0 trở lên.
- Tính thu nhập chịu thuế.
- Tính tiền thuế theo mức thuế suất phù hợp.

Công thức tính thu nhập chịu thuế:

```text
Thu nhập chịu thuế = Tổng thu nhập năm - 4.000.000 - Số người phụ thuộc * 1.600.000
```

Nếu thu nhập chịu thuế nhỏ hơn 0 thì tính là 0.

Bảng thuế suất:

| Thu nhập chịu thuế | Thuế suất |
| --- | ---: |
| Đến 60.000.000 VND | 5% |
| Trên 60.000.000 đến 120.000.000 VND | 10% |
| Trên 120.000.000 đến 210.000.000 VND | 15% |
| Trên 210.000.000 đến 384.000.000 VND | 20% |
| Trên 384.000.000 đến 624.000.000 VND | 25% |
| Trên 624.000.000 đến 960.000.000 VND | 30% |
| Trên 960.000.000 VND | 35% |

### Đầu ra

Chương trình hiển thị:

- Người nộp thuế.
- Thu nhập chịu thuế.
- Thuế suất.
- Tổng tiền thuế.
- Thông báo lỗi nếu dữ liệu nhập không hợp lệ.

## Bài 4: Tính Tiền Cáp

### Đầu vào

Người dùng nhập hoặc chọn:

- Mã khách hàng
- Loại khách hàng
- Số kết nối, nếu là khách hàng doanh nghiệp
- Số kênh cao cấp

### Xử lý

Chương trình thực hiện các bước:

- Kiểm tra mã khách hàng có được nhập hay chưa.
- Kiểm tra số kênh cao cấp là số nguyên từ 0 trở lên.
- Nếu là khách hàng nhà dân, tính tiền theo công thức nhà dân.
- Nếu là khách hàng doanh nghiệp, kiểm tra số kết nối và tính thêm phí kết nối nếu có.

Công thức cho khách hàng nhà dân:

```text
Tiền cáp = 4.5 + 20.5 + Số kênh cao cấp * 7.5
```

Công thức cho khách hàng doanh nghiệp:

```text
Tiền cáp = 15 + 75 + Phí kết nối thêm + Số kênh cao cấp * 50
```

Phí kết nối thêm chỉ áp dụng khi doanh nghiệp có hơn 10 kết nối:

```text
Phí kết nối thêm = (Số kết nối - 10) * 5
```

### Đầu ra

Chương trình hiển thị:

- Mã khách hàng.
- Loại khách hàng.
- Số kênh cao cấp.
- Tổng tiền cáp.
- Thông báo lỗi nếu dữ liệu nhập không hợp lệ.

## Tóm Tắt

| Bài tập | Đầu vào | Xử lý | Đầu ra |
| --- | --- | --- | --- |
| Tuyển sinh | Điểm và thông tin ưu tiên | Tính tổng điểm, xét đậu/rớt | Kết quả tuyển sinh |
| Tiền điện | Tên và số kWh | Tính tiền theo bậc thang | Tổng tiền điện |
| Thuế thu nhập | Thu nhập và người phụ thuộc | Tính thu nhập chịu thuế, tính thuế | Tổng tiền thuế |
| Tiền cáp | Loại khách hàng, số kết nối, số kênh | Tính phí theo loại khách hàng | Tổng tiền cáp |
