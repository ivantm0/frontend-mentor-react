const NewArticle = (props) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue py-7 lg:h-[160px] lg:pt-4">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]">{props.tittle}</h2>
        <p className="text-[15px]">{props.text}</p>
    </article>
  )
}

export default NewArticle