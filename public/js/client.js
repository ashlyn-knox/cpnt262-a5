const endpoint = '/api/v0/kiraGallery';

// Figure Creator
function figureCreate () {
  let figure = document.createElement("figure");
  figure.className="card";
  figure.setAttribute("tabindex", "0");
  return figure;
}
// Image Creator
function imageCreate (image) {
  // create an image
  let img = document.createElement("img");

  // assign image values
  img.src = `${image.pathURL}`;
  img.alt = `${image.imgAlt}`;
  img.width = `${image.width}`;
  img.height = `${image.height}`;
  img.srcset = `${image.srcset}`;
  img.alt = `${image.altText}`;
  img.loading = "lazy";
  img.setAttribute("class", "gallery-image");

  // Class Assignment
  if (parseInt (img.height) > 1500) {
    img.setAttribute("class", "sepia-image");
  } else if (parseInt(img.height) > 1000 && parseInt(img.height) < 1500) {
    img.setAttribute("class", "normal-image");
  } else {
    img.setAttribute("class", "hue-image");
  }
  // return image
  return img;
}

// Gallery Text
function figureTextCreate(image) {

  //create a title
  let title = document.createElement("h3");
  title.innerText = `${image.title}`;

  //create a figcaption
  let figcaption = document.createElement("figcaption");
  figcaption.className = "caption";
  figcaption.innerText = `${image.description}`;

  // credit
  let credit = document.createElement("a");
  credit.innerText = "Photo by Ashlyn Knox";
  credit.className = "image-credit";
  credit.href = "https://github.com/ashlyn-knox";

  // assign text values
  return {
    title,
    figcaption,
    credit
  };
}

// Fetch Gallery
const gallery = document.querySelector('.gallery-wrapper');

fetch(endpoint)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  })
  .then((kiraGallery) => {
    // Figure Creator
    function figureCreate () {
      let figure = document.createElement("figure");
      figure.className="card";
      figure.setAttribute("tabindex", "0");
      return figure;
    }
    // Image Creator
    function imageCreate (image) {
      // create an image
      let img = document.createElement("img");

      // assign image values
      img.src = `${image.pathURL}`;
      img.alt = `${image.imgAlt}`;
      img.width = `${image.width}`;
      img.height = `${image.height}`;
      img.srcset = `${image.srcset}`;
      img.alt = `${image.altText}`;
      img.loading = "lazy";
      img.setAttribute("class", "gallery-image");

      // Class Assignment
      if (parseInt (img.height) > 1500) {
        img.setAttribute("class", "sepia-image");
      } else if (parseInt(img.height) > 1000 && parseInt(img.height) < 1500) {
        img.setAttribute("class", "normal-image");
      } else {
        img.setAttribute("class", "hue-image");
      }
      // return image
      return img;
    }

    // Gallery Text
    function figureTextCreate(image) {

      //create a title
      let title = document.createElement("h3");
      title.innerText = `${image.title}`;

      //create a figcaption
      let figcaption = document.createElement("figcaption");
      figcaption.className = "caption";
      figcaption.innerText = `${image.description}`;

      // credit
      let credit = document.createElement("a");
      credit.innerText = "Photo by Ashlyn Knox";
      credit.className = "image-credit";
      credit.href = "https://github.com/ashlyn-knox";

      // assign text values
      return {
        title,
        figcaption,
        credit
      };
    }

    // Main Gallery Function 
    const addGallery = () => {
      // loop through array
      kiraGallery.forEach(function(image) {
        // check that the gallery has loaded
        if (image == undefined || image == null) {
          console.log(`image is ${typeof(image)}`);
          return 1;
        }
        // 
        let figure = figureCreate();
        let img = imageCreate(image);
        let title = figureTextCreate(image).title;
        let figcaption = figureTextCreate(image).figcaption;
        let credit = figureTextCreate(image).credit;

        // append image to gallery
        gallery.appendChild(figure);
        figure.append(img, title, figcaption, credit);
      });
    };
    addGallery();
  })
  .catch((err) => {
    console.log(err);
  });
