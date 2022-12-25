import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import React,{useState} from "react";

function ExpenseItem(props){
    
    const [title, setTitle] = useState(props.title);
    
    const changeTitle = () => {
        setTitle(`Updated`);
    }

    return  (
        <div className="expense-item">
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={changeTitle}>Change title</button>
        </div>
    );
}

export default ExpenseItem;