<template>
    <v-card-text>
        <div class="section">
            <p>
                I bought a Kreg pocket hole jig, and it came with a free trial to <a href="https://academy.kregtool.com">Kreg Academy</a>, so I started the beginner course. The first project in the course is <a href="https://academy.kregtool.com/courses/foundations-of-building-series/simple-workbench-shelves">a simple workbench with shelves</a>, which I needed, so I decided to build it! It also gave me an excuse to buy a circular saw.
            </p>
        </div>
        <div class="section">
            <img src="@/assets/workbench_1.png" />
            <p>
                In progress...
            </p>
        </div>
        <div class="section">
            <img src="@/assets/workbench_2.png" />
            <p>
                And here's the final result! Some problems I encountered were:
                <ul>
                    <li>Not having good circular saw skills</li>
                    <li>Not cutting square lines</li>
                </ul>
                Luckily, though, the workbench doesn't wobble, and the work surface is flat, so I'm happy enough with it. It's going to get some good, rough use, so I'm not too concerned with it being perfect.
            </p>
        </div>
        <div id="resources">
            <h2>Resources</h2>
            <ul>
                <li><a href="https://academy.kregtool.com/courses/foundations-of-building-series/simple-workbench-shelves">Kreg Academy Foundations of Building Series: Simple Workbench + Shelves</a></li>
            </ul>
        </div>
    </v-card-text>
</template>
    
<script>
    
    export default {
        name: "Workbench",
    
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