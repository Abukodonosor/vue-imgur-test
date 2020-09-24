import { GetFetch } from "../util/fetch";

function ImgurService() {
  const authToken = "Bearer df4d707146d8d93d14615baf56ee2ee59408f19a";

  const GET_IMAGES_BY_TAG = "https://api.imgur.com/3/gallery/t/";

  function generateGalleryUrlForTag(tagName) {
    return GET_IMAGES_BY_TAG + tagName;
  }

  async function getImagesByTag(tagName) {
    const result = await GetFetch(generateGalleryUrlForTag(tagName), {
      "Content-Type": "application/json",
      Authorization: authToken,
    });
    const galleryItems = galleryItemsDTOMapper(result);
    return galleryItems;
  }

  function galleryItemsDTOMapper(response) {
    const itemsForTopic = response.data.items.map((el) => {
      return {
        title: el.title,
        description: el.description,
        images: el.images,
        link: el.link,
        mp4: el.mp4,
        gifv: el.gifv,
      };
    });
    return itemsForTopic;
  }

  return {
    getImagesByTag,
  };
}

export default new ImgurService();
