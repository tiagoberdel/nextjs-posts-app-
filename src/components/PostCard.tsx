export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export default function PostCard({ post }: {post: Post}) {
    return (
        <div className="font-mono p-4 mb-4 rounded-lg border border-gray-200 shadow-sm bg-slate-200 hover:bg-blue-200 transition-colors duration-200 flex flex-col justify-between ring-2 ring-transparent hover:ring-blue-400">
            <h2 className="text-black font-bold text-2xl uppercase mb-2 text-center underline">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.body}</p>
        </div>
    )
}