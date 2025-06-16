import './App.css'
import { useRef } from 'react';
import Squares from './components/Squares'
import ColorTabs from './components/ColorTabs'
import Lanyard from './components/Lanyard'
import VariableProximity from './components/VariableProximity'
import SplitText from './components/SplitText'
import BlurText from './components/BlurText'
import About from './components/About';




function App() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    }
    const containerRef = useRef(null);



    return (
        <div className="min-h-screen w-full m-0 p-0">
            <div style={{ width: '100%', height: '200vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }} className='bg-black'>
                <Squares speed={0.5}
                    squareSize={50}
                    direction='diagonal'
                    borderColor='#808080'
                    hoverFillColor='#222' />
            </div>
            <div className="fixed mt-12 top-0 left-1/2 transform -translate-x-1/2 z-50">
                <ColorTabs />
            </div>
            <div className="container mx-auto px-32 pt-2 flex justify-center items-center min-h-screen  -mt-20">
                <div className="w-1/2 text-white flex flex-col justify-end  ml-32">
                    <SplitText
                        text="Hello, I'm"
                        className="text-5xl font-semibold text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <div
                        ref={containerRef}
                        style={{ position: 'relative' }}
                    >
                        <VariableProximity
                            label={'Nikilashree M '}
                            className={'variable-proximity-demo font-variable text-7xl text-pink-400'}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff='linear'
                        />
                    </div>
                    <VariableProximity
                        label={'Exploring different ways to create, learn, and solve real problems. Driven by curiosity and the joy of building useful things.'}
                        className={'variable-proximity-demo font-variable text-2xl text-white-400 mt-4'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff='linear'
                    />
                </div>
                <div className="w-1/2 flex justify-end ">
                    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={20} transparent={true} />

                </div>

            </div>
            <About />
            <VariableProximity
                        label={'ABOUT'}
                        className={'variable-proximity-demo font-variable text-5xl text-white-400 mt-4'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff='linear'
                    />


        </div>
    )
}

export default App




