<template src="./Search.html"></template>

<script>
import ImgurService from "../../service/ImgurService";

export default {
  name: "Search",
  props: {
    placeholder: String,
  },
  data: function () {
    return {
      searchText: "",
      tagErrorMessage: "",
      hashTagSearchItems: null,
    };
  },
  methods: {
    sendHashtag: async function () {
      console.log("send request to imgur ", "#" + this.searchText);
      const result = await ImgurService.getImagesByTag(this.searchText);

      this.tagErrorMessage = "";
      if (result === null) {
        this.tagErrorMessage = "Please insert the valid tag!";
      }
      this.update(result);
    },
    update: function (result) {
      this.hashTagSearchItems = result;
    },
  },
};
</script>
