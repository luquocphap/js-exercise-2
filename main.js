function hideAllExercises() {
    document.getElementById("exerciseStudent").classList.add("hidden");
    document.getElementById("exerciseElectricity").classList.add("hidden");
    document.getElementById("exerciseTax").classList.add("hidden");
    document.getElementById("exerciseCable").classList.add("hidden");
}

function clearActiveTabs() {
    document.getElementById("tabStudent").classList.remove("active");
    document.getElementById("tabElectricity").classList.remove("active");
    document.getElementById("tabTax").classList.remove("active");
    document.getElementById("tabCable").classList.remove("active");
}

function showExercise(exerciseName) {
    hideAllExercises();
    clearActiveTabs();

    if (exerciseName === "student") {
        document.getElementById("exerciseStudent").classList.remove("hidden");
        document.getElementById("tabStudent").classList.add("active");
    } else if (exerciseName === "electricity") {
        document.getElementById("exerciseElectricity").classList.remove("hidden");
        document.getElementById("tabElectricity").classList.add("active");
    } else if (exerciseName === "tax") {
        document.getElementById("exerciseTax").classList.remove("hidden");
        document.getElementById("tabTax").classList.add("active");
    } else if (exerciseName === "cable") {
        document.getElementById("exerciseCable").classList.remove("hidden");
        document.getElementById("tabCable").classList.add("active");
    }
}

/* Các hàm hỗ trợ nhỏ */

function formatVnd(amount) {
    return amount.toFixed(0) + " VND";
}

function formatUsd(amount) {
    return "$" + amount.toFixed(2);
}

function isWholeNumber(number) {
    return number % 1 === 0;
}

/* Bài 1: Kết quả tuyển sinh */

function calculateStudentResult() {
    var studentName = document.getElementById("studentName").value;
    var benchmarkScore = Number(document.getElementById("benchmarkScore").value);
    var subjectOne = Number(document.getElementById("subjectOne").value);
    var subjectTwo = Number(document.getElementById("subjectTwo").value);
    var subjectThree = Number(document.getElementById("subjectThree").value);
    var areaPriority = Number(document.getElementById("areaSelect").value);
    var groupPriority = Number(document.getElementById("groupSelect").value);
    var error = document.getElementById("studentError");
    var result = document.getElementById("studentResult");

    error.textContent = "";
    result.textContent = "";
    result.classList.remove("success");
    result.classList.remove("warning");

    if (studentName === "") {
        error.textContent = "Vui lòng nhập tên thí sinh.";
        return;
    }

    if (document.getElementById("benchmarkScore").value === "" ||
        document.getElementById("subjectOne").value === "" ||
        document.getElementById("subjectTwo").value === "" ||
        document.getElementById("subjectThree").value === "") {
        error.textContent = "Vui lòng nhập điểm chuẩn và điểm của cả ba môn.";
        return;
    }

    if (benchmarkScore < 0 || benchmarkScore > 30) {
        error.textContent = "Điểm chuẩn phải nằm trong khoảng từ 0 đến 30.";
        return;
    }

    if (subjectOne < 0 || subjectOne > 10 ||
        subjectTwo < 0 || subjectTwo > 10 ||
        subjectThree < 0 || subjectThree > 10) {
        error.textContent = "Điểm mỗi môn phải nằm trong khoảng từ 0 đến 10.";
        return;
    }

    var totalScore = subjectOne + subjectTwo + subjectThree + areaPriority + groupPriority;
    var hasZeroScore = subjectOne === 0 || subjectTwo === 0 || subjectThree === 0;

    if (totalScore >= benchmarkScore && !hasZeroScore) {
        result.classList.add("success");
        result.textContent =
            "Đậu\n" +
            "Thí sinh: " + studentName + "\n" +
            "Tổng điểm: " + totalScore.toFixed(1);
    } else {
        result.classList.add("warning");
        result.textContent =
            "Rớt\n" +
            "Thí sinh: " + studentName + "\n" +
            "Tổng điểm: " + totalScore.toFixed(1);
    }
}

/* Bài 2: Tính tiền điện */

function calculateElectricBill() {
    var customerName = document.getElementById("electricCustomerName").value;
    var kwInput = document.getElementById("electricKw").value;
    var kw = Number(kwInput);
    var bill = 0;
    var error = document.getElementById("electricError");
    var result = document.getElementById("electricResult");

    error.textContent = "";
    result.textContent = "";
    result.classList.remove("success");
    result.classList.remove("warning");

    if (customerName === "") {
        error.textContent = "Vui lòng nhập tên khách hàng.";
        return;
    }

    if (kwInput === "") {
        error.textContent = "Vui lòng nhập số điện đã sử dụng.";
        return;
    }

    if (kw < 0) {
        error.textContent = "Số điện sử dụng không được là số âm.";
        return;
    }

    if (kw <= 50) {
        bill = kw * 500;
    } else if (kw <= 100) {
        bill = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 200) {
        bill = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
        bill = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
        bill = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }

    result.classList.add("success");
    result.textContent =
        "Khách hàng: " + customerName + "\n" +
        "Số điện sử dụng: " + kw + " kWh\n" +
        "Tổng tiền điện: " + formatVnd(bill);
}

/* Bài 3: Tính thuế thu nhập */

function calculateIncomeTax() {
    var fullName = document.getElementById("taxFullName").value;
    var incomeInput = document.getElementById("annualIncome").value;
    var dependentsInput = document.getElementById("dependents").value;
    var annualIncome = Number(incomeInput);
    var dependents = Number(dependentsInput);
    var taxableIncome = 0;
    var totalTax = 0;
    var taxRate = "0%";
    var error = document.getElementById("taxError");
    var result = document.getElementById("taxResult");

    error.textContent = "";
    result.textContent = "";
    result.classList.remove("success");
    result.classList.remove("warning");

    if (fullName === "") {
        error.textContent = "Vui lòng nhập họ và tên.";
        return;
    }

    if (incomeInput === "" || dependentsInput === "") {
        error.textContent = "Vui lòng nhập tổng thu nhập năm và số người phụ thuộc.";
        return;
    }

    if (annualIncome < 0) {
        error.textContent = "Tổng thu nhập năm không được là số âm.";
        return;
    }

    if (dependents < 0 || !isWholeNumber(dependents)) {
        error.textContent = "Số người phụ thuộc phải là số nguyên từ 0 trở lên.";
        return;
    }

    taxableIncome = annualIncome - 4000000 - dependents * 1600000;

    if (taxableIncome < 0) {
        taxableIncome = 0;
    }

    if (taxableIncome <= 0) {
        totalTax = 0;
        taxRate = "0%";
    } else if (taxableIncome <= 60000000) {
        totalTax = taxableIncome * 0.05;
        taxRate = "5%";
    } else if (taxableIncome <= 120000000) {
        totalTax = 60000000 * 0.05 + (taxableIncome - 60000000) * 0.10;
        taxRate = "10%";
    } else if (taxableIncome <= 210000000) {
        totalTax = 60000000 * 0.05 + 60000000 * 0.10 + (taxableIncome - 120000000) * 0.15;
        taxRate = "15%";
    } else if (taxableIncome <= 384000000) {
        totalTax = 60000000 * 0.05 + 60000000 * 0.10 + 90000000 * 0.15 + (taxableIncome - 210000000) * 0.20;
        taxRate = "20%";
    } else if (taxableIncome <= 624000000) {
        totalTax = 60000000 * 0.05 + 60000000 * 0.10 + 90000000 * 0.15 + 174000000 * 0.20 + (taxableIncome - 384000000) * 0.25;
        taxRate = "25%";
    } else if (taxableIncome <= 960000000) {
        totalTax = 60000000 * 0.05 + 60000000 * 0.10 + 90000000 * 0.15 + 174000000 * 0.20 + 240000000 * 0.25 + (taxableIncome - 624000000) * 0.30;
        taxRate = "30%";
    } else {
        totalTax = 60000000 * 0.05 + 60000000 * 0.10 + 90000000 * 0.15 + 174000000 * 0.20 + 240000000 * 0.25 + 336000000 * 0.30 + (taxableIncome - 960000000) * 0.35;
        taxRate = "35%";
    }

    result.classList.add("success");
    result.textContent =
        "Người nộp thuế: " + fullName + "\n" +
        "Thu nhập chịu thuế: " + formatVnd(taxableIncome) + "\n" +
        "Thuế suất: " + taxRate + "\n" +
        "Tổng tiền thuế: " + formatVnd(totalTax);
}

/* Bài 4: Tính tiền cáp */

function updateCableConnectionField() {
    var customerType = document.getElementById("cableCustomerType").value;
    var connectionGroup = document.getElementById("connectionGroup");
    var numberOfConnections = document.getElementById("numberOfConnections");

    if (customerType === "business") {
        connectionGroup.classList.remove("hidden");
        numberOfConnections.disabled = false;
    } else {
        connectionGroup.classList.add("hidden");
        numberOfConnections.disabled = true;
        numberOfConnections.value = "";
    }
}

function calculateCableBill() {
    var customerId = document.getElementById("cableCustomerId").value;
    var customerType = document.getElementById("cableCustomerType").value;
    var connectionsInput = document.getElementById("numberOfConnections").value;
    var channelsInput = document.getElementById("premiumChannels").value;
    var numberOfConnections = Number(connectionsInput);
    var premiumChannels = Number(channelsInput);
    var bill = 0;
    var extraConnectionFee = 0;
    var customerTypeText = "";
    var error = document.getElementById("cableError");
    var result = document.getElementById("cableResult");

    error.textContent = "";
    result.textContent = "";
    result.classList.remove("success");
    result.classList.remove("warning");

    if (customerId === "") {
        error.textContent = "Vui lòng nhập mã khách hàng.";
        return;
    }

    if (channelsInput === "") {
        error.textContent = "Vui lòng nhập số kênh cao cấp.";
        return;
    }

    if (premiumChannels < 0 || !isWholeNumber(premiumChannels)) {
        error.textContent = "Số kênh cao cấp phải là số nguyên từ 0 trở lên.";
        return;
    }

    if (customerType === "residential") {
        customerTypeText = "Nhà dân";
        bill = 4.5 + 20.5 + premiumChannels * 7.5;
    } else if (customerType === "business") {
        customerTypeText = "Doanh nghiệp";

        if (connectionsInput === "") {
            error.textContent = "Vui lòng nhập số kết nối cho khách hàng doanh nghiệp.";
            return;
        }

        if (numberOfConnections <= 0 || !isWholeNumber(numberOfConnections)) {
            error.textContent = "Số kết nối doanh nghiệp phải là số nguyên lớn hơn 0.";
            return;
        }

        if (numberOfConnections > 10) {
            extraConnectionFee = (numberOfConnections - 10) * 5;
        }

        bill = 15 + 75 + extraConnectionFee + premiumChannels * 50;
    }

    result.classList.add("success");
    result.textContent =
        "Mã khách hàng: " + customerId + "\n" +
        "Loại khách hàng: " + customerTypeText + "\n" +
        "Số kênh cao cấp: " + premiumChannels + "\n" +
        "Tổng tiền cáp: " + formatUsd(bill);
}

/* Sự kiện người dùng */

document.getElementById("tabStudent").addEventListener("click", function () {
    showExercise("student");
});

document.getElementById("tabElectricity").addEventListener("click", function () {
    showExercise("electricity");
});

document.getElementById("tabTax").addEventListener("click", function () {
    showExercise("tax");
});

document.getElementById("tabCable").addEventListener("click", function () {
    showExercise("cable");
});

document.getElementById("studentButton").addEventListener("click", calculateStudentResult);
document.getElementById("electricButton").addEventListener("click", calculateElectricBill);
document.getElementById("taxButton").addEventListener("click", calculateIncomeTax);
document.getElementById("cableButton").addEventListener("click", calculateCableBill);
document.getElementById("cableCustomerType").addEventListener("change", updateCableConnectionField);

updateCableConnectionField();
