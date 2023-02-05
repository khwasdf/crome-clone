const images = ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151204_97%2Ffistgym_1449224321241q5cCV_JPEG%2F500_104638_1441584613.jpg&type=a340", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MjJfMjcx%2FMDAxNTkwMTI0MTAzMjAy.Lwlpylphapd5iwXKgjNstLdJh8Bw2c7_ROdR5_hdzLQg.ilOlt7JH3REhtmLNIyoHjW8_ZkINrvBgPyGPyRkIvKog.JPEG.ahns22c%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25281%2529.jpg&type=ofullfill340_600_png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage); //가장 밑에 오도록
// document.body.prepend(bgImage); // 가장 위에 오도록