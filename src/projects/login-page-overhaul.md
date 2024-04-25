---
layout: layouts/project.njk
title: Login page overhaul
description: "A month long project to update design of one page turned into complete overhaul to reduce the complexity and size by 8 times while maintaining full functionality."
image: "/assets/website-redesign-banner.jpg"
---

I was tasked to slightly update the visual style of login page of a system with millions of users and change the order of offered login options. And I thought it will be quite straightforward and done well before the deadline, after all how hard can it be to simply reorganize few blocks of code and change shades of several colours?

Quite hard, as it turned out. The page was using technologies I have not met before and it was not a well written code either. So I took it upon myself to improve the state of its code so I (or another developer in the future) can understand what I was looking at.

### Challenges and Lessons Learned
The main challenge lied in understanding the code. Eventually, I realized that all the possible states of the page were always being computed and sent to the browser and just hidden from the view. This meant a page that was actually the size of about 8 pages in one, burdened with a complex and marginally faulty logic that was deactivating the invisible parts to not confuse the backend.

I did not expect to encounter such situation in a product of similar status, luckily I had enough time to complete this much bigger update and deliver it on time. I was certainly very happy to see just how much faster the page got after my improvements and to know that millions of people are affected made it just that much better.
