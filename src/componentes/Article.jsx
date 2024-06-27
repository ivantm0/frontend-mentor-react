import imgArticle from '../assets/images/image-retro-pcs.jpg'

const Article = (props) => {
  return (
    <article className='flex h-[162px]'>
        <div className='w-[100px] flex-none'>
            <img src={props.img} alt="" />
        </div>
        <div className='pl-6'>
            <p className='text-GrayishBlue text-3xl mb-[18px] font-bold'>{props.number}</p>
            <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>{props.title}</h2>
            <p className='text-DarkGrayishBlue'>{props.text}</p>
        </div>
    </article>
  )
}

export default Article