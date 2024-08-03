    import { useState, useEffect, useRef } from 'react';
    import html2canvas from 'html2canvas';
    import down from "../assets/download.png";
    import alea from "../assets/aleatoire.png";
    import basic from '../assets/character-images-left-side/default/basic-character.png';
    import Button from "./Button";
    import ImageSelector from "./ImageSelector";

    import HairImages from '../constants/svg/HairImages';
    import EyesImages from '../constants/svg/EyesImages';
    import AccessImages from '../constants/svg/AccesImages';
    import EarsImages from '../constants/svg/EarsImages';
    import MouthImages from '../constants/svg/MouthImages';
    import NoseImages from '../constants/svg/NoseImages';
    import BackImages from '../constants/svg/BackImages';


    import Charahair from '../constants/img/Charahair';
    import Charaears from '../constants/img/Charaears';
    import Charaeyes from '../constants/img/Charaeyes';
    import Charaaccess from '../constants/img/Charaaccess';
    import Charamouth from '../constants/img/Charamouth';
    import Charanose from '../constants/img/Charanose';
    import Charaback from '../constants/img/Charaback';

    const Generator = () => {
    const [selectedCategory, setSelectedCategory] = useState(() => localStorage.getItem('part') || 'Hair');

    const [selectedHair, setSelectedHair] = useState(() => localStorage.getItem('hair') || null);
    const [selectedEyes, setSelectedEyes] = useState(() => localStorage.getItem('eyes') || null);
    const [selectedEars, setSelectedEars] = useState(() => localStorage.getItem('ears') || null);
    const [selectedNose, setSelectedNose] = useState(() => localStorage.getItem('nose') || null);
    const [selectedMouth, setSelectedMouth] = useState(() => localStorage.getItem('mouth') || null);
    const [selectedBack, setSelectedBack] = useState(() => localStorage.getItem('back') || null);
    const [selectedAccessories, setSelectedAccessories] = useState(() => localStorage.getItem('accessories') || null);

    const hairImages = HairImages();
    const eyesImages = EyesImages();
    const accesImages = AccessImages();
    const earsImages = EarsImages();
    const mouthImages = MouthImages();
    const noseImages = NoseImages();
    const backImages = BackImages();
    const charahair = Charahair();
    const charaears = Charaears();
    const charaeyes = Charaeyes();
    const charaaccess = Charaaccess();
    const charamouth = Charamouth();
    const charanose = Charanose();
    const charaback = Charaback();

    const characterRef = useRef(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleImageSelect = (category, index) => {
        switch (category) {
            case 'hair':
                setSelectedHair(index);
                break;
            case 'eyes':
                setSelectedEyes(index);
                break;
            case 'ears':
                setSelectedEars(index);
                break;
            case 'nose':
                setSelectedNose(index);
                break;
            case 'mouth':
                setSelectedMouth(index);
                break;
            case 'accessories':
                setSelectedAccessories(index);
                break;
            case 'back':
                    setSelectedBack(index);
                    break;    
            default:
                break;
        }
    };

    const handleDownload = () => {
        if (characterRef.current) {
            html2canvas(characterRef.current).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'character.png';
                link.click();
            });
        }
    };
    const getRandomIndex = (array) => {
        return Math.floor(Math.random() * array.length);
    };

    const handleRandomize = () => {
        const randomHair = getRandomIndex(charahair);
        const randomEyes = getRandomIndex(charaeyes);
        const randomEars = getRandomIndex(charaears);
        const randomNose = getRandomIndex(charanose);
        const randomMouth = getRandomIndex(charamouth);
        const randomBack = getRandomIndex(charaback);
        const randomAccessories = getRandomIndex(charaaccess);

        setSelectedHair(randomHair);
        setSelectedEyes(randomEyes);
        setSelectedEars(randomEars);
        setSelectedNose(randomNose);
        setSelectedMouth(randomMouth);
        setSelectedBack(randomBack);
        setSelectedAccessories(randomAccessories);

        // Update the selected images in ImageSelector
        handleImageSelect('hair', randomHair);
        handleImageSelect('eyes', randomEyes);
        handleImageSelect('ears', randomEars);
        handleImageSelect('nose', randomNose);
        handleImageSelect('mouth', randomMouth);
        handleImageSelect('back', randomBack);
        handleImageSelect('accessories', randomAccessories);
        
    };
    useEffect(() => {
        localStorage.setItem('part', selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        localStorage.setItem('hair', selectedHair);
    }, [selectedHair]);

    useEffect(() => {
        localStorage.setItem('eyes', selectedEyes);
    }, [selectedEyes]);

    useEffect(() => {
        localStorage.setItem('ears', selectedEars);
    }, [selectedEars]);

    useEffect(() => {
        localStorage.setItem('nose', selectedNose);
    }, [selectedNose]);

    useEffect(() => {
        localStorage.setItem('mouth', selectedMouth);
    }, [selectedMouth]);

    useEffect(() => {
        localStorage.setItem('back', selectedBack);
    }, [selectedBack]);
    
    useEffect(() => {
        localStorage.setItem('accessories', selectedAccessories);
    }, [selectedAccessories]);

return (
        <div className="w-full h-[650px] mb-10">
            <h1 className="font-roboto font-bold sm:text-5xl mb-5 sm:h-[110px]">CHARACTER GENERATOR</h1>
            <div className="h-[520px] flex">
                <section className="sm:w-1/2 h-5/5 mr-12">
                    <div className="bg-gray-300 sm:h-[450px] "ref={characterRef}>
                            {selectedBack !== null && <img className="absolute sm:w-[430px] h-[450px] mb-5 mr-[2px] ml-[2px]" src={charaback[selectedBack]} alt="" />}
                        <div className="flex justify-center items-center relative" >
                            <img className="mb-4 h-[400px] mt-[50px]" src={basic} alt="Basic character" />
                            {selectedEars !== null && <img className="absolute sm:w-[380px] mb-5 mr-[2px] mt-[50px] ml-[2px]" src={charaears[selectedEars]} alt="" />}
                            {selectedHair !== null && <img className="absolute sm:w-[380px] mb-5 mr-[2px] mt-[52px] ml-[2px]" src={charahair[selectedHair]} alt="" />}
                            {selectedEyes !== null && <img className="absolute sm:w-[380px] mb-5 mr-[2px] mt-[50px] ml-[2px]" src={charaeyes[selectedEyes]} alt="" />}
                            {selectedNose !== null && <img className="absolute sm:w-[380px] mb-5 mr-[2px] mt-[50px] ml-[2px]" src={charanose[selectedNose]} alt="" />}
                            {selectedMouth !== null && <img className="absolute sm:w-[380px] mb-5 mr-[2px] mt-[50px] ml-[2px]" src={charamouth[selectedMouth]} alt="" />}
                            {selectedAccessories !== null && <img className="absolute sm:w-[380px] mb-5 mr-[2px] mt-[50px] ml-[2px]" src={charaaccess[selectedAccessories]} alt="" />}
                            
                        </div>
                    </div>
                    <section className="h-[70px] flex items-end justify-between">
                        <div>
                            <button className="button bg-blue-800 text-white" onClick={handleRandomize}>
                                <img src={alea} alt="Random" />Random
                            </button>
                        </div>
                        <div>
                            <button className="button bg-gray-100 text-black" onClick={handleDownload}>
                                <img src={down} alt="Download" />Download
                            </button>
                        </div>
                    </section>
                </section>
                <section className="w-full h-full">
                    <p className="font-roboto font-semibold text-xl mb-2">Customize Look</p>
                    <div className="row1 grid grid-cols-4 gap-[1rem] w-[375px]">
                        <Button onClick={() => handleCategoryClick('Hair')}>Hair</Button>
                        <Button onClick={() => handleCategoryClick('Eyes')}>Eyes</Button>
                        <Button onClick={() => handleCategoryClick('Ears')}>Ears</Button>
                        <Button onClick={() => handleCategoryClick('Nose')}>Nose</Button>
                    </div>
                    <div className="row2 flex gap-[1rem] mt-2">
                        <Button onClick={() => handleCategoryClick('Mouth')}>Mouth</Button>
                        <Button onClick={() => handleCategoryClick('Back')}>Background</Button>
                        <Button onClick={() => handleCategoryClick('Accessories')}>Accessories</Button>
                    </div>
                    <section className="h-3/4 grid grid-cols-3 w-[600px] -ml-6">
                    {selectedCategory === 'Hair' && <ImageSelector images={hairImages} name="hair" onSelect={(index) => handleImageSelect('hair', index)} selectedIndex={selectedHair} />}
                        {selectedCategory === 'Eyes' && <ImageSelector images={eyesImages} name="eyes" onSelect={(index) => handleImageSelect('eyes', index)} selectedIndex={selectedEyes} />}
                        {selectedCategory === 'Accessories' && <ImageSelector images={accesImages} name="accessories" onSelect={(index) => handleImageSelect('accessories', index)} selectedIndex={selectedAccessories} />}
                        {selectedCategory === 'Ears' && <ImageSelector images={earsImages} name="ears" onSelect={(index) => handleImageSelect('ears', index)} selectedIndex={selectedEars} />}
                        {selectedCategory === 'Mouth' && <ImageSelector images={mouthImages} name="mouth" onSelect={(index) => handleImageSelect('mouth', index)} selectedIndex={selectedMouth} />}
                        {selectedCategory === 'Nose' && <ImageSelector images={noseImages} name="nose" onSelect={(index) => handleImageSelect('nose', index)} selectedIndex={selectedNose} />}
                        {selectedCategory === 'Back' && <ImageSelector images={backImages} name="back" onSelect={(index) => handleImageSelect('back', index)} selectedIndex={selectedBack} />}
                    </section>
                </section>
            </div>
    </div>
    );
};

export default Generator;
