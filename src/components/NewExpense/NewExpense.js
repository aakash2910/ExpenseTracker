import React, {useState} from "react";
import "./NewExpense.css";

const NewExpense = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    
    const amountChangeHandler = (event) =>
    {
        setAmount(event.target.value);
    };
    
    const dateChangeHandler = event => {
        setDate(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const newExpenseData = {
            title: title,
            amount: +amount,
            date : new Date(date)
        };
        
        props.onSaveExpenseData({...newExpenseData,id:Math.random().toString()});
        setTitle("");
        setAmount("");
        setDate("");
    };   
    
    const [isVisible, setIsVisible] = useState(false);

    const startEditingHandler = () => {
      setIsVisible(true);
    };

    const stopEditingHandler = () => {
      setIsVisible(false);
    };

    return (
      <div className="new-expense">
        {!isVisible ? (
          <button onClick={startEditingHandler}>Add New Expense</button>
        ) : (
          <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={titleChangeHandler}
                ></input>
              </div>
              <div className="new-expense__control">
                <label>Amount</label>
                <input
                  type="number"
                  min="1"
                  step="0.10"
                  value={amount}
                  onChange={amountChangeHandler}
                ></input>
              </div>
              <div className="new-expense__control">
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={dateChangeHandler}
                ></input>
              </div>
            </div>
            <div className="new-expense__actions">
              <button onClick={stopEditingHandler}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
          </form>
        )}
        ;
      </div>
    );
};

export default NewExpense;