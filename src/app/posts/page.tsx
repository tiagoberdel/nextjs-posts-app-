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
    <div>
        {data.map((post) => (
        <PostCard key={post.id} post={post} />
        ))}
    </div>
)
}