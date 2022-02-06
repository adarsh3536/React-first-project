import react, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./NewExpenseItem.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function NewExpenseItem(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList expenses={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
}

export default NewExpenseItem;
