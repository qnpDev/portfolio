const cvLink = 'https://drive.google.com/file/d/1Ux6ChXRUKBLsaqPw9TXXp8cQqRTKeITy/view?usp=sharing'

const personal = [
    {
        key: 'First Name',
        value: 'Nguyen',
    },
    {
        key: 'Last Name',
        value: 'Phu Qui',
    },
    {
        key: 'Birthday',
        value: '01/2001',
    },
    {
        key: 'Sex',
        value: 'Male',
    },
    {
        key: 'National',
        value: 'Vietnam',
    },
    {
        key: 'Address',
        value: 'Tan Hung Ward, District 7, HCM',
    },
    {
        key: 'Phone',
        value: '0822226618',
    },
    {
        key: 'Facebook',
        value: 'fb.com/npquii',
    },
    {
        key: 'Language',
        value: 'English, Vietnamese',
    },
    {
        key: 'Email',
        value: 'qnpdev@gmail.com',
    },
]

const experience = [
    {
        number: 1,
        value: 'php freelancer',
    },
    {
        number: 1,
        value: 'award won',
    },
    {
        number: 8,
        value: 'completed projects',
    },
    {
        number: 9,
        value: 'happy customer',
    },
]


const skills = [
    {
        name: 'html',
        img: 'data:image/png;base64,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',
    },
    {
        name: 'css',
        img: 'https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png',
    },
    {
        name: 'sass',
        img: 'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
    },
    {
        name: 'javascript',
        img: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
    },
    {
        name: 'php',
        img: 'https://sujanbyanjankar.com.np/wp-content/uploads/2019/03/php.png',
    },
    {
        name: 'java',
        img: 'https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png',
    },
    {
        name: 'python',
        img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
    },
    {
        name: 'c#',
        img: 'https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png',
    },
    {
        name: 'git',
        img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    },
    {
        name: 'responsive',
        img: 'data:image/png;base64,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',
    },
    {
        name: 'react',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKP0lEQVR4nO1bfZAcRRWf+InxA6QwKqKC338oIiJqWZYaFEEtUARFS6KgoIIGFD9TkXuzdyFAMIKVPwwgBpVAXQTRikQwGjFRJIlIKO4g3nb35s7sbb++y3FJQJLc3Vqvp2fm7WR2d2bvdoPWvaqupGa737zu6ff69379zvNmZVZmZVamKbCh+qyCGHmHL/B8kOZLvqicAtvLR82Y/u3lo0DoD4Iwn/WlPg+kPt6rVud4TwcBZS4CiYMgsZpokyBxky/NhcuHhp6XVy+N8YX+Kij8q9OV1N8PSn/cO2RSrc4BibekGJbWNAh9Me2UZmqpDyhcaMdk0q0L3qEQX+D3mSF7QOGVIPWpoMz7fYlfBIG3gcQnEwY/XCjh2+rpLBTN26lPYsweUPpWcq+CMu8DgR8BqX9on7s+vjCf6ejkYdAcDRKfcAY8XhCVt6T2U2NH+Mp0gcTdbEL7Qenv1PhwtTrHl/rbIPU+1m+MFnlZpfL8VN1SHw8Sx13fna242cx8faEvbta/R5ZfDRLvTXzZNdCHL4C+6nNAml/U/Kb0rTA0fmRTOyReEo8x53qdEpC42b14Nyh1WOaYEQTMeOsqfBCk3sgmP06RPqsd9NWZvtu9Tsjy4KX73Ut/m3c8lMyJILGcEtB2FqR+a259Ete68dLrhIAaeRMzursVHT2ifFKtv+t9S0rmxJbsEXiV0zNF7tSKjlxCUT7awhIvyTfa864Suw4HiQ+l7IB/UtDMqw+UuSzSMTB6jNdu8ZX+cHz84PktuM99bPzDXUJvY4uwCcrlubnskebCOCCbN3gdXQCFl2Yd11utPhOkuYtNVoDCl0GxMg8k/iuO5vg7qFafkVUvCPPNcGz3gH5tyxPLKiBHTmZHIGQfh0s4MuwW+Prot4HRY0DqHfHCmq7MeoWGSO+gOdprt3SXKsfFC4DXZTOS0FuE558EYU6qA2xCcDVJOy2j7h91Ngj2EXDBA87nfp0FBHVJM8qxe6Gk303ZnV/Sn6BG/7fP5Mgitkt2gRo+tqk9Cu9w/UdmbJLNBCQOuJcO1qTEhOUVfoEmCVL/0lf4N4YZcjffjtX3B0hRF6xuwhEsqYozUbPe65SAwDtjI/U1IM0fOMLrQNsTvFMvi5+ZZe2feLk8lwiJLqH7mhqpzCRIbf/fJfAAqJGbKRD6Cr9r011lLvIVfpqahcgKF9rfbLA0N0ZupnDKT+cDkm0LSP25tiRFUMTXgcQVlPnVefkYSFxnMz+Fp3VL80ZQ+A+2GJflfacvzDfY132AdPolPN1ll+ua2LJiRo7Ebor4lJlJnEj45qQvTejbjybP7VrjcQthgLzvJp0g8X6GDxam/N7vFohsSe6SCYpDFIRzTxwsK2OuAIn/SSh9iL5mz9DIK0Can0cApFQ5Lhordr2KxYMDFLRyG1B7NIYLvbfmPWr4WGbXjYQl3MJzZBkcuxIXZ2GjYrIj4OES/mXO4CSGL/Qn0xAhD5AgzTXeNIV0MNxxZ/R+aS6Pn5uP1ZArqnImCOaCQdu4pGRe3vhlO/RrKK1kgwZJWWpfIjPiHbKBocQp90w1wvVkDAEk8muCxHVtKpfnWl0O7BRU5Z32efyR9qRyErQQFmPgv9l8BM0x/UVq7AiQ+BjrvJYyt4y5+KRDiPew4/G8tDGB++jfsIWy4wlU1YOyFN3ZrlrvGKbQ53sb2kjzEng3e9ejqVknSLyJdbo9S+AiWjqasDCrWdR/JC2hCSafSqFHOy5tEVzAi1NoUbmNjTk7WyKGvfEYfUPa1p8MlOu+Hw8MPLeZUqZYRWd9FBPquE3w5Ruf58zPa8eaM1i/A13Bv+WVW6vPzmIruUl8agQ71gslYGSzr2itYcjxO63uA2m3No5J5tu+XpusFxNAWmjNwdYVOW39VOyi5nK2OvjTWGk+Vsbm8xb1ha5QOSWtnw12zSfvdlB6JuiXzAdYv6m86e/SHY+/mB+dXqr/51wAQmhdDvI2WgBCiFkXgC5YUnUUR+bX9CtW3tz6ArA4AFJ/K94aeE4epaD08iwuYI+9bJi+kQvEyDBoK/LYavOONBfoDo6wEO72Z+X6A45Ph7n+U/EuSr+0tEdd8wX4VbrxlTPZIoeM8m4YGH1RdlujY37iIK4BpF7JjFiT5Ri0d4Dx+bwyzuDMI2njXSBscAzqHWloLXEMToHCn+Vhpt2Fa0ic0En3k3p0dT8zaB35TEPFEjfWAiF9QzMgZBchgMuTiW1/Rz2oGtQERH17Xb4Rjt/Y0Mah8SNrruUola+3a7pt9odF9rKdIPRZaT595cDwS5jbbIjJzQgeN4TClhGmwKjwtCVSvzQjFJ6gixn7nCj08FmxMq/O9f3ZiVuogaY0G5BhjLt37UELbthCBNRXSjIk9bUznAzFrI/Cm9PocKpKOSgHoIuW2jn8udFCpyG8RYylDds2enFPcfSVPOvjqOrqx8wLWQIyrXSY7grjdFiP8gm4dDgEVmsDm+yiJOsL9oLA77XCSXhWaVAFEsFcF3goELntb/oPIkQknsP6b27l5fYjKNwa+y5ewH+nd/phzAqAWBJlks2rZuS6DIJc4XpLVadHcCpUuIcuKQjx0aUHSPz9tCgxnu9LvG8x0Wx0vxBchNzLiiOSjWy8vgbrz5SAUodROQook4EUtV9kin2Nm6iMhohPihkBEWrOdY0I0ksdYUqlNqtAGrvrfGm4nkZtW0CwZqxXmNZCyIgHoK251H1tXgbT7kZff52voqtxAl+r2z7xUECakvP/EvdZKoACqRcE29RyhptA6iSvmLn5Ep/yg+PulkCnXgAKT+Axhd0pbvc6IRDk1Q6EmLua9i9W5nVJHI4nZX4AqvKu5NWYfSZNgS1ApRFVFtsTIbxJoum8dkt3EOByXY7aytEYuT1hKz0T4vjEsKxuggoxcl6OVkOQ1FYpFPV7WrnGtl8+/rpDnK93Fy8V9vuilq7HiyPzvXaLz4iNPAUSDpquYpMcsKgzSJBCqEttTasFEh0pnQVGbOQtkbFX6wL/xI8uEOxIVfqPWfnI1BKZnHReS8JpqVaKpCwrk3a5qnArwehpFUnR5c3/QpkcyOGTu6SJy+SE3re0QQ1xxjK5Kp0k3tO+UFLhCXUKJctUYDEtUDaDf6OQtVQ2/Vqq3rgghY4wvC/xLyDNFrYIe31lvpz1jyHcx9jrxgrvUBRL+xnigL0RovK3Gp/Xqyng2UmImOJyvrw+U32QxK91tEIkwfCGKz+eBmwibiDgFcbYBMl9Fie/Mij9lRpilXaX0H69qnHnSmH+sZ+X3XVE/KCcJTaWMj2pP1SQ+F5f4ecdj1BbNyR0XyM/Dwqpzd8TsYFyiV67QBY+4+kgzNXsAxBZcq3XcalW5xy8des2pOKFLGe8ZYAFXpD5T2YE3p31frAt4lsgEld5Jtpmi9RaSFICMlQvIC6vDh9ANUI9mSs/2ilAvHtxZD7dE1BQ9IX5KFHXM6XfBlGhz/Ilfp1cge4OO/onMrMyK7Pi/b/KfwG8q4wWKNYaDQAAAABJRU5ErkJggg==',
    },
    {
        name: 'redux',
        img: 'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
    },
    {
        name: 'axios',
        img: 'data:image/png;base64,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',
    },
    {
        name: '.net',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png',
    },
    {
        name: 'laravel',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png',
    },
    {
        name: 'nodejs',
        img: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
    },
    // {
    //     name: 'django',
    //     img: 'https://cdn.worldvectorlogo.com/logos/django.svg',
    // },
    // {
    //     name: 'unity',
    //     img: 'https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png',
    // },
    // {
    //     name: 'spring',
    //     img: 'https://seeklogo.com/images/S/spring-logo-9A2BC78AAF-seeklogo.com.png',
    // },
    {
        name: 'mysql',
        img: 'https://pngimg.com/uploads/mysql/mysql_PNG9.png',
    },
    {
        name: 'microsoft sql',
        img: 'https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png',
    },
    {
        name: 'mongodb',
        img: 'https://www.svgrepo.com/show/331488/mongodb.svg',
    },
    {
        name: 'firebase',
        img: 'https://e-cens.com/wp-content/uploads/elementor/thumbs/firebase-logo_ecens_training-plbnbm1jjt8wi3ksa039i1e2nvw7to1vqajqh3hoas.png',
    },
    // {
    //     name: 'android studio',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png',
    // },

]

const education = [
    {
        period: '2017',
        name: 'avatar social (forum)',
        role: 'backend & maintenance',
        detail: 'I joined a group of 3 people to build and manage a forum. it looks like the avatar game but it was a website version.',
        bxicon: 'bx-briefcase',
    },
    {
        period: '2017 - 2018',
        name: 'PHP developer',
        role: 'Freelancer',
        detail: 'I joined a team of 8 people to work on a few projects. I got a backend position in the team with php language.',
        bxicon: 'bx-briefcase',
    },
    {
        period: '2018',
        name: 'IT Competition for Youth',
        role: 'First prize',
        detail: 'I have been learning about programming and software since i was in 8th grade. So when i was in 11th grade, i participated in Pascal programming contest and won first prize.',
        bxicon: 'bxs-medal',
    },
    {
        period: '2019 - 2023',
        name: 'Ton Duc Thang',
        role: 'University',
        detail: 'I became interested in the information technology industry because I was interested in solving problems in programming, which I enjoyed in high school. Current GPA: 8.12/10.',
        bxicon: 'bx-book-open',
    },
]

export { personal, experience, skills, education, cvLink }