const Card = ({image, title}) => {
  return (
    <div className='w-86 border-2 border-pink-300 rounded-xl'>
        <img src={image} className='border-0 rounded-t-xl h-86'></img>
        <div className='flex flex-row items-center justify-between px-2 py-2'>
            <p className='flex align-middle font-semibold text-md text-gray-500'>{title}</p>
            <button className='px-4 py-2 bg-pink-400 text-white font-semibold rounded-lg border-2 border-gray-300'>Buy Now</button>
        </div>
    </div>
  )
}

export default Card