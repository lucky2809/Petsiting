
import Footer from '../Footer'
import Navbar from '../Navbar'
import Adoptive from './Adoptive'
import Blog from './Blog'
import Header from './Header'
import Tips from './Tips'

function Home() {



  return (
    <div className=''>
        <Navbar></Navbar>
    <Header></Header>
    <Tips></Tips>
    <Adoptive></Adoptive>
    <Blog></Blog>
    <Footer></Footer>

    </div>
  )
}

export default Home