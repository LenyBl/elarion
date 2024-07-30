import React, { useEffect, useState } from 'react';

export default function CopyButton() {
    const [buttonText, setButtonText] = useState('IP : play.elarion.fr');

    useEffect(() => {
        const button = document.getElementById('copyButton');

        const copyToClipboard = () => {
            navigator.clipboard.writeText('play.elarion.fr')
                .then(() => {
                    setButtonText('Copié !');
                    setTimeout(() => {
                        setButtonText('IP : play.elarion.fr');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Échec de la copie: ', err);
                });
        };

        button.addEventListener('click', copyToClipboard);

        return () => {
            button.removeEventListener('click', copyToClipboard);
        };
    }, []);

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            id="copyButton"
        >
            {buttonText}
        </button>
    );
}
