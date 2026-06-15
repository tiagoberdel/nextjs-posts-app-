'use client'

import { useState, useEffect } from 'react'
import useSWR from 'swr'
import PostCard, { Post } from '@/components/PostCard'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function PostsPage() {
    const [inputValue, setInputValue] = useState('')
    const [debouncedUserId, setDebouncedUserId] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedUserId(inputValue)
        }, 500)
        
        return () => clearTimeout(timer)
    }, [inputValue])

    const url = debouncedUserId
        ? `https://jsonplaceholder.typicode.com/posts?userId=${debouncedUserId}`
        : 'https://jsonplaceholder.typicode.com/posts'

    const { data, error, isLoading } = useSWR<Post[]>(url, fetcher)

    if (isLoading) return <p>Loading... </p>
    if (error) return <p>Something went wrong... </p>
    if (!data) return null

    return (
        <div className="w-full mx-auto py-8 px-4">
            <div className="max-w-full mx-auto py-8 px-4 flex items-center gap-4">
                <input 
                    type="text" 
                    placeholder='Filter by User ID: ' 
                    className='w-full bg-slate-800 rounded px-4 py-1 text-white'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            <div className="max-w-6xl mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {data.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}