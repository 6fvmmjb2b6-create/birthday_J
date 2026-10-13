// قائمة صور جنات من (0 إلى 6)
const images = [
    { src: "0.jpg", title: "عيد ميلاد سعيد يا جنات 🎉 (10/8)" },
    { src: "1.jpg", title: "أجمل ذكريات جنات 🤍" },
    { src: "2.jpg", title: "صورة 3 👑" },
    { src: "3.jpg", title: "صورة 4 🎂" },
    { src: "4.jpg", title: "صورة 5 🌟" },
    { src: "5.jpg", title: "صورة 6 🎉" },
    { src: "6.jpg", title: "صورة 7 🌸" }
];

let currentIndex = 0;

const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

// فتح معرض الصور عند الصورة المحددة
function openGallery(index) {
    currentIndex = index;
    updateModalImage();
    modal.style.display = "block";
}

// تحديث الصورة في النافذة
function updateModalImage() {
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].title;
}

// التقليب بين الصور (يمين وشمال)
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0; // العودة للأولى
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1; // الانتقال للأخيرة
    }
    updateModalImage();
}

// إغلاق النافذة
function closeModal() {
    modal.style.display = "none";
}

// إغلاق عند الضغط برة الصورة
window.onclick = function(event) {
    if (event.target == modal || event.target.className == "modal-body") {
        closeModal();
    }
};