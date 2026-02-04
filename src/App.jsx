// INPUT UR REACT CODE HERE
// Gunakan di App.jsx (Contoh mengganti Mock Data):
	
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

// ... di dalam komponen App ...
useEffect(() => {
  getProducts()
}, [])

async function getProducts() {
  const { data } = await supabase.from('products').select('*')
  setProducts(data)
}