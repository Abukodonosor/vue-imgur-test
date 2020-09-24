import { GetFetch } from "../util/fetch";

function ImgurService() {
  const authToken = "Bearer df4d707146d8d93d14615baf56ee2ee59408f19a";

  const GET_IMAGES_BY_TAG = "https://api.imgur.com/3/gallery/t/";

  async function getImagesByTag(tagName) {
    const result = await GetFetch(GET_IMAGES_BY_TAG + tagName, {
      "Content-Type": "application/json",
      Authorization: authToken,
    });
    const galleryItems = galleryItemsDTOMapper(result);
    return galleryItems;
  }

  function galleryItemsDTOMapper(response) {
    if (response.data.items === undefined) {
      return null;
    }

    const itemsForTopic = response.data.items.map((el) => {
      return {
        title: el.title,
        description: el.description,
        images: parseImage(el),
        link: el.link,
        mp4: el.mp4,
        gifv: el.gifv,
      };
    });
    return itemsForTopic;
  }

  function parseImage(el) {
    let profileImage = "";
    if (el.images != undefined && el.images.length > 0)
      profileImage = el.images[0] ? el.images[0].link : "none img";
    return profileImage;
  }

  return {
    getImagesByTag,
  };
}

export default new ImgurService();
