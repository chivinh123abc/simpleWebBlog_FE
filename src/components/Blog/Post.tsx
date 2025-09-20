type PostProps = {
  id: number
  title: string
  content: string
}

const Post = ({ id, title, content }: PostProps) => (
  <div className='w-120 my-2 h-1/3 rounded-lg flex flex-col p-2 bg-blue-100'>
    <header className='flex h-8 w-full items-center gap-2'>
      <div className="userAva w-8 h-8 rounded-full bg-green-200"></div>
      <div className="userName flex items-center">LuongChiVinh:{id}</div>
    </header>

    <hr className='my-2' />

    <div className="data h-45 w-full bg-yellow-100 rounded-lg flex flex-col items-center">
      <div className="h-5 m-1 mt-2 px-2 text-xs w-[97%] bg-red-100  rounded-lg flex items-center">
        {title}
      </div>

      <div className='h-35 px-2 pt-2 text-xs w-[97%] bg-red-100 rounded-lg flex items-start'>
        {content}
      </div>
    </div>

  </div>
)
export default Post
