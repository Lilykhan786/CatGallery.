const fingerPics = [
    'https://www.catbreedslist.com/cat-wallpapers/Kitten-cute-lying-claws-2560x1440.jpg',
    'https://i.pinimg.com/236x/60/7e/ee/607eee181fbaf0a8f3b881ec0b0337a8.jpg',
    'https://i.pinimg.com/236x/f5/4a/8e/f54a8eb6f9b3071ee3a6d363cdcec6f2.jpg',
    'https://i.pinimg.com/236x/73/3d/c9/733dc947aa9c0a25b0106711c224a9b7.jpg'
  
  ];
  
  let palmPic = 'https://data.whicdn.com/images/291329039/original.jpg';
  
  const fingerPics2 = [
    'https://i.pinimg.com/564x/d5/83/a1/d583a1c074a53671de48a23eeb31b1ec.jpg',
    'https://i.pinimg.com/236x/bf/dd/f5/bfddf5af60250437203637d8892b11e6.jpg',
    'https://i.pinimg.com/236x/21/7c/23/217c23ca9b73101fa10f18d3894dfe74.jpg',
    'https://i.pinimg.com/236x/d0/5c/a9/d05ca93de7566b9f30ee2f991705a8a4.jpg'
  ];
  
  let palmPic2 = 'https://jooinn.com/images/adorable-35.jpg'
  
  function giveMeYourPalm(i) {
    const finger = document.getElementById("idek" + (i + 1))
    const palm = document.getElementsByClassName("paw")[0];
  
    palm.style = `background: url("${fingerPics[i]}") no-repeat center center; background-size: cover;`;
    finger.style = `background: url("${palmPic}") no-repeat center center; background-size: cover;`;
  
    const temp = palmPic;
    palmPic = fingerPics[i];
    fingerPics[i] = temp;
  }
  
  function giveMeYourPalm2(i) {
    const finger = document.getElementById("idk" + (i + 1))
    const palm = document.getElementsByClassName("paw-2")[0];
  
    palm.style = `background: url("${fingerPics2[i]}") no-repeat center center; background-size: cover;`;
    finger.style = `background: url("${palmPic2}") no-repeat center center; background-size: cover;`;
  
    const temp = palmPic2;
    palmPic2 = fingerPics2[i];
    fingerPics2[i] = temp;
  }
  
  const zoom = (i) => {
      document.getElementsByClassName("gallery")[0].classList.add("zoomed");
      document.getElementById("full-image").src = i ? palmPic2 : palmPic;
      document.getElementById("full-image-container").style.display = "block";
  };
  
  const removeZoom = () => {
      document.getElementsByClassName("gallery")[0].classList.remove("zoomed");
      document.getElementById("full-image").src = "";
      document.getElementById("full-image-container").style.display = "none";
  };