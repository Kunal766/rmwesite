import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
// import { useEffect } from 'react';

function Home() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:false
                }
            }
        ]
    };
    const Data = [
        {
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            ],
            "subtitle": "By Blender Foundation",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
            "title": "Big Buck Bunny"
        },
        {
            "description": "The first Blender Open Movie from 2006",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            ],
            "subtitle": "By Blender Foundation",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
            "title": "Elephant Dream"
        },
        {
            "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            ],
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
            "title": "For Bigger Blazes"
        },
        {
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            ],
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
            "title": "For Bigger Escape"
        },
        {
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            ],
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
            "title": "For Bigger Fun"
        },
        {
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            ],
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
            "title": "For Bigger Joyrides"
        },
        {
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
            ],
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
            "title": "For Bigger Meltdowns"
        },
        {
            "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
            ],
            "subtitle": "By Blender Foundation",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
            "title": "Sintel"
        },
        {
            "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
            ],
            "subtitle": "By Garage419",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
            "title": "Subaru Outback On Street And Dirt"
        },
        {
            "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            ],
            "subtitle": "By Blender Foundation",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
            "title": "Tears of Steel"
        },
        {
            "description": "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ],
            "subtitle": "By Garage419",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
            "title": "Volkswagen GTI Review"
        },
        {
            "description": "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
            ],
            "subtitle": "By Garage419",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
            "title": "We Are Going On Bullrun"
        },
        {
            "description": "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
            "sources": [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
            ],
            "subtitle": "By Garage419",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
            "title": "What care can you get for a grand?"
        }
    ]
    return (<div className='home'>
        Home
        <Slider {...settings}>

            {Data.map((elem, index) => {
                return (
                    <div className='silderItem' key={index}>
                        <video width="220" height="120" src={elem.sources[0]} poster={elem.thumb} controls>
                        </video>
                    </div>
                )
            })}
            {/* 
                </video>
            </div>
            <div className='silderItem'>
                <video width="220" height="120" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg" controls>
                </video>
            </div>
            <div className='silderItem'>
                <video width="220" height="120" controls>
                    <source src="movie.mp4" type="video/mp4" />
                </video>            </div>
            <div className='silderItem'>
                <video width="220" height="120" controls>
                    <source src="movie.mp4" type="video/mp4" />
                </video>            </div>
            <div className='silderItem'>
                <video width="220" height="120" controls>
                    <source src="movie.mp4" type="video/mp4" />
                </video>            </div>
            <div className='silderItem'>
                <video width="220" height="120" controls>
                    <source src="movie.mp4" type="video/mp4" />
                </video>            </div> */}
        </Slider>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore qui assumenda officiis, enim nemo soluta sit, dolore velit obcaecati laborum unde dignissimos incidunt ea provident possimus harum placeat quod! Dicta obcaecati quidem, deserunt asperiores dolore dolorem adipisci sint. Itaque necessitatibus animi eos enim incidunt impedit voluptatum dolorum excepturi ea consectetur aliquam, soluta optio repellat minus molestias sapiente quisquam magni voluptates dignissimos, non, blanditiis laudantium praesentium quia? Sapiente temporibus nobis quisquam pariatur cumque. Totam voluptates ab explicabo accusamus illum. Quisquam ea dolorum blanditiis cum perferendis. Possimus soluta voluptatibus, vero assumenda culpa odit molestias blanditiis, eos aspernatur eveniet mollitia neque obcaecati dicta fuga similique cum. Sit, esse! Id voluptatibus enim quibusdam, ipsum voluptates quos. Nisi delectus aperiam mollitia, eum aliquam corporis explicabo, rerum doloribus adipisci sunt tenetur itaque atque nihil. Explicabo voluptatibus laudantium vel architecto tenetur dolores nihil, debitis perferendis quia ad soluta doloremque aliquid asperiores aperiam excepturi dolorem modi adipisci iure cum saepe sapiente reiciendis atque amet! Ducimus, doloremque quae fugiat aliquam velit doloribus provident ex sint tenetur. Ut voluptates possimus atque, saepe voluptas aperiam, eius eligendi dolore ratione harum sequi omnis. Architecto error, ab numquam aliquid repellat natus quidem iusto voluptas obcaecati nobis unde culpa earum eveniet possimus magnam dolorum modi? Rem maxime officia illo reprehenderit, velit debitis, cupiditate nulla repudiandae iure et commodi, quod perferendis dolor qui vero temporibus officiis. Voluptas officia corrupti quos delectus, asperiores cumque similique ad, tempora perspiciatis facilis architecto aliquid dolor aperiam! Soluta quam beatae maiores placeat sequi culpa aut, dolores enim accusantium id libero fuga qui dolore! Magnam odit iusto voluptate corporis, dolorem porro sit quaerat sed voluptas? Non provident expedita praesentium fuga consequuntur? Optio odio natus doloribus, consequatur molestias tempora minima vitae a perspiciatis doloremque repellendus nostrum beatae sit iusto? Voluptas et voluptates perferendis aliquam tempore, aperiam ex officiis sapiente facilis! Cum similique sit eveniet doloribus rerum illo, voluptatibus ullam, expedita iusto ipsa tempora repellendus ducimus nihil modi, molestias sint placeat quod! Nulla repellat, maiores ad eveniet accusantium, sed maxime nihil itaque nisi harum, blanditiis recusandae tenetur cupiditate. Quo sint assumenda, incidunt quia cupiditate quibusdam cum beatae fuga, enim modi aspernatur, nihil minima similique impedit. Numquam, neque et vero sit ab officia tenetur nobis itaque, minima commodi quas voluptates quia porro quis eos quod possimus atque veritatis. Laborum, exercitationem? Voluptatem earum eius officia ut? Asperiores, voluptas. Neque ipsam consequatur dolorum, pariatur aspernatur eius doloremque atque error est tenetur soluta accusantium saepe, deserunt <amet className="lorem20"></amet>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque perferendis quis ullam, voluptas sit necessitatibus autem at, soluta nobis error, rem ducimus doloremque non molestiae laboriosam! Culpa excepturi nesciunt voluptate quis dolores asperiores cum blanditiis non, aliquam id suscipit quae? Earum corrupti necessitatibus quae laudantium illum ad a minus expedita, nostrum tenetur, esse fuga repellat rerum nesciunt quam modi. Debitis aperiam vitae soluta iure saepe vero quam, ipsam reprehenderit cum veritatis eaque corporis. Unde quo aliquid corrupti ab atque cumque deleniti esse, sapiente optio similique. Ab soluta quibusdam veritatis explicabo. Sequi sapiente asperiores aut nobis mollitia consectetur cupiditate voluptate natus provident vel quasi eveniet porro laboriosam facilis officiis deserunt nihil, praesentium incidunt. Culpa quo est consequatur provident tempore doloremque earum itaque debitis eaque cumque incidunt aperiam, id aut iusto saepe nobis velit reprehenderit voluptatem totam, odio ex fugit distinctio? A facere deserunt, dolorem quas neque impedit quasi quisquam laudantium minima sapiente porro ducimus ipsam placeat asperiores amet minus nesciunt. Voluptas excepturi consequatur, soluta eaque rem illum laboriosam? Vitae sed hic nemo nostrum veniam quas dolor corporis rerum amet dignissimos maxime quae corrupti blanditiis, ab inventore, non recusandae eligendi fuga natus quaerat eos incidunt optio ratione. Voluptas nam nesciunt asperiores blanditiis laborum aspernatur, doloribus vero? Ducimus maiores, qui beatae fuga magnam dolores natus, reprehenderit consectetur quos deserunt sequi ex laboriosam, in velit numquam? Ratione ea beatae asperiores harum unde voluptatem temporibus nobis ab quibusdam quo eligendi corporis exercitationem magni in dolorum, amet molestiae corrupti accusamus. Animi iste incidunt omnis in. Deleniti cumque placeat laborum magnam hic rem consequatur laboriosam eos aperiam. Maxime et temporibus nihil maiores at eveniet sunt voluptate velit quae eaque distinctio ea quia quidem, ullam quod. Accusamus quod accusantium exercitationem placeat saepe. Sit temporibus, accusantium possimus voluptatem nobis vero provident, officia deserunt blanditiis quibusdam, ratione corrupti debitis soluta exercitationem laudantium totam doloremque quasi ducimus odit eligendi veniam voluptatibus excepturi iure quidem! Enim recusandae at magnam quia velit ducimus incidunt nobis dolorem sequi facere. Assumenda molestias asperiores dolore delectus ex consectetur eum nesciunt eligendi quidem, tempora minima numquam commodi sit illo? Fugiat quae adipisci officiis quo doloremque saepe, eos iure quibusdam perspiciatis magnam laudantium illo sed dicta dolore iste odit earum. Id eius aperiam ipsa. Architecto earum, dolor eveniet consequatur maiores tenetur debitis quibusdam molestias totam consequuntur ut eaque aliquid excepturi animi ipsa maxime quos sunt enim neque? Dolores, inventore! Quos soluta ea similique saepe libero, quibusdam dolorum quisquam corrupti quasi porro. Nam illum necessitatibus exercitationem, perferendis quasi quaerat quos dolorem reiciendis incidunt magnam! Modi earum commodi quaerat accusantium sapiente est, fuga a provident dolorem distinctio architecto, sed eius reiciendis tempora omnis eum maxime quas doloribus voluptates aut eaque. Ipsam nesciunt sed perspiciatis non a, labore quam minus iusto reprehenderit. Aut eligendi sequi nulla autem doloremque eum quibusdam. Aut autem qui placeat repellendus eaque sequi voluptatem sint consequatur quam iste? Minus recusandae accusantium doloribus, eaque adipisci laborum quisquam modi est eligendi laudantium consequuntur quas minima optio exercitationem temporibus qui. Quas nihil dignissimos incidunt eos est natus ipsam dicta.
    </div>)
}
export default Home;