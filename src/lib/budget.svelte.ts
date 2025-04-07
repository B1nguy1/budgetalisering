import type { Expense } from "./types.js";
import expensesData from "$lib/data/expenses.json";

export class Budget {
   
    expenses = $state<Expense[]>(expensesData.expenses);

    getExpenses() {
        return this.expenses;
    }

}