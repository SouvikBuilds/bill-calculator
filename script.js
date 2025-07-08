document.addEventListener("DOMContentLoaded", function () {
    let Count_Button = document.getElementById("cal_total_bill")
    Count_Button.addEventListener("click", function () {
        let results = document.getElementById("total_bill")

        let input_bill = document.getElementById("input_bill")
        let input_tip = document.getElementById("input_tip")

        let tip = parseFloat(input_bill.value) * (parseFloat(input_tip.value) / 100)
        let result = parseFloat(input_bill.value) + tip
        results.innerHTML = "<h2>Total Bill: ₹" + result + "</h2>"
        console.log(result);

        input_bill.value = ''
        input_tip.value = ''

    })
})