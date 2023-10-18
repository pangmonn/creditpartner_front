import React, { useCallback } from 'react';

const DeleteButton = ({ onDelete, subjectClass }) => {
    const handleDeleteClick = useCallback(() => {
        onDelete(subjectClass);
    }, [onDelete, subjectClass]);

    return (
        <button
            onClick={handleDeleteClick}
            className="delete_button"
        >
            삭제
        </button>
    );
};

export default DeleteButton;