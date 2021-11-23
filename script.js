const videos = {
  surfing: { publicId: "surfing", duration: 39, cloud: "cloudinary-training" },
  snowboarding: {
    publicId: "snowboarding",
    duration: 20,
    cloud: "cloudinary-training",
  },
  climbing: {
    publicId: "climbing",
    duration: 24,
    cloud: "cloudinary-training",
  },
};

const showVideo = (cloudName, publicId) => {
  const video = document.querySelector("#selected-video");
  video.src = `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}`;
  video.style.display = "block";
};

// document.querySelector('input[name="video"]:checked').value;
document.querySelectorAll('input[name="video"]').forEach((input) => {
  input.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.currentTarget.value);
    const publicId = e.currentTarget.value;
    const videoObj = videos[publicId];

    showVideo(videoObj.cloud, publicId);
    simulateFrames(videoObj);
  });
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const videoObj = {};
  videoObj.cloud = document.querySelector('input[name = "cloudname"]').value;
  videoObj.publicId = document.querySelector(
    'input[name = "video-publicid"]'
  ).value;
  videoObj.duration = parseInt(
    document.querySelector('input[name = "video-duration"]').value,
    10
  );

  //set video
  showVideo(videoObj.cloud, videoObj.publicId);
  simulateFrames(videoObj);
});

const simulateFrames = function (selected) {
  const increment = Math.ceil(selected.duration / 9);
  for (let i = 0, j = 0; j < 9; i += increment, j++) {
    let url = `https://res.cloudinary.com/${
      selected.cloud
    }/video/upload/so_${i},eo_${i + 1},f_jpg/w_400,h_300,c_pad,b_auto/${
      selected.publicId
    }`;
    console.log(url);
    document.querySelector(`.img-${j}`).src = url;
  }
};
