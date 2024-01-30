import { ReactElement } from "react";
import { ArticleContentContainer, FullSizeImage, Section, SectionHeader } from "../components/StyledComponents";
import YoutubePlayer from "../components/YoutubePlayer";

const DripIrrigation: React.FunctionComponent = (): ReactElement => {
    return (
        <ArticleContentContainer>
            <Section>
                <p>
                    I made a website for controlling a Raspberry Pi that controls a drip irrigation system! Check it out here -- <a href="https://home.poppyland.dev/raincloud" target="_blank">home.poppyland.dev/raincloud</a>
                </p>
                <p>
                    The site is written using FastAPI and basic HTML and CSS, and the api is served via a nginx proxy over HTTPS through my router at home. Route 53 routes the DNS name to my router, which has port mapping for HTTPS to be forwarded to my RPi. Check out the source code <a href="https://github.com/hwilloug/poppyland-home" target="_blank">~here~</a>.
                </p>

            </Section>
            <SectionHeader>Buliding the Server</SectionHeader>
            <Section>
                <p>
                    The server was pretty simple to set up. I used FastAPI, which is very easy to get going.
                </p>
            </Section>
            <SectionHeader>Building the Circuit</SectionHeader>
            <Section>
                <p>
                    Building the circuit was not challenging, but I ordered the wrong type of MOSFET at first (P-channel rather than N-channel). I tried using it anyway, but I couldn't find any information on how to wire it up in a way that would cause the relay to be triggered. I ended up just ordering an N-channel, and it worked!
                </p>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/raincloud_circuit.png`} />
                <p>
                    The circuit diagram
                </p>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/raincloud_circuit_pic.png`} />
                <p>
                    Added an LCD screen to show the status
                </p>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/poppy_and_circuit.png`} />
                <p>
                    Poppy being cute!
                </p>
            </Section>
            <SectionHeader>Digging the Trenches</SectionHeader>
            <Section>
                <p>
                    One thing I had to do compared to the blog article is wrap the threads of the hose accessories in teflon tape to prevent leakage. We also tied up some string to get our trench straight.
                </p>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/solenoid_valve.png`} />
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/valve_and_pipes.png`} />
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/raincloud_trench_1.png`} />
            </Section>
            <Section>
                <p>
                    MORE TO COME
                </p>
            </Section>
            <Section>
                <SectionHeader>Resources</SectionHeader>
                Here's a list of articles that I used to make this project happen:
                <ul>
                    <li><a href="https://www.instructables.com/Raspberry-Pi-Controlled-Irrigation-System/" target="_blank">Raspberry Pi Controlled Irrigation System</a></li>
                    <li><a href="https://betterprogramming.pub/how-to-build-a-docker-compose-app-for-a-raspberry-pi-7d7003b4cbc" target="_blank">How to Build a FastApi Server to Control a Raspberry Pi</a></li>
                </ul>
            </Section>
        </ArticleContentContainer>
    )
}

export default DripIrrigation
