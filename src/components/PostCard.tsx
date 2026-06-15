export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export default function PostCard({ post }: {post: Post}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">    
            <h2 className="strong font-bold text-xl mb-2">{post.title}</h2>
            <p className="text-gray-700 text-base">{post.body}</p>
        </div>
    )
}