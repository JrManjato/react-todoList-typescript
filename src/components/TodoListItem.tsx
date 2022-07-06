import { ITask } from "./ITask";

interface Props {
    elt: ITask,
    scale: string,
    color: string,
    getValues: (e: any) => string[]
}

export const TodoListItems: React.FC<Props> = ({ elt, scale, color, getValues }) => {
    if (scale === 'done') {
        color = '#48ff00';
    } else if (scale === 'doing') {
        color = '##ffbb00';
    } else if (scale === 'todo') {
        color = '#0095FF';
    }
    return <div className="card-body mx-4 my-4" style={{ backgroundColor: color }} onClick={getValues}>
        <>
            <h5 className="card-title">{elt.title}</h5>
            <p className="card-text">{elt.description}</p>
        </>

    </div>
}
