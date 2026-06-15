'use client'

import useSWR from 'swr'
import PostCard, { Post } from '@/components/PostCard'

const fetcher = (url: string) => fetch(url).then(res => res.json())
const url = 'https://jsonplaceholder.typicode.com/posts'

export default function PostsPage() {
    const { data, error, isLoading } = useSWR<Post[]>(url, fetcher)
    if (isLoading) return <p>Loading... </p>
    if (error) return <p>Something went wrong... </p>
    if (!data) return null
    return (
    <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((post) => (
            <PostCard key={post.id} post={post} />
            ))}
        </div>
    </div>
)
}