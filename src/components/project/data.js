// portfolio
import portfolio1 from '../../assets/projects/portfolio/portfolio-1.png'
import portfolio2 from '../../assets/projects/portfolio/portfolio-2.png'
import portfolio3 from '../../assets/projects/portfolio/portfolio-3.png'
import portfolio4 from '../../assets/projects/portfolio/portfolio-4.png'
import portfolio5 from '../../assets/projects/portfolio/portfolio-5.png'
import portfolio6 from '../../assets/projects/portfolio/portfolio-6.png'

// music
import music1 from '../../assets/projects/music/music-1.png'
import music2 from '../../assets/projects/music/music-2.png'
import music3 from '../../assets/projects/music/music-3.png'
import music4 from '../../assets/projects/music/music-4.png'
import music5 from '../../assets/projects/music/music-5.png'
import music6 from '../../assets/projects/music/music-6.png'
import music7 from '../../assets/projects/music/music-7.png'
import music8 from '../../assets/projects/music/music-8.png'

// notif
import notif1 from '../../assets/projects/notif/notif-1.png'
import notif2 from '../../assets/projects/notif/notif-2.png'
import notif3 from '../../assets/projects/notif/notif-3.png'
import notif4 from '../../assets/projects/notif/notif-4.png'
import notif5 from '../../assets/projects/notif/notif-5.png'
import notif6 from '../../assets/projects/notif/notif-6.png'
import notif7 from '../../assets/projects/notif/notif-7.png'
import notif8 from '../../assets/projects/notif/notif-8.png'
import notif9 from '../../assets/projects/notif/notif-9.png'
import notif10 from '../../assets/projects/notif/notif-10.png'

// chat
import chat1 from '../../assets/projects/chat/chat-1.png'
import chat2 from '../../assets/projects/chat/chat-2.png'
import chat3 from '../../assets/projects/chat/chat-3.png'
import chat4 from '../../assets/projects/chat/chat-4.png'


const data = [
    {
        id: 1,
        name: 'Frontend',
        projects: [
            {
                name: 'Portfolio',
                img: [
                    portfolio1,
                    portfolio2,
                    portfolio3,
                    portfolio4,
                    portfolio5,
                    portfolio6,

                ],
                detail: 'My portfolio website',
                created: '02/09/2002',
                role: 'Front-end',
                frontend: 'reactjs, scss',
                backend: 'null',
                github: 'https://github.com/qnpDev/portfolio',
                demo: null,
            },
            // {
            //     name: 'qnp2',
            //     img: [
            //         'https://fedudesign.vn/wp-content/uploads/2020/07/1039991-scaled.jpg',
            //         'https://fedudesign.vn/wp-content/uploads/2020/07/1039991-scaled.jpg',
            //     ],
            //     detail: 'hihi',
            //     created: '01/01/2001',
            //     role: 'fullstack',
            //     frontend: 'reactjs, scss',
            //     backend: '.net, mysql',
            //     demo: 'link demo'
            // },
            
        ],
    },
    {
        id: 2,
        name: 'backend',
        projects: [
            // {
            //     name: 'qnp',
            //     img: [
            //         'https://fedudesign.vn/wp-content/uploads/2020/07/1039991-scaled.jpg',
            //         'https://fedudesign.vn/wp-content/uploads/2020/07/1039991-scaled.jpg',
            //     ],
            //     detail: 'hihi',
            //     created: '01/01/2001',
            //     role: 'fullstack',
            //     frontend: 'reactjs, scss',
            //     backend: '.net, mysql',
            //     demo: 'link demo'
            // },
            
        ],
    },
    {
        id: 3,
        name: 'fullstack',
        projects: [
            {
                name: 'music app',
                img: [
                    music1,
                    music2,
                    music3,
                    music4,
                    music5,
                    music6,
                    music7,
                    music8,

                ],
                detail: 'Music App is a web application that everyone can access to find and listen to music online. Moreover, people can upload their song and download their favorite song',
                created: '08/2021 - 10/2021',
                role: 'fullstack',
                frontend: 'reactjs, css',
                backend: '.net, microsoft sql server',
                github: 'https://github.com/qnpDev/MusicApp',
                demo: null,
            },
            {
                name: 'community & notification',
                img: [
                    notif1,
                    notif2,
                    notif3,
                    notif4,
                    notif5,
                    notif6,
                    notif7,
                    notif8,
                    notif9,
                    notif10,

                ],
                detail: 'Community and notification is a system web application of Ton Duc Thang University. This is a miniature society where the school can post announcements, and students can post to exchange, share and receive real-time support from the school',
                created: '10/2021 - 12/2021',
                role: 'fullstack',
                frontend: 'reactjs, css',
                backend: 'nodejs (expressjs), mongodb',
                github: 'https://github.com/qnpDev/NotifApp',
                demo: null,
            },
            {
                name: 'real-time chatting',
                img: [
                    chat1,
                    chat2,
                    chat3,
                    chat4,

                ],
                detail: 'Community and notification is a system web application of Ton Duc Thang University. This is a miniature society where the school can post announcements, and students can post to exchange, share and receive real-time support from the school',
                created: '11/2021',
                role: 'fullstack',
                frontend: 'reactjs, css',
                backend: 'nodejs (expressjs), mongodb',
                github: 'https://github.com/qnpDev/ChatApp',
                demo: null,
            },
            // {
            //     name: 'qnp',
            //     img: [
            //         'https://fedudesign.vn/wp-content/uploads/2020/07/1039991-scaled.jpg',
            //         'https://fedudesign.vn/wp-content/uploads/2020/07/1039991-scaled.jpg',
            //     ],
            //     detail: 'hihi',
            //     created: '01/01/2001',
            //     role: 'fullstack',
            //     frontend: 'reactjs, scss',
            //     backend: '.net, mysql',
            //     demo: 'link demo'
            // },
            
        ],
    }
]
export default data