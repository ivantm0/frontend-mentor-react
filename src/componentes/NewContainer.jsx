import NewArticle from "./NewArticle"

const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
        <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
        <NewArticle
            tittle='Hydrogen VS Electric Cars'
            text='Will hydrogen-fueles cars ever catch up to EVs?'
        />
        <NewArticle
            tittle='Hydrogen VS Electric Cars'
            text='Will hydrogen-fueles cars ever catch up to EVs?'
        />
        <NewArticle
            tittle='Hydrogen VS Electric Cars'
            text='Will hydrogen-fueles cars ever catch up to EVs?'
        />
    </aside>
  )
}

export default NewContainer