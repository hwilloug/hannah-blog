<template>
    <v-card-text>
        <h2>Introduction</h2>
        <div>
            I made a website for controlling a Raspberry Pi that controls a drip irrigation system! Check it out here -- <a href="https://home.poppyland.dev/raincloud" target="_blank">home.poppyland.dev/raincloud</a>
        </div>
        <div>
            The site is written using FastAPI and basic HTML and CSS, and the api is served via a nginx proxy over HTTPS through my router at home. Route 53 routes the DNS name to my router, which has port mapping for HTTPS to be forwarded to my RPi. Check out the source code <a href="https://github.com/hwilloug/poppyland-home" target="_blank">~here~</a>.
        </div>
        <div>
            Here's a list of articles that I used to make this project happen:
            <ul>
                <li><a href="https://www.instructables.com/Raspberry-Pi-Controlled-Irrigation-System/" target="_blank">Raspberry Pi Controlled Irrigation System</a></li>
                <li><a href="https://betterprogramming.pub/how-to-build-a-docker-compose-app-for-a-raspberry-pi-7d7003b4cbc" target="_blank">How to Build a FastApi Server to Control a Raspberry Pi</a></li>
            </ul>
        </div>
        <h2>Buliding the Server</h2>
        <div>
            The server was pretty simple to set up. I used FastAPI, which is very easy to get going.
        </div>
        <h2>Building the Circuit</h2>
        <img src="@/assets/raincloud_circuit.png" />
        <img src="@/assets/raincloud_circuit_pic.png" />
        <img src="@/assets/poppy_and_circuit.png" />
        <h2>Digging the trenches</h2>
        <div>
            One thing I had to do compared to the blog article is wrap the threads of the hose accessories in teflon tape to prevent leakage. We also tied up some string to get our trench straight.
        </div>
        <img src="@/assets/solenoid_valve.png" />
        <img src="@/assets/valve_and_pipes.png" />
        <img src="@/assets/raincloud_trench_1.png" />
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
div {
    margin-bottom: 20px;
}

h2 {
    margin-top: 50px;
    margin-bottom: 20px;
}

img {
    width: 100%;
}
</style>