import React from 'react';

const DeleteButton = ({ onDelete, subjectClass }) => {
    const handleDeleteClick = () => {
        onDelete(subjectClass);
    };

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
