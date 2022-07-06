import React from "react";

interface props {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    scale: string;
    setScale: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Input: React.FC<props> = ({ title, setTitle, description, setDescription, scale, setScale, handleAdd }) => {

    return (
        <div className="container form-container col-md-3 py-3 my-5">
            <h6>Task</h6>
            <form
                className="form col-md-10"
                onSubmit={(e) => {
                    handleAdd(e);
                }}
            >
                <ul>
                    <li data-text=".">
                        <input
                            type="text"
                            placeholder="Enter title"
                            defaultValue={title}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input__box"
                        />
                    </li>
                    <li data-text=".">
                        <input
                            type="text"
                            placeholder="Enter description"
                            defaultValue={description}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="input__box"
                        /></li>

                    <div className="selectAndButton">
                        <select name="task-evaluation" id="task-option" onChange={(e: React.FormEvent<HTMLSelectElement>) => setScale(e.currentTarget.value)}>
                            {scale}
                            <option value="todo">TO DO</option>
                            <option value="doing">DOING</option>
                            <option value="done">DONE</option>
                        </select>
                        <button type="submit" className="input_submit btn mx-3">
                            ADD
                        </button>
                    </div>
                </ul>
            </form>
        </div>
    );
};

export default Input;