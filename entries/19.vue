<template>
    <v-card-text>
        <div id="article-body">
            <div class="section">
                <img src="@/assets/kitchen_curtain_1.png" />
                <p>Using <a href="https://www.housebeautiful.com/design-inspiration/a31187477/how-to-make-curtains/">this article</a>, I practiced on my first curtains! The first one turned out a little uneven, but I paid more attention to detail for the second and it turned out great! The end result was a little thick for a valence, but it made for good practice before starting on the curtains for my bedroom.</p>
            </div>
            <div class="section">
                <img src="@/assets/curtain_1.png" />
                <img src="@/assets/curtain_2.png" />
                <p>
                    Here's how the bedroom curtains turned out! Because of the dark lining, they block out light pretty well. I followed the same article to make these. I kept having problems with my thread breaking, so the stitching isn't perfect, but you can't tell without looking pretty close. At first I thought it was due to my top thread tension being too high, but I (re)learned that you should use 100% cotton thread for general use in a sewing machine, I guess because it's better suited to handle the thread tension.
                </p>
            </div>
            <div class="section">
                <img src="@/assets/living_room_curtain.png" />
                <p>
                    After feeling accomplished from making the bedroom curtains, I attempted to make a scalloped valence for the living room. I learned how to cut a pattern from painter's butcher paper, and also got got practice with sewing curved lines. With this, I had a lot of problems with the fabric bunching as I was sewing, which I thought was due to my tension being messed up (since I was messing with it for the bedroom curtains), but I learned about stitch length. Apparently, for lighter-weight fabrics, you should use a shorter stitch length to prevent bunching. I had set my speed to very low because I was uncomfortable with the curved lines and was pulling the fabric too much in between stitches, causing the stitches to be long and the fabric to bunch.
                </p>
            </div>
            <div class="section">
                MORE TO COME
            </div>
        </div>
        <div id="resources">
            <h2>Resources Used:</h2>
            <a href="https://www.housebeautiful.com/design-inspiration/a31187477/how-to-make-curtains/">How to Make Curtains</a>
            <YoutubePlayer :video_id="'cTKfXw7SMMI'" />
        </div>
    </v-card-text>
</template>
    
<script>
    import YoutubePlayer from "@/components/YoutubePlayer"
    
    export default {
        name: "Curtains",
    
        components: {
            YoutubePlayer
        },
    
        data: () => ({})
    }
</script>
    
<style>
    img {
        width: 100%;
    }

    #article-body {
        margin-bottom: 50px;
    }

    .section {
        margin-bottom: 50px;
    }
</style>