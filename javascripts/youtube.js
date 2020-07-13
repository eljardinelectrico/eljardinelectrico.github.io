(function () {
  'use strict';

  function getChildren(n, skipMe) {
    var r = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType == 1 && n != skipMe) {
        r.push(n);
      }
    }

    return r;
  }

  function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
  }

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player("player", {
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        rel: 0
      },
      height: "315",
      width: "560",
      videoId: "OfCHJQTjO3c",
      events: {
        onReady: function onReady() {
          document.querySelectorAll(".video-thumb").forEach(function (thumb) {
            console.log(thumb);

            thumb.onclick = function () {
              if (!thumb.classList.contains("active")) {
                player.loadVideoById(thumb.getAttribute("data-video"));
                thumb.classList.add("active");
                getSiblings(thumb).forEach(function (sibling) {
                  sibling.classList.remove("active");
                });
              }
            };
          });
        }
      }
    });
  };

}());
