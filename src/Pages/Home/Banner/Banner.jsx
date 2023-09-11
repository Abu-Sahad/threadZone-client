import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from '../../../assets/Slider Image/image-2.png';
import img3 from '../../../assets/Slider Image/image-3.png';
import img4 from '../../../assets/Slider Image/image-4.png';

const Banner = () => {
    return (
        <div className=''>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
                <div className='h-[250px] md:h-[400px] lg:h-[650px] relative'>
                    <div className='h-full w-full'>
                        <img className='rounded-md h-full object-cover' src='https://i.ibb.co/LJQPzZg/black-friday-elements-assortment.jpg' />
                        <div className='absolute inset-0  text-white lg:left-[10%] lg:top-[20%] lg:h-[500px] lg:w-[500px] md:left-[5%] md:top-[10%] md::h-[300px] md:w-[400px] hidden md:block lg:block'>
                            <h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>Welcome To Our Gift Shop</h1>
                            <p className='text-sm md:text-base lg:text-lg text-center mt-4'>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                            <button className='btn btn-accent px-4 py-3 mt-6'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className='h-[250px] md:h-[400px] lg:h-[650px] relative'>
                    <div className='h-full w-full'>
                        <img className='rounded-md h-full object-cover' src='https://i.ibb.co/LJQPzZg/black-friday-elements-assortment.jpg' />
                        <div className='absolute inset-0  text-white lg:left-[10%] lg:top-[20%] lg:h-[500px] lg:w-[500px] md:left-[5%] md:top-[10%] md::h-[300px] md:w-[400px] hidden md:block lg:block'>
                            <h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>Welcome To Our Gift Shop</h1>
                            <p className='text-sm md:text-base lg:text-lg text-center mt-4'>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                            <button className='btn btn-accent px-4 py-3 mt-6'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className='h-[250px] md:h-[400px] lg:h-[650px] relative'>
                    <div className='h-full w-full'>
                        <img className='rounded-md h-full object-cover' src='https://i.ibb.co/LJQPzZg/black-friday-elements-assortment.jpg' />
                        <div className='absolute inset-0  text-white lg:left-[10%] lg:top-[20%] lg:h-[500px] lg:w-[500px] md:left-[5%] md:top-[10%] md::h-[300px] md:w-[400px] hidden md:block lg:block'>
                            <h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>Welcome To Our Gift Shop</h1>
                            <p className='text-sm md:text-base lg:text-lg text-center mt-4'>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                            <button className='btn btn-accent px-4 py-3 mt-6'>Contact Us</button>
                        </div>
                    </div>
                </div>
                
                
                
            </Carousel>
        </div>
    );
};

export default Banner;
