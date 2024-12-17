# library-sys

Modern way of managing libraries, it's pain in the ass to manage library to know what has gone outside and inside pretty insane and wild.

For example in most cases in Africa we use paper and paper to manage our libraries imagie the time and alll the things a person on charge of doing that has to go through tremedous suffering.

This is not a software or a web app, I am building to solve that problem but an attempt to show how this may be done and solve for people, the web app has built features in it  to contorl and manage and make it easier for the person in charge of library managenemt make life easy.

![dashboard](https://cloud-39cpb9wm2-hack-club-bot.vercel.app/2img_0154.png)

## How does it works

This is a self checkout process  where a student and librarian has least interaction as possible, everything from borrowing a book and returning it back.
![dashboard](https://cloud-39cpb9wm2-hack-club-bot.vercel.app/2img_0154.png)
![screen2](https://cloud-39cpb9wm2-hack-club-bot.vercel.app/3img_0153.png)
![screen3](https://cloud-39cpb9wm2-hack-club-bot.vercel.app/1img_0155.png)
![screen4](https://cloud-39cpb9wm2-hack-club-bot.vercel.app/0img_0156.png)
##  Librarian(Creating)

- The first step: of course must be to add the book in the system so that a student may come and borrow it but how is always essential to make it feasable so this is the first to register or add the book in the system

![dashboard](https://cloud-39cpb9wm2-hack-club-bot.vercel.app/2img_0154.png)
![screen2](https://cloud-39cpb9wm2-hack-club-bot.vercel.app/3img_0153.png)

- The second step: If the book doesn't have a barcode you can add it by using the genrating  functionlity in the system and download it and  stick it to the book

![screen4](https://cloud-39cpb9wm2-hack-club-bot.vercel.app/0img_0156.png)

##  Librarian(Checking out and in for borrowed books)

This is pretty simple and only requires two steps which one of the is similar to the first step we has seen in the first secion so we'll skip this and instead focus on another functionality

- The another functionality(second) step: when a book is returned the first thing to do is write the student name only and that's done and the student has been removed in the system.

![returnBook](https://cloud-9eqjh2ghs-hack-club-bot.vercel.app/0img_0157.png)


## Features
- Barcode and Qrcode scanner
- Generating barcode functionality
- able to download data in excel format 
- Available summary of how library is going and working
- Automatic categorization
- A beep sound for notification when a code is scanned
- Able to see book borrowed and how many are left


## Stack used to build
- Neon for databases
- Nextjs with typescript
- Prisma fro db orm
- zod for validation
- bun for run time enviromenemt 
- react-sound for sound

## How to use

you can test this right now visit using thus link: [lib sys web](https://library-sys-gamma.vercel.app/)

## Installation 

First of all this project using bun so you need it on your system, after that use `bun install` and now run `bun run dev` and you are good to go.

Attention this project use `.env` file so make sure to use neon db and create a database and use this `DATABASE_URL=` put in your db url and that's it. 

