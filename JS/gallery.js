const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

container.style.display = "flex";
container.style.width = "1128px";
container.style.height = "648px";
container.style.padding = "24px 156px";

gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "24px";
gallery.style.listStyleType = "none";
gallery.style.paddingInlineStart = "0";
gallery.style.margin = "0";
gallery.style.marginBlockStart = "0em";
gallery.style.marginBlockEnd = "0em";

images.forEach((image) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery-item");
  listItem.classList.add("three-columns");

  const link = document.createElement("a");
  link.classList.add("gallery-link");
  link.setAttribute("href", image.original);

  const imageElement = document.createElement("img");
  imageElement.classList.add("gallery-image");
  imageElement.src = image.preview;
  imageElement.alt = image.description;
  imageElement.setAttribute("data-source", image.original);

  imageElement.style.width = "360px";
  imageElement.style.height = "200px";
  imageElement.style.flexShrink = "0";

  link.appendChild(imageElement);
  listItem.appendChild(link);

  gallery.appendChild(listItem);

  link.addEventListener("click", (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`
            <img src="${image.original}" width="1280" height="600">
        `);
    instance.show();
  });
});

container.appendChild(gallery);
