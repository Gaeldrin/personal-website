---
layout: layouts/project.njk
title: Smartifying my home
description: "Turning a normal house without internet into a smart home but with a twist, self-hosted and DIY. Remote access, speech recognition and more without any cloud or paid service."
image: "/assets/homeassistant-banner.jpg"
---

### The story
I was always intrigued by intelligent technology that is helping people but never had any in my home. First, my parents were not inclined to give control over important functions like heating or garage doors to a computer, then I was living in rented flats that never felt like home so I had no motivation to spend my precious free time on diving into such a big area with dubious benefits. However, last year the stars were in the correct position - I moved into my own house and had enough free time and clear goals/benefits in mind:

- remote control over heating, no more coming to a cold house in winter and waiting hours for some semblance of warmth
- remote monitoring of the house
- various automations to help maintain regular sleeping schedule

Even better, it was summer so I happily dissassembled the central heater and started looking for options.

### Challenges and Lessons Learned
First roadblock came soon enough - the humongous amount of options and solutions. So I looked through a few options and then took a step back. I put together a list of requirements that I needed to help me comb through the solutions. I needed something that can survive a loss of power as that does happen, although for a short time, several times a year. I also needed support for open standards as I wanted to avoid a vendor lock-in, and cloud independent because the internet can also go down even when the power is on. I always liked the idea of having my own home server and this gave me the perfect excuse to do just that. I have been running Linux servers with various services in different datacenters for a decade so self-hosted Home Assistant it is. Even with that decided, Home Assistant supports a ton of different devices and protocols, but it was a start.

I decided to follow a great tutorial from Level1Tech on [his forum](https://forum.level1techs.com/t/truenas-scale-ultimate-home-setup-incl-tailscale/186444) (also has a [YouTube video](https://www.youtube.com/watch?v=R7BXEuKjJ0k)), got and old computer, some spare parts and a UPS, and got to building my server. Following the tutorial was mostly simple (just a few hiccups with the VM failing to boot or Tailscale not connecting, the normal stuff), controlling the UPS could be done in both TrueNas or Home Assistant. I tried both and settled on Home Assistant to keep things uniform (TrueNas for NAS, HA for automation). With that, I had the *remote* and *independent* requirements checked out.

Then I could finally move back to where I started, answering the question *"How do I control this heater from anywhere?"*. To not turn this into a blog post just yet, I did more things like installations, configurations, debugging, wiring, soldering, handcrafting etc. to finally have a wall-mounted phone as a local thermostat controller, ESP32 microboard to act as a hub between the Home Assistant and the sensors and actuators controlling all the heating and water pump, a climate sensor, bluetooth speakers, presence detection via BLE, UPS protected server running 23 Docker containers with various services and also working as a NAS.

