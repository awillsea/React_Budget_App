import './ExpenseConditional.css';
import ExpenseItem from './ExpenseItem';

const ExpenseConditional = props => {

    if(props.item.length === 0){
      return <h2 className='expenses-cond__fallback'>Found No expenses</h2>
    };

    return (
     <ul className='expenses-cond'>
        {props.item.map((expense) => (
        <ExpenseItem
        key = {expense.id}
        // Always add a Key when mapping out an array of items in react
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
    )
}

export default ExpenseConditional;