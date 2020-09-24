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
    };
  },
  methods: {
    sendHashtag: async function () {
      console.log("send request to imgur ", "#" + this.searchText);
      const result = await ImgurService.getImagesByTag(this.searchText);
      console.log(result);
    },
  },
};
</script>
