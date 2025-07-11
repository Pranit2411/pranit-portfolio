
const ParallaxBackground = () => {

    return (
        <section className='absolute inset-0 bg-black/40'>
            <div className='relative h-screen overflow-y-hidden'>
                <div className='absolute inset-0 w-full h-screen -z-50'
                style={{backgroundImage: "url(assets/sky.jpg", 
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}/>
                <div className='absolute inset-0 -z-40 '
                style={{backgroundImage: "url(assets/mountain-3.png", 
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}/>
                <div className='absolute inset-0 -z-30 '
                style={{backgroundImage: "url(assets/planets.png", 
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}/>
                <div className='absolute inset-0 -z-20 '
                style={{backgroundImage: "url(assets/mountain-2.png", 
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}/>
                <div className='absolute inset-0 -z-10 '
                style={{backgroundImage: "url(assets/mountain-1.png", 
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}/>
            </div>
        </section>
    );
};

export default ParallaxBackground;