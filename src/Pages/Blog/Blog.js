import React, { useState } from 'react';
import './Blog.css';
import ips from '../../Assets/ips.webp';
import ips2 from '../../Assets/ips2.webp';
import ips3 from '../../Assets/ips3.webp';
import ips4 from '../../Assets/ips4.webp';
import ips5 from '../../Assets/ips5.webp';
import ips6 from '../../Assets/ips6.webp';
import ips7 from '../../Assets/ips7.webp';
import ips8 from '../../Assets/ips8.webp';
import ips9 from '../../Assets/ips9.webp';
import ips10 from '../../Assets/ips10.webp'
import ips11 from '../../Assets/ips11.webp'
import ips12 from '../../Assets/ips12.webp'
import ips13 from '../../Assets/ips13.webp'
import ips14 from '../../Assets/ips14.webp'

const blogData = [
  {
    id: 1,
    imageSrc: ips,
    title: 'Tips For The Best Laptop Rentals Near Me',
    content: 'Introduction Welcome to Rental Plaza, your ultimate destination for a seamless laptop rental experience right at your doorstep. In an era dominated by flexibility, affordability, and […]',
    likes: 0,
    date: 'November 16, 2023',
    read: 'Read More',
  },
  {
    id: 2,
    imageSrc: ips2,
    title: 'MacBook Pro M3 on Rent: Unleash Your Creativity',
    content: 'Welcome to the future of creative workstations, where performance meets portability. In an era dominated by ever-evolving technology, the MacBook Pro M3 stands as a true […]',
    likes: 0,
    date: 'November 18, 2023',
    read: 'Read More',
  },
  {
    id:3 ,
    imageSrc: ips3,
    title: 'How to Rent a Server in Gurugram',
    content: 'Gurugram, also known as Gurgaon, has evolved into a thriving corporate hub in India. With a bustling economy and a dynamic business environment, the demand for […]',
    likes: 0,
    date: 'November 10, 2023',
    read: 'Read More',

  },

  {
    id: 4,
    imageSrc: ips4,
    title: 'How to Rent Laptop in Gurugram',
    content: 'In the bustling city of Gurugram, where innovation and opportunities abound, having the right tools at your disposal is crucial for personal and professional success. Laptops […]',
    likes: 0,
    date: 'October 10, 2023',
    read: 'Read More',

  },

  {
    id: 5,
    imageSrc: ips5,
    title: 'How to Rent a Desktop PC in Gurugram with Rental Plaza',
    content: 'Welcome to the vibrant city of Gurugram, a place where businesses and individuals are always on the go. In this fast-paced environment, having access to high-performance […]',
    likes: 0,
    date: 'November 25, 2023',
    read: 'Read More',

  },

  {
    id: 6,
    imageSrc: ips6,
    title: 'How to Rent a MacBook in Gurugram with Rental Plaza',
    content: 'Gurugram, often referred to as the Millennium City, is India’s thriving hub for technology and innovation. In this dynamic and competitive environment, businesses and individuals require […]',
    likes: 3,
    date: 'November 16, 2023',
    read: 'Read More',

  },

  {
    id: 7,
    imageSrc: ips7,
    title: 'Maximizing Efficiency: How Renting Desktops Benefits Mohali IT Companies',
    content: 'In the dynamic landscape of information technology, efficiency is the linchpin that drives productivity and competitiveness. For IT companies in Mohali, the choice between purchasing and […]',
    likes: 0,
    date: 'November 16, 2023',
    read: 'Read More',

  },

  {
    id: 8,
    imageSrc: ips8,
    title: 'IT Management Simplified: The Benefits of Renting Laptops for Chandigarh Businesses',
    content: 'In today’s fast-paced business world, staying competitive often hinges on having access to the latest technology. For businesses in Chandigarh, laptops are the lifeblood of daily […]',
    likes: 0,
    date: 'November 16, 2023',
    read: 'Read More',

  },

  {
    id: 9,
    imageSrc: ips9,
    title: 'Affordable Access to Cutting-Edge Technology: MacBook M1 Pro Rentals in Mohali',
    content: 'In today’s fast-paced digital world, staying ahead of the curve often requires having access to cutting-edge technology. For professionals, students, and creatives in Mohali, the MacBook […]',
    likes: 0,
    date: 'November 16, 2023',
    read: 'Read More',

  },
  {
    id: 10,
    imageSrc: ips10,
    title: 'The Role of Rental Laptops in Election Data Management',
    content: 'In the dynamic world of politics, data is the linchpin that drives campaign strategies, ensures transparency, and ultimately shapes the outcome of elections. The state of […]',
    likes: 0,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
  {
    id: 11,
    imageSrc: ips11,
    title: 'Empowering Rajasthan Elections with Laptop Rentals: A Technological Revolution',
    content: 'The heartbeat of democracy in India, the state of Rajasthan, is gearing up for another pivotal election. As the political landscape evolves, so do the strategies […]',
    likes: 0,
    date: 'November 18, 2023',
    read:'Read More',
    
  },
  {
    id:1 ,
    imageSrc: ips12,
    title: ' How Rental Laptops Offer Flexibility in Dynamic Election Environments',
    content: 'In the fast-paced world of election campaigns, flexibility is not just an advantage; it’s a necessity. Campaigns are dynamic, with ever-changing needs and unexpected challenges. To […]',
    likes: 0,
    date: 'October 10, 2023',
    read:'Read More',
    
  },
  {
    id: 13,
    imageSrc: ips13,
    title: 'How to Rent a Desktop PC in Gurugram with Rental Plaza',
    content: 'Welcome to the vibrant city of Gurugram, a place where businesses and individuals are always on the go. In this fast-paced environment, having access to high-performance […]',
    likes: 0,
    date: 'November 25, 2023',
    read:'Read More',
    
  },
  {
    id: 14,
    imageSrc: ips14,
    title: 'Election Security and Rental Laptops: A Winning Combination ',
    content:  ' Elections are the cornerstone of any democracy, and ensuring their security and integrity is paramount. In an age where technology plays an increasingly significant role in […] ',
    likes: 3,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
  {
    id: 15,
    imageSrc: ips3,
    title: 'Rental Plaza’s Commitment to Democracy: Providing Bulk Computers and Laptops for Indian State Elections',
    content: 'GDemocracy thrives when every citizen’s voice is heard and every vote counts. In the world’s largest democracy, India, conducting elections is a colossal task, especially at […] ',
    likes: 0,
    date: 'November 10, 2023',
    read:'Read More',
    
  },
  {
    id: 16,
    imageSrc: ips7,
    title: ' 5 Benefits of Rental Laptops in Election Campaigns ',
    content: 'Election campaigns are the lifeblood of democracy. They require meticulous planning, flawless execution, and efficient management to convey a candidate’s message to the masses. In the […] ',
    likes: 0,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
  {
    id: 17,
    imageSrc: ips8,
    title: ' The Pivotal Role of Rental Laptops in Indian Elections ',
    content: 'In a country as vast and diverse as India, elections are monumental events that shape the nation’s future. The sheer scale of Indian elections, with millions […] ',
    likes: 0,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
  {
    id: 18,
    imageSrc: ips9,
    title: 'Business Benefits: Why Companies Choose MacBook Pro Rentals for Employees ',
    content: 'In today’s fast-paced business landscape, technology plays a pivotal role in determining a company’s success. As the demand for flexible and efficient solutions continues to rise, […] ',
    likes: 0,
    date: 'November 16, 2023',
    read:'Read More',
    
  },

  // ... (other blog items)
];

const itemsPerPage = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogData = blogData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='container-fluid design'>
        <div className='container '>
          <div className='row'>
            <div className='col-sm-12 text-center mt-4 '>
              <h1 className='blog'>Blog</h1>
              <a className='decration text-secondary' href='/'>Home </a> <span className=' text-secondary text-opacity-50'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right mx-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></span><span className='text-secondary'> Blog</span>
              {/* ... (your existing title code) ... */}
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid design'>
        <div className='container '>
          <div className='row '>
            {currentBlogData.map((blog) => (
              <div key={blog.id} className='col-sm-4 mt-5 '>
                {/* ... (your existing card code) ... */}
                <div className="card search " style={{ width: "100" }}>
           <a href='' ><img  src={blog.imageSrc} className="card-img-top img-fluid p-2 " alt="lap" /> </a>
            <div className="boot_icon ">
                                    <div className="round fs-4  ">
                                   <a href=''> <svg className='  text-black ' xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg> </a>
                                </div>
                                    <div className=" round fs-4">
                                    <a href='/SubBlog'>  <svg  className='text-black' xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>
             </div>
             </div>
            
            <p className='text-start detail mt-3 mx-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg> Rental plazza on <span className='mx-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> {blog.date}</span></p>
              <div className="card-body">
              <h5 className="card-title text-start fs-4 fix ">{blog.title}</h5>
              <p className="card-text text-start text-secondary">{blog.content}</p>
            </div>
            <div className="card-body">
              <div className='text-start d-flex justify-content-between'>
                <a href="#" className="card-link tips ">
                  <span className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  </span> {blog.likes}
                </a>
                <div className='vg_icon justify-content-between'>
                                        <a href='/SubBlog' className="card-link tips  ">
                                          <svg  className='text-end' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                      </svg>  {blog.read} </a>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* .......................................................finish-body................................................................................... */}


      <div className='containe design'>
        <div className='row  '>
          <div className='col-sm-3 mt-5'></div>
          <div className='col-sm-9 mt-5 '>
            <div className="pagination">
              <a className='text-primary' href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>Prev  page</a>
              <a className='first fs-5 text-secondary' href="/Page1" onMouseOver={(e) => e.target.style.backgroundColor = '#0B1A48 '} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent '}>
                1
              </a>
              <a className='first fs-5 text-secondary' href="/Page2" onMouseOver={(e) => e.target.style.backgroundColor = '#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                2
              </a>
              <a className='first fs-5 text-secondary' href="/Page3" onMouseOver={(e) => e.target.style.backgroundColor = '#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                3
              </a>
              <a className='first fs-5 text-secondary' href="/Page4" onMouseOver={(e) => e.target.style.backgroundColor = '#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                4
              </a>
              <a className='first fs-5 text-secondary' href="/Page5" onMouseOver={(e) => e.target.style.backgroundColor = '#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                5
              </a>
              <a className='first fs-5 text-secondary' href="#" onMouseOver={(e) => e.target.style.backgroundColor = '#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                6
              </a>
              <a className='first fs-5 text-secondary' href="#" onMouseOver={(e) => e.target.style.backgroundColor = '#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                7
              </a>
              <a className='first fs-5 text-secondary' href="#" onMouseOver={(e) => e.target.style.backgroundColor = '#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                8
              </a>

              <a className=' text-primary' href="/Page1">  Next Page<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg></a>
            </div>
          </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        <div className='container-fluid design '>
      <div className="container ">
        <div className="row ">
          <div className="col-sm-9 mt-5">
            <div className="pagination">
            <nav>
                <ul className="pagination d-flex gap-4">
                  {Array.from({ length: Math.ceil(blogData.length / itemsPerPage) }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => paginate(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;
