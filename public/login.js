// 모달창 JS
function openModal() {
    document.getElementById("modal").style.display = "block"; //모달창 보이게 설정하기
}

function closeModal() {
    document.getElementById("modal").style.display = "none";  //모달창 숨기기
}

// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}