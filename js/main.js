document.addEventListener("DOMContentLoaded", function () {

    const shortsWall = document.querySelector("#shortsWall");

    const shortsModal = document.querySelector("#shortsModal");
    const shortsModalVideo = document.querySelector("#shortsModalVideo");
    

    const shortsModalClose = document.querySelector(
        ".shorts-modal-close"
    );


    /*
        실제 파일 순서대로 직접 작성

        영상:
        video/shorts/파일명.mp4

        이미지:
        img/shorts/파일명.jpg
        img/shorts/파일명.png
    */

    const shortsData = [
        {
            title: "Short-form Project 01",
            category: "BRAND",
            media: "video/shorts/shorts1.mp4"
        },
        {
            title: "Short-form Project 02",
            category: "DESIGN",
            media: "video/shorts/shorts2.mp4"
        },
        {
            title: "Short-form Project 03",
            category: "SOCIAL",
            media: "video/shorts/shorts3.mp4"
        },
        {
            title: "Short-form Project 04",
            category: "CAMPAIGN",
            media: "img/shorts/shorts4.jpg"
        },
        {
            title: "Short-form Project 05",
            category: "PROMOTION",
            media: "img/shorts/shorts5.jpg"
        },
        {
            title: "Short-form Project 06",
            category: "BRAND",
            media: "video/shorts/shorts6.mp4"
        },
        {
            title: "Short-form Project 07",
            category: "DESIGN",
            media: "video/shorts/shorts7.mp4"
        },
        {
            title: "Short-form Project 08",
            category: "SOCIAL",
            media: "video/shorts/shorts8.mp4"
        },
        {
            title: "Short-form Project 09",
            category: "CAMPAIGN",
            media: "video/shorts/shorts9.mp4"
        },
        {
            title: "Short-form Project 10",
            category: "PROMOTION",
            media: "img/shorts/shorts10.jpg"
        },

        {
            title: "Short-form Project 11",
            category: "BRAND",
            media: "img/shorts/shorts11.jpg"
        },
        {
            title: "Short-form Project 12",
            category: "DESIGN",
            media: "video/shorts/shorts12.mp4"
        },
        {
            title: "Short-form Project 13",
            category: "SOCIAL",
            media: "img/shorts/shorts13.jpg"
        },
        {
            title: "Short-form Project 14",
            category: "CAMPAIGN",
            media: "video/shorts/shorts14.mp4"
        },
        {
            title: "Short-form Project 15",
            category: "PROMOTION",
            media: "img/shorts/shorts15.jpg"
        },
        {
            title: "Short-form Project 16",
            category: "BRAND",
            media: "video/shorts/shorts16.mp4"
        },
        {
            title: "Short-form Project 17",
            category: "DESIGN",
            media: "video/shorts/shorts17.mp4"
        },
        {
            title: "Short-form Project 18",
            category: "SOCIAL",
            media: "video/shorts/shorts18.mp4"
        },
        {
            title: "Short-form Project 19",
            category: "CAMPAIGN",
            media: "video/shorts/shorts19.mp4"
        },
        {
            title: "Short-form Project 20",
            category: "PROMOTION",
            media: "video/shorts/shorts20.mp4"
        },

        {
            title: "Short-form Project 21",
            category: "BRAND",
            media: "video/shorts/shorts21.mp4"
        },
        {
            title: "Short-form Project 22",
            category: "DESIGN",
            media: "video/shorts/shorts22.mp4"
        },
        {
            title: "Short-form Project 23",
            category: "SOCIAL",
            media: "video/shorts/shorts23.mp4"
        },
        {
            title: "Short-form Project 24",
            category: "CAMPAIGN",
            media: "video/shorts/shorts24.mp4"
        },
        {
            title: "Short-form Project 25",
            category: "PROMOTION",
            media: "video/shorts/shorts25.mp4"
        },
        {
            title: "Short-form Project 26",
            category: "BRAND",
            media: "video/shorts/shorts26.mp4"
        },
        {
            title: "Short-form Project 27",
            category: "DESIGN",
            media: "video/shorts/shorts27.mp4"
        }
    ];


    /*
        파일이 영상인지 확인
    */

    function isVideoFile(fileName) {
        return /\.(mp4|webm|mov)$/i.test(fileName);
    }


    /*
        40개를 10개씩 4줄로 분리
    */

    const shortsRows = [
        shortsData.slice(0, 9),
        shortsData.slice(9, 18),
        shortsData.slice(18, 27)
    ];


    /*
        개별 카드 생성
    */

function createShortsCard(item, isClone = false) {

    const card = document.createElement("button");

    card.type = "button";
    card.className = "shorts-card";

    card.dataset.media = item.media;
    card.dataset.type = isVideoFile(item.media)
        ? "video"
        : "image";

    card.setAttribute("aria-label", "콘텐츠 크게 보기");

    if (isClone) {
        card.setAttribute("aria-hidden", "true");
        card.tabIndex = -1;
    }

    if (isVideoFile(item.media)) {

        const video = document.createElement("video");

        video.src = item.media;
        video.muted = true;
        video.autoplay = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "metadata";

        video.setAttribute("muted", "");
        video.setAttribute("autoplay", "");
        video.setAttribute("loop", "");
        video.setAttribute("playsinline", "");

        card.appendChild(video);

    } else {

        const image = document.createElement("img");

        image.src = item.media;
        image.alt = "SNS 포트폴리오 이미지";
        image.loading = "lazy";

        card.appendChild(image);
    }

    return card;
}


    /*
        움직이는 4줄 생성
    */

    function renderShortsWall() {

        if (!shortsWall) return;

        shortsWall.innerHTML = "";

        shortsRows.forEach(function (rowItems, rowIndex) {

            const row = document.createElement("div");
            row.className = "shorts-row";

            const track = document.createElement("div");

            const direction =
                rowIndex % 2 === 0
                    ? "track-left"
                    : "track-right";

            track.className = `shorts-track ${direction}`;

            const speed = 55 + rowIndex * 5;

            track.style.setProperty(
                "--move-speed",
                `${speed}s`
            );


            rowItems.forEach(function (item) {
                track.appendChild(
                    createShortsCard(item)
                );
            });


            /*
                무한 이동을 위한 복제
            */

            rowItems.forEach(function (item) {
                track.appendChild(
                    createShortsCard(item, true)
                );
            });


            row.appendChild(track);
            shortsWall.appendChild(row);

        });


        playPreviewVideos();

    }


    /*
        카드 내부 영상 자동 재생
    */

    function playPreviewVideos() {

        const previewVideos =
            shortsWall.querySelectorAll(
                ".shorts-card video"
            );

        previewVideos.forEach(function (video) {

            video.muted = true;
            video.loop = true;
            video.playsInline = true;

            video.play().catch(function () {
                // 브라우저 자동재생 차단 시 오류 방지
            });

        });

    }


    /*
        영상 모달 열기
    */

    function openVideoModal(card) {

        const media = card.dataset.media;
       

        shortsModalVideo.src = media;
        shortsModalVideo.muted = false;
        shortsModalVideo.loop = true;
        shortsModalVideo.currentTime = 0;


        shortsModal.classList.add("active");
        shortsModal.classList.remove("image-mode");

        document.body.style.overflow = "hidden";

        shortsModalVideo.play().catch(function () {
            // 소리 있는 자동재생이 막히면 컨트롤로 재생
        });

    }


    /*
        이미지 모달 열기
    */

    function openImageModal(card) {

        const media = card.dataset.media;
      
        shortsModalVideo.pause();
        shortsModalVideo.removeAttribute("src");
        shortsModalVideo.load();

      

        shortsModal.classList.add("active");
        shortsModal.classList.add("image-mode");

        const oldImage = shortsModal.querySelector(
            ".shorts-modal-image"
        );

        if (oldImage) {
            oldImage.remove();
        }

        const modalImage = document.createElement("img");

        modalImage.className = "shorts-modal-image";
        modalImage.src = media;
        modalImage.alt = "SNS 포트폴리오 이미지";

        shortsModalVideo.insertAdjacentElement(
            "afterend",
            modalImage
        );

        document.body.style.overflow = "hidden";

    }


    /*
        모달 닫기
    */

    function closeShortsModal() {

        if (!shortsModal) return;

        shortsModal.classList.remove("active");
        shortsModal.classList.remove("image-mode");

        shortsModalVideo.pause();
        shortsModalVideo.currentTime = 0;
        shortsModalVideo.removeAttribute("src");
        shortsModalVideo.load();

        const modalImage = shortsModal.querySelector(
            ".shorts-modal-image"
        );

        if (modalImage) {
            modalImage.remove();
        }

        document.body.style.overflow = "";

    }


    /*
        카드 클릭
    */

    shortsWall?.addEventListener(
        "click",
        function (event) {

            const clickedCard =
                event.target.closest(".shorts-card");

            if (!clickedCard) return;

            if (clickedCard.dataset.type === "video") {
                openVideoModal(clickedCard);
            } else {
                openImageModal(clickedCard);
            }

        }
    );


    shortsModalClose?.addEventListener(
        "click",
        closeShortsModal
    );


    shortsModal?.addEventListener(
        "click",
        function (event) {

            if (event.target === shortsModal) {
                closeShortsModal();
            }

        }
    );


    window.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                shortsModal?.classList.contains("active")
            ) {
                closeShortsModal();
            }

        }
    );


    document.addEventListener(
        "visibilitychange",
        function () {

            if (!document.hidden) {
                playPreviewVideos();
            }

        }
    );


    renderShortsWall();

});