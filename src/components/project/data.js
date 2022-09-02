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
                github: 'null',
                demo: 'null'
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
                demo: 'null'
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