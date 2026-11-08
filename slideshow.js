/* ========================================================
   ポーラスター：トップページの画像スライドショー
   画像を増やす場合は images 配列に1行追加するだけです。
======================================================== */

// ここに表示する写真を並べます（上から順番に表示）。
const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    // "images/photo4.jpg", // 4枚目を使う場合は先頭の // を削除
];

// 切り替える間隔（ミリ秒）。5000 = 5秒
const intervalMs = 5000;

// 画像を表示する場所
const slideshow = document.getElementById("hero-slideshow");

if (slideshow && images.length > 0) {
    let currentIndex = 0;

    // 配列の数だけ img 要素を自動生成（HTML側の追加は不要）
    const slides = images.map((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = ""; // 装飾用画像のため読み上げ対象にしない
        img.className = "hero-slide";
        img.loading = index === 0 ? "eager" : "lazy";
        if (index === 0) {
            img.classList.add("is-active");
            img.fetchPriority = "high";
        }
        slideshow.appendChild(img);
        return img;
    });

    // 画像が2枚以上なら自動切り替え
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentIndex].classList.remove("is-active");
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add("is-active");
        }, intervalMs);
    }
}
