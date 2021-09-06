<template>
    <iframe id="ytplayer" type="text/html" width="100%" height="300px"
        :src="'https://www.youtube.com/embed/' + video_id"
        frameborder="0">
    </iframe>
</template>

<script>
export default {
  name: "YoutubePlayer",
  props: ["video_id"],
};
</script>
