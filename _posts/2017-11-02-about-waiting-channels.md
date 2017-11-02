---
layout: post
title:  "About waiting channels"
date:   2017-11-02 21:00:44 -0200
tags: linux waiting channels
---

Do youou opened the GNOME/KDE system manager, or used `ps` on linux and you
always wanted to know what means that column named "Waiting Channel
means?

Probably ~~not~~

<!--more-->

![Waiting Channel Image]( {{ "/assets/img/waiting-channel-example.png" | absolute_url}} 
 "These are the waiting channels")


These channels are kernel functions that the programs are in, waiting.

There are some types of "channels", in short:

 - **0**, **-** or **none**: The process is running normally, uninterrupted

 - **`poll_schedule_timeout`**: The software is waiting in the `poll` syscall
   For those who don't know, the `poll` syscall waits for some file 
   descriptors for a certain time and then returns with the number of 
   file descriptors where something happened. It's like a cookman waiting
   for some cakes to be ready in the ovens.  
   This runs when the `select` syscall/function is run too.
 
 - **`ep_poll`**: The software is waiting in the `epoll` signal. It's a `poll`, 
   but more scalable, meaning that it can handle more file descriptors more easily
 
 - **`futex_wait_queue_me`**: The process is waiting for a lock (tecnically, a *mutex*) 
   to be removed, usually by another thread.

 - **`hrtimer_nanosleep`**: The process is sleeping (using the `[u]sleep()` function, 
   usually)
 
 - **`sigsuspend`**: The process is waiting for a signal. Unlike every other process (because
   most processes are waiting for a signal), it suspends itself until some expected signal occurs 
   (hence the name)

 - **`signal_stop`**: The process was suspended (usually by the control-Z in the shell)
 
Those are the ones I remember by now. 

If you have any correction, or one that I forgot, please comment!

PS: I don't know exactly what the wait_woken function do. Probably something related to waking up 
a process from sleep.
   
