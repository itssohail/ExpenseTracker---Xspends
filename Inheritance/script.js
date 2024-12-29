document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('expenseModal');
    const addExpenseBtn = document.querySelector('.add-expense-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const expenseForm = document.getElementById('expenseForm');

    // Open modal
    addExpenseBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close modal
    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;

        // Here you would typically send this data to your Java backend
        console.log({ title, amount, category, description });

        // Clear form and close modal
        expenseForm.reset();
        modal.style.display = 'none';
    });
}); 