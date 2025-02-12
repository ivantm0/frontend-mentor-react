import Article from "./Article"
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

const ArticlesContainer = () => {
  return (
    <section className="mt-6 lg:flex">
        <Article 
            img={img1}
            number='01'
            title='Reviving Retro PCs'
            text='What happens when old PCs are given modern upgrades'
        />
        <Article 
            img={img2}
            number='02'
            title='Reviving Retro PCs'
            text='What happens when old PCs are given modern upgrades'
        />
        <Article 
            img={img3}
            number='03'
            title='Reviving Retro PCs'
            text='What happens when old PCs are given modern upgrades'
        />
    </section>
  )
}

export default ArticlesContainer