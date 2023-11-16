<template>
    <v-card-text>
        <p>
            I made a website for controlling a Raspberry Pi that controls a drip irrigation system! Check it out here -- <a href="https://raincloud.poppyland.dev/home" target="_blank">raincloud.poppyland.dev/home</a>
        </p>
        <p>
            The site is written using FastAPI and basic HTML and CSS, and the api is served via a nginx proxy over HTTPS through my router at home. Route 53 routes the DNS name to my router, which has port mapping for HTTPS to be forwarded to my RPi. Check out the source code <a href="https://github.com/hwilloug/raincloud" target="_blank">~here~</a>.
        </p>
        <p>
            Here's a list of articles that I used to make this project happen:
            <ul>
                <li><a href="https://www.instructables.com/Raspberry-Pi-Controlled-Irrigation-System/" target="_blank">Raspberry Pi Controlled Irrigation System</a></li>
                <li><a href="https://betterprogramming.pub/how-to-build-a-docker-compose-app-for-a-raspberry-pi-7d7003b4cbc" target="_blank">How to Build a FastApi Server to Control a Raspberry Pi</a></li>
            </ul>
        </p>
    </v-card-text>
</template>
    
<script>
    
    export default {
        name: "PoppylandRaincloudWebsite",
    
        components: {},
    
        data: () => ({})
    }
</script>
    
<style>

</style>