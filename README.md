---
# Developer Portfolio

### Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![image](https://github.com/lehieu2003/Portfolio/assets/127474151/e599d589-f1db-499e-9c30-1c485a6576d4)
![image](https://github.com/lehieu2003/Portfolio/assets/127474151/9465c76a-a234-45a7-bda1-6ac91fb15a25)

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/said7388/developer-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "HIEU LEE",
  profile: "/profile1.png",
  designation: "Software Developer",
  description:
    "My name is Hieu, and I am a third-year Software Engineering student at International University. I have hands-on experience building web applications using ReactJS, React Native, NodeJS, and Java. With my knowledge of UI/UX design, I enjoy solving front-end problems and creating the best user experience for users. I am also committed to learning new technologies and best practices to become a better engineer.",
  email: "lehieunghiahanh76@gmail.com",
  phone: "0868296322",
  address: "Thu Duc, Ho Chi Minh City, Vietnam",
  github: "https://github.com/lehieu2003",
  facebook: "https://www.facebook.com/profile.php?id=100049807973142",
  linkedIn: "https://www.linkedin.com/in/hieu-le-202859311/",
  resume:
    "https://drive.google.com/file/d/10qb_Wh2vuD1f8S0B51Iob-31lmZX7D1Q/view?usp=sharing",
};

```

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
