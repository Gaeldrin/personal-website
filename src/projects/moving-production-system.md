---
layout: layouts/project.njk
title: Moving a production system
description: "Moving an actively used Identity and Access Management system with hundreds of thousands of accounts over weekend on one week notice."
image: "/assets/project-move-map.png"
---

### The story
It was the start of my second month in a new company and I was called into a meeting where I was informed that next weekend they will be moving all their VPS in their branch on another continent from one datacenter to another. Since I was responsible for the Identity and Access Management system (IAM) system in Czech Republic, I received the honor of being responsible for successful launch of the copied over IAM so their employees could log in on Monday morning and work without noticing anything different.

To successfully bake this hot potato without burning it, after some research I decided to do a mockup in our datacenter. Since another team was in charge of making copies of the VPS and transfering them to the new datacenter, all I needed to do was to ensure that I will be able to change all the IP addresses to their new counterparts while making sure that when turned on, the system will work well.

After combing through the documentation and configuration files, I managed to identify all the important places and together with clearing some cache files, the mockup transfer was completed successfully. On the day of the moving, I was informed that I will be doing the change on production and at the same time be on recorded videocall instructing the local team on how to make such changes in the future. Luckily my preparation was well done and everything went smoothly on the big day itself.

### Challenges and Lessons Learned
One of the main challenges faced during this project was the criticality of its success and thus the magnitude of responsibility faced. To add to the already high stress level, second challenge was to work on such short notice without anybody in the company having any prior experience with such a project.

This experience taught me several lessons, from how to manage high levels of stress to the importance of good preparation or how important it is that everybody on the team has a can-do attitude and does their best to make it happen. Also, I have clearly felt the importance of proper communication, as the same work could have been done in a much calmer and more secure way if we were informed about it in advance.
