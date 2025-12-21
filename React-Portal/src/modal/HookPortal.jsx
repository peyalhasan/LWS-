import React, { useState } from 'react';
import ModalContent from './ModalContent';
import usePortal from '../Hooks/usePortal';

const HookPortal = () => {
    const [showModal, setShowModal] = useState(false);
    const portal = usePortal({
        id: 'portal-root',
        children: <ModalContent onClose={() => setShowModal(false)} />
    })

    return (
        <div className='relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden' >
            <button
                className=' bg-black text-white p-2 border rounded-md'
                onClick={() => setShowModal(true)}> Modal Using React Portal</button>
            {
                showModal &&
                portal
            }
        </div>
    );
};

export default HookPortal;  