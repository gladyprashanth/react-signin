import React from 'react'
import './Page2.css'
import ips7 from '../../Assets/ips7.webp'
import ips8 from '../../Assets/ips8.webp'
import ips9 from '../../Assets/ips9.webp'
import ips10 from '../../Assets/ips10.webp'
import ips14 from '../../Assets/ips14.webp'
import ips15 from '../../Assets/ips15.webp'
import ips16 from '../../Assets/ips16.webp'
import ips17 from '../../Assets/ips17.webp'
import ips18 from '../../Assets/ips18.webp'
import ips19 from '../../Assets/ips19.webp'


const blogData = [
  {
    id: 1,
    imageSrc: ips15,
    title: ' Smart Savings: Calculating the Cost-Benefit of IT Equipment Rentals ',
    content: 'In today’s dynamic business landscape, cost optimization is a key factor for sustainable growth. For companies seeking to bolster their operational efficiency without compromising on performance, […]',
    likes: 0,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
  {
    id: 1,
    imageSrc: ips16,
    title: 'Affordable Solutions: Renting Laptops and Desktops for Remote Employees',
    content: ' In the dynamic landscape of the modern workplace, the concept of remote work has rapidly gained momentum. Whether spurred by global events or driven by the […] ',
    likes: 0,
    date: 'November 18, 2023',
    read:'Read More',
    
  },
 
  {
    id: 1,
    imageSrc: ips17,
    title: ' The Rise of Remote Work: How IT Equipment Rentals are Enabling Seamless Work from Anywhere',
    content: ' The past few years have seen a significant shift in the way we work. The rise of remote work has transformed the traditional office landscape, making […] ',
    likes: 0,
    date: 'November 10, 2023',
    read:'Read More',
    
  },
 
  {
    id: 1,
    imageSrc: ips7,
    title: 'Laptop Rentals vs. Purchasing: Making Informed Decisions for Your Business',
    content:' In the ever-evolving landscape of business technology, the decision to rent or purchase laptops is a crucial one. Laptops play a pivotal role in modern business […] ',
    likes: 0,
    date: 'October 10, 2023',
    read:'Read More',
    
  },
 
  {
    id: 1,
    imageSrc: ips19,
    title: ' Exploring Different Laptop Models: A Guide to Choosing the Right Rental Option ',
    content: ' When it comes to meeting your business’s computing needs, there’s no one-size-fits-all solution. The right laptop model can significantly impact productivity, efficiency, and overall user experience. […]',
    likes: 0,
    date: 'November 25, 2023',
    read:'Read More',
    
  },
 
  {
    id: 1,
    imageSrc: ips14,
    title:' Flexibility and Cost Savings: Exploring the Advantages of Laptop Rentals for Small Businesses',
    content: ' In today’s fast-paced business landscape, small businesses often find themselves needing to adapt quickly to changing demands while keeping their expenses in check. One solution that […] ',
    likes: 3,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
 
  {
    id: 1,
    imageSrc: ips10,
    title: ' Temporary Expansion: Using Laptop Rentals to Accommodate Seasonal Business Needs',
    content: 'Seasonal fluctuations in business demand are a common challenge faced by many industries. Whether it’s during the holiday shopping season, tax season, or other peak periods, […] ',
    likes: 0,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
 
  {
    id: 1,
    imageSrc: ips8,
    title: ' Project-Based Rentals: Optimizing Laptop Usage for Short-Term Endeavors',
    content: ' In today’s dynamic business landscape, short-term projects have become a common practice for companies looking to innovate, diversify, or adapt quickly. These projects require dedicated resources, […] ',
    likes: 0,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
 
  {
    id: 1,
    imageSrc: ips9,
    title: 'Testing and Development: Renting Laptops for Software and App Development',
    content: ' In the rapidly evolving landscape of software and app development, having the right tools at your disposal can make a significant difference in the efficiency and […] ',
    likes: 0,
    date: 'November 16, 2023',
    read:'Read More',
    
  },
 
];

const Page2 = () => {
  return (
    <div>
             
    <div>
      <div className='container-fluid design'>
      <div className='container '>
        <div className='row'>
          <div className='col-sm-12 text-center mt-4 '>
            <h1 className='blog ' >Blog</h1>
            <a className='decration text-secondary' href='/'>Home </a> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right mx-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></span><span className='text-secondary'> Blog</span>
          </div>
        </div>
      </div>
      </div>

      {/* ..............................................................finish Title................................................................. */}

<div className='container-fluid design'>
<div className='container '>
<div className='row '>
      {blogData.map((blog) => (
        <div key={blog.id} className='col-sm-4 mt-5 '>
          <div className="card search " style={{ width: "100" }}>
           <a href='' ><img src={blog.imageSrc} className="card-img-top p-2" alt="..." /> </a>
            <div className="boot_icon ">
                                    <div className="round fs-4  ">
                                   <a href=''> <svg className='  text-black ' xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/> </svg> </a>
                                </div>
                                    <div className=" round fs-4">
                                    <a href=''>  <svg  className='text-black' xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>
             </div>
             </div>
            
            <p className='text-start detail mt-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg> Rental plazza on <span className='mx-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> {blog.date}</span></p>
          
            <div className="card-body">
              <h5 className="card-title text-start fs-4 fix">{blog.title}</h5>
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
                      </svg>  {blog.read}</a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>
</div>

{/* .............................................................finish-body.................................................................. */}


<div className='containe design'>
  <div className='row  '>
    <div className='col-sm-3 mt-5'></div>
    <div className='col-sm-9 mt-5 '>
    <div className="pagination">
      <a className='text-primary  ' href="/Page1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg> Prev page</a>
      <a className='first fs-5 text-secondary' href="/Page1" onMouseOver={(e) => e.target.style.backgroundColor='#0B1A48 '} onMouseOut={(e) => e.target.style.backgroundColor='transparent '}>
          1
        </a>
      <a className='first fs-5 text-secondary' href="/Page2" onMouseOver={(e) => e.target.style.backgroundColor='#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor='transparent'}>
          2
        </a>
      <a className='first fs-5 text-secondary' href="/Page3" onMouseOver={(e) => e.target.style.backgroundColor='#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor='transparent'}>
          3
        </a>
      <a className='first fs-5 text-secondary' href="/Page4" onMouseOver={(e) => e.target.style.backgroundColor='#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor='transparent'}>
          4
        </a>
      <a className='first fs-5 text-secondary' href="Page5" onMouseOver={(e) => e.target.style.backgroundColor='#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor='transparent'}>
          5
        </a>
      <a className='first fs-5 text-secondary' href="#" onMouseOver={(e) => e.target.style.backgroundColor='#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor='transparent'}>
          6
        </a>
      <a className='first fs-5 text-secondary' href="#" onMouseOver={(e) => e.target.style.backgroundColor='#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor='transparent'}>
          7
        </a>
      <a className='first fs-5 text-secondary' href="#" onMouseOver={(e) => e.target.style.backgroundColor='#0B1A48'} onMouseOut={(e) => e.target.style.backgroundColor='transparent'}>
          8
        </a>
      
      <a className=' text-primary' href="/Page3"> Next Page<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></a>
    </div>
    </div>
  </div>
</div>
    </div>

    


    </div>
  )
}

export default Page2