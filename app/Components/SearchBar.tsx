import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react' // new icon
import React from 'react'

export const SearchBar = () => {
  return (
    <div
      className="flex items-center w-full max-w-md p-2 rounded-full shadow-sm 
                 bg-gray-700 border border-gray-600 
                 focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-300 
                 hover:bg-gray-600 transition-all"
    >
      <Input
        type="text"
        placeholder="Search"
        className="flex-1 border-none focus:ring-0 
                   text-gray-100 placeholder-red-300 
                   bg-transparent font-medium tracking-wide"
      />
      <Search
        className="w-5 h-5 text-gray-200 mr-2 cursor-pointer hover:text-pink-600 transition-colors duration-150"
        strokeWidth={2.2}
      />
    </div>
  )
}