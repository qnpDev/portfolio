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

// appstore
import appstore1 from '../../assets/projects/appstore/appstore-1.png'
import appstore2 from '../../assets/projects/appstore/appstore-2.png'
import appstore3 from '../../assets/projects/appstore/appstore-3.png'
import appstore4 from '../../assets/projects/appstore/appstore-4.png'
import appstore5 from '../../assets/projects/appstore/appstore-5.png'
import appstore6 from '../../assets/projects/appstore/appstore-6.png'
import appstore7 from '../../assets/projects/appstore/appstore-7.png'
import appstore8 from '../../assets/projects/appstore/appstore-8.png'
import appstore9 from '../../assets/projects/appstore/appstore-9.png'
import appstore10 from '../../assets/projects/appstore/appstore-10.png'
import appstore11 from '../../assets/projects/appstore/appstore-11.png'
import appstore12 from '../../assets/projects/appstore/appstore-12.png'

// chatbot
import chatbot1 from '../../assets/projects/chatbot/chatbot-1.png'
import chatbot2 from '../../assets/projects/chatbot/chatbot-2.png'
import chatbot3 from '../../assets/projects/chatbot/chatbot-3.png'

// hotel
import hotel1 from '../../assets/projects/hotel/hotel-1.png'
import hotel2 from '../../assets/projects/hotel/hotel-2.png'
import hotel3 from '../../assets/projects/hotel/hotel-3.png'
import hotel4 from '../../assets/projects/hotel/hotel-4.png'
import hotel5 from '../../assets/projects/hotel/hotel-5.png'
import hotel6 from '../../assets/projects/hotel/hotel-6.png'
import hotel7 from '../../assets/projects/hotel/hotel-7.png'
import hotel8 from '../../assets/projects/hotel/hotel-8.png'
import hotel9 from '../../assets/projects/hotel/hotel-9.png'
import hotel10 from '../../assets/projects/hotel/hotel-10.png'
import hotel11 from '../../assets/projects/hotel/hotel-11.png'
import hotel12 from '../../assets/projects/hotel/hotel-12.png'


const data = [
    {
        id: 1,
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
                detail: 'Music App is a web application that everyone can access to find and listen to music online. Moreover, people can upload their song and download their favorite song.',
                created: '08/2021 - 10/2021',
                role: 'fullstack',
                frontend: 'reactjs, css',
                backend: '.net, microsoft sql server',
                architect: 'microservice, websocket, design pattern, .net core',
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
                detail: 'Community and notification is a system web application of Ton Duc Thang University. This is a miniature society where the school can post announcements, and students can post to exchange, share and receive real-time support from the school.',
                created: '10/2021 - 12/2021',
                role: 'fullstack',
                frontend: 'reactjs, css',
                backend: 'nodejs (expressjs), mongodb',
                architect: 'microservice, websocket',
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
                detail: 'Real-time chat is an online communication channel that allows you to conduct real-time conversations. It involves the transmission of live text messages from the sender to the recipient.',
                created: '11/2021',
                role: 'fullstack',
                frontend: 'reactjs, css',
                backend: 'nodejs (expressjs), mongodb',
                architect: 'microservice, websocket',
                github: 'https://github.com/qnpDev/ChatApp',
                demo: null,
            },
            {
                name: 'appstore',
                img: [
                    appstore1,
                    appstore2,
                    appstore3,
                    appstore4,
                    appstore5,
                    appstore6,
                    appstore7,
                    appstore8,
                    appstore9,
                    appstore10,
                    appstore11,
                    appstore12,

                ],
                detail: 'Appstore is a website which you can download, upload apk file. Moreover, you can sell your app on website and users can buy your app.',
                created: '03/2021 - 05/2021',
                role: 'fullstack',
                frontend: 'html, css, bootstrap',
                backend: 'php, mysql',
                architect: null,
                github: ' https://github.com/qnpDev/AppStore',
                demo: null,
            },
            
        ],
        
    },
    {
        id: 2,
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
                detail: "Portfolio site is an extension of a freelancer's resume. It provides a convenient way for potential clients to view my work while also allowing me to expand on my skills and services.",
                created: '09/2002',
                role: 'Front-end',
                frontend: 'reactjs, scss',
                backend: 'null',
                architect: null,
                github: 'https://github.com/qnpDev/portfolio',
                demo: 'https://qnp.vercel.app/',
            },
            
        ],
    },
    {
        id: 3,
        name: 'backend',
        projects: [
            {
                name: 'TDT chatbot',
                img: [
                    chatbot1,
                    chatbot2,
                    chatbot3,

                ],
                detail: 'Bot chat is a web service which you can ask about information of Ton Duc Thang University.',
                created: '01/2022',
                role: 'back-end',
                frontend: 'html, css, bootstrap',
                backend: 'django',
                architect: 'tensorflow',
                github: 'https://github.com/qnpDev/TDTChatbot',
                demo: null,
            },
            {
                name: 'hotel management system',
                img: [
                    hotel1,
                    hotel2,
                    hotel3,
                    hotel4,
                    hotel5,
                    hotel6,
                    hotel7,
                    hotel8,
                    hotel9,
                    hotel10,
                    hotel11,
                    hotel12,

                ],
                detail: 'Website to manage your hotel and users can online book room in hotel',
                created: '10/2021 - 12/2021',
                role: 'back-end',
                frontend: 'html, css, bootstrap',
                backend: 'laravel, mysql',
                architect: null,
                github: 'https://github.com/qnpDev/HotelManagementSystem',
                demo: null,
            },
            
        ],
    },
]
export default data