import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpriteCard from './SpriteCard';
import allSprites from '../constants/sprites';
import { addSprite } from '../redux/spritesSlice';

export const AddSprites = () => {
    const dispatch = useDispatch();
    const sprites = useSelector((state) => state.sprites.sprites);
    const availableSprites = useMemo(() => {
        return allSprites.filter((currSprite) => !sprites.find(s => s.id === currSprite.id));
    }, [sprites]);
    
    const [showModal, setShowModal] = useState(false);
    const [selectedSprite, setSelectedSprite] = useState({ id: null, name: null });

    const handleAddSprite = () => {
        if (selectedSprite.id) {
            dispatch(addSprite({ name: selectedSprite.name, id: selectedSprite.id }));
            setShowModal(false);
            setSelectedSprite({ id: null, name: null });
        }
    };

    return (
        <>
            <button
                className="bg-teal-500 text-black px-5 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-200 font-semibold"
                onClick={() => setShowModal(true)}
            >
                Add Sprites
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-transform transform scale-100 md:scale-105">
                        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">Choose The Sprite for your Game</h2>
                        {availableSprites.length > 0 ? (
                            <div className="grid grid-cols-3 gap-4">
                                {availableSprites.map((sprite, index) => (
                                    <SpriteCard
                                        key={index}
                                        spriteName={sprite.name}
                                        selected={sprite.id === selectedSprite.id}
                                        onClick={() => setSelectedSprite({ id: sprite.id, name: sprite.name })}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-red-700">No Sprites Available</div>
                        )}
                        <div className="mt-4 flex justify-between">
                            <button
                                className="bg-black-500 text-black px-4 py-2 rounded-md shadow-md hover:bg-teal-600 transition duration-200 font-semibold"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-black-500 text-black px-4 py-2 rounded-md shadow-md hover:bg-teal-600 transition duration-200 font-semibold"
                                onClick={handleAddSprite}
                            >
                                Add The New Sprite
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
