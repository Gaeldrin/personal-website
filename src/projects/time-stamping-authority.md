---
layout: layouts/project.njk
title: Time Stamping Authority
description: "My first independent project where I created architecture, back-end, front-end, maintenance and everything in between and around."
image: "/assets/tsa.png"
---

This was my first own project. My boss came to me and told me that they have this system that is based on customized hardware and thus it is very hard to replicate, and it is almost 20 years old so they are worried it might fail. They also told me that the new version should be deployable in VPS, easily extensible and upgradeable.

And so I started by looking at the market, to see what is available. I found several solutions but to me between them stood out one open source product, the SignServer version 3.6. After several months of installations, configurations, development and learning, I had:

- two back-end servers
- a load balancer for HA
- a front-end webpage
- a documentation for both users and admins
- a completely new log management with performance metrics

and everything secured and controlled by the newly integrated Identity and Access Management system (Perun) in conjunction with internal Single Sign-On proxy, both of which I also helped to develop.

### Challenges and Lessons Learned
For me this was a big learning experience, I have had to personally go through each and every step of aplication lifecycle from planning and market research over design and implementation to administration and maintenance and finally hand-over.

I have definitely learned to appreciate open source projects, using smart and modern techniques and technologies and how to keep both the client and the developer or administrator happy.
