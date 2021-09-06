<template>
    <iframe id="ytplayer" type="text/html" width="480" height="270"
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
