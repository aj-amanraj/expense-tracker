import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createExpense } from '../api/expense';
import { useExpense } from '../hooks/useExpense';

const AddExpense = () => {
  const { onReload } = useExpense();
  const [open, setOpen] = useState(false);

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAmount('');
    setCategory('');
    setDescription('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createExpense(amount,category,description)
    onReload();
    handleClose();
    }

  return (
    <>
    <div className="p-3 h-full flex overflow-hidden relative flex-col justify-between gap-3 bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 shadow-xl rounded-md">
        <div >
          <p className='text-white text-2xl mt-2 ml-2 font-mono'>Where you spend your money</p>
        </div>

        <button onClick={handleOpen}
          className='bg-white w-fit m-3 px-3 py-1 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100'>
          <span className='text-md'>Add New Expense</span>
        </button>

        <div className='absolute h-28 w-28 md:h-40 md:w-40 -right-5 -bottom-2 rotate-6 rounded-md shadow-xl overflow-hidden'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZhCTfD86miMPmDQPAaZ4o5FeA7_2-ORAXw&s' alt='Expense' className='h-full w-full absolute object-cover inset-0' />
        </div>
    </div>

    <Dialog 
        open={open} 
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle className="pt-6 px-6 pb-2">
          <h2 className="text-2xl font-bold text-gray-800">Add New Expense</h2>
          <p className="text-sm text-gray-500 font-normal mt-1">Enter the details of your transaction below.</p>
        </DialogTitle>

        <DialogContent className="px-6 pb-6">
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-3'>
            <TextField onChange={(e) => setAmount(e.target.value)}
              id="amount" label="Amount" type='number' value={amount} variant="outlined"  placeholder='₹ 0.00' fullWidth required
            />
              <FormControl fullWidth required>
              <InputLabel id="category" >Category</InputLabel>
              <Select 
                  labelId="category-select-label"
                  id="category-select"
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
              >
                  <MenuItem value="Food">Food</MenuItem>
                  <MenuItem value="Rent">Rent</MenuItem>
                  <MenuItem value="Shopping">Shopping</MenuItem>
                  <MenuItem value="Travel">Travel</MenuItem>
                  <MenuItem value="Utilities">Utilities</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
              </Select>
              </FormControl>
          <TextField onChange={(e) => setDescription(e.target.value)}
              id="desc" value={description} label="Description" variant="outlined" multiline rows={3} 
              placeholder="What did you spend this money on?" fullWidth  required
          />
          <div className="flex gap-3 justify-end mt-2">
              <button 
                type="button" 
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer font-mono"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className='bg-purple-600 hover:bg-purple-700 text-white font-mono py-2 px-5 rounded-lg cursor-pointer shadow-sm'
              >
                Save
              </button>
            </div>
          </form>
        </DialogContent>

      </Dialog>
    </>
  )
}

export default AddExpense