import Navbar from './components/Navbar';
import './App.css';
import Homephoto from './components/Images/homephoto';
import Articles from './components/Articles';
import Heading from './components/Heading';
import SearchDiv from './components/SearchDiv';
import RecentPosts from './components/RecentPosts';
import RecentComment from './components/RecentComments';
import Archives from './components/Archives';
import Categories from './components/Categories';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Homephoto />
      <Heading />
      <Navbar />
      <section  className='container-fluid row' >
        <div className='col-md-8'>
      <Articles/>
      </div>
      <div className='col-md-4 '>
       <SearchDiv/>
       <RecentPosts/>
       <RecentComment />
       <Archives />
       <Categories />
      </div>
      </section>
      <Footer />

    </>
  );
}

export default App;
