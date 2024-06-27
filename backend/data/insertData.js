const mongoose = require('mongoose');
const User = require('../models/User');
const Budget = require('../models/Budget');
const Expense = require('../models/Expense');
const Goal = require('../models/Goal');
const Blog = require('../models/Blog');
require('dotenv').config({ path: '../.env' });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

// Dummy data creation function
async function createDummyData() {
  try {
    // Create dummy users
    const user1 = await User.create({
      username: 'user1',
      email: 'user1@example.com',
      password: 'password1',
    });
    const user2 = await User.create({
      username: 'user2',
      email: 'user2@example.com',
      password: 'password2',
    });

    // Create dummy budgets
    const budget1 = await Budget.create({
      userId: user1._id,
      title: 'Monthly Budget',
      totalIncome: 3000,
      totalExpenses: 2500,
    });
    const budget2 = await Budget.create({
      userId: user2._id,
      title: 'Student Budget',
      totalIncome: 2000,
      totalExpenses: 1800,
    });

    // Create dummy expenses
    await Expense.create({
      userId: user1._id,
      budgetId: budget1._id,
      category: 'Food',
      amount: 300,
      description: 'Groceries',
    });
    await Expense.create({
      userId: user1._id,
      budgetId: budget1._id,
      category: 'Transportation',
      amount: 200,
      description: 'Gasoline',
    });
    await Expense.create({
      userId: user2._id,
      budgetId: budget2._id,
      category: 'Books',
      amount: 100,
      description: 'Textbooks',
    });

    // Create dummy goals
    await Goal.create({
      userId: user1._id,
      title: 'Emergency Fund',
      amount: 5000,
      targetDate: new Date('2024-12-31'),
    });
    await Goal.create({
      userId: user2._id,
      title: 'Vacation Savings',
      amount: 1500,
      targetDate: new Date('2024-08-31'),
    });

    // Create dummy blogs
    await Blog.create({
      userId: user1._id,
      title: 'Top 5 Budgeting Tips for College Students',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    });
    await Blog.create({
      userId: user2._id,
      title: 'How to Save Money on Textbooks',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    });

    console.log('Dummy data successfully added!');
  } catch (error) {
    console.error('Error adding dummy data:', error);
  } finally {
    await mongoose.connection.close();
  }
}

createDummyData();
