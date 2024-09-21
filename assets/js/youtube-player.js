(function () {
  let YouTubeContainers = document.querySelectorAll(".youtube-video");

  // Iterate over every YouTube container you may have
  for (let i = 0; i < YouTubeContainers.length; i++) {
    let container = YouTubeContainers[i];
    let imageSource =
      "https://img.youtube.com/vi/" +
      container.dataset.videoId +
      "/maxresdefault.jpg";

    // Load the Thumbnail Image asynchronously
    let image = new Image();
    image.src = imageSource;
    image.addEventListener("load", function () {
      container.appendChild(image);
    });

    // When the user clicks on the container, load the embedded YouTube video
    container.addEventListener("click", function () {
      let iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      );
      // Important: add the autoplay GET parameter, otherwise the user would need to click over the YouTube video again to play it
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.videoId +
          "?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent;&autoplay=1"
      );

      // Clear Thumbnail and load the YouTube iframe
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
})();

