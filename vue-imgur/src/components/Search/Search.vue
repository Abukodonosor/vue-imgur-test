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
      console.log(result);
      this.update();
    },
    update: function () {
      console.log("ja");
    },
  },
};
</script>
