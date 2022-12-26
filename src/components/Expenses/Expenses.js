import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import "./ExpenseFilter";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
    
    const [filterYear, setFilterYear] = useState("2020");

    const filterHandler = filterdData => {
        setFilterYear(filterdData);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div className="expenses">
            <ExpenseFilter onFilter={filterHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            {filteredExpenses.length === 0 ? <p className="expenses-list__fallback">No Expense Found.</p> : 
                 filteredExpenses.map(expense => <ExpenseItem 
                        key={expense.id}
                        date={expense.date} 
                        title={expense.title} 
                        amount={expense.amount}/>)};
        </div>
    );
}

export default Expenses;