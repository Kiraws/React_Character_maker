
const CharacterDisplay = ({
    characterRef,
    selectedBack,
    charaback,
    basic,
    selectedEars,
    charaears,
    selectedHair,
    charahair,
    selectedEyes,
    charaeyes,
    selectedNose,
    charanose,
    selectedMouth,
    charamouth,
    selectedAccessories,
    charaaccess,
    alea,
    handleRandomize,
    down,
    handleDownload
}) => {
    return (
        <section className="sm:w-1/2 h-5/5 mr-12">
            <div className="bg-gray-300 sm:h-[450px]" ref={characterRef}>
                {selectedBack !== null && <img className="absolute sm:w-[430px] h-[450px] mb-5 mr-[2px] ml-[2px]" src={charaback[selectedBack]} alt="" />}
                <div className="flex justify-center items-center relative">
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
    );
};

export default CharacterDisplay;
