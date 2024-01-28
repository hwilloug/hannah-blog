<template>
    <v-card-text>
        <div class="section">
            <img src="@/assets/arbor_3.png" />
            <p></p>
        </div>
        <div class="section">
            <img src="@/assets/arbor_1.png" />
        </div>
        <div class="section">
            <img src="@/assets/arbor_2.png" />
        </div>
        <div id="resources">
            <h2>Resources</h2>
            <ul>
                <li><a href="https://www.woodshopdiaries.com/how-to-build-a-garden-arbor/">How to Build a Garden Arbor</a></li>
            </ul>
        </div>
    </v-card-text>
</template>
    
<script>
    
    export default {
        name: "Arbor",
    
        components: {},
    
        data: () => ({})
    }
</script>
    
<style>
img {
    width: 100%;
}

h2 {
    margin-bottom: 20px;
}

.section {
    margin-bottom: 50px;
}
</style>