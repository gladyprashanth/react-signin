import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import desktop_pc_one from "../../Assets/desktop_pc_one.webp"


const Zoomproduct = () => {
  return (
    <div>
       <div className='container'>
                <div className="row">
                    <div className="col-6 zoom_desktop_one text-center">
                        <img src={desktop_pc_one} />
                    </div>
                    <div className="col-6 font_col_vj">
                        <br />
                        <h2>Desktop on Rent i3 4th Gen -8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard and Mouse</h2> <br />
                        <p>Elevate your computing experience with our Desktop on Rent – i3 4th Gen – 8GB RAM – 320GB HDD – 18.5 Inch Screen, complete with a Keyboard and Mouse. This versatile desktop solution offers a perfect blend of performance and functionality, making it an ideal choice for various tasks, from everyday office work to multimedia entertainment. <br /> <br />

                            The i3 4th Gen processor ensures a smooth and responsive computing experience, handling your daily tasks with ease. Whether you’re browsing the web, working on documents, or enjoying digital content, this desktop offers dependable performance.</p> <br /> <br />
                        <button className='rent_desk_btn'> <FaCheckCircle /> &nbsp; <b>RENT NOW</b></button>
                    </div>
                </div> <br /> <br />
            </div>
    </div>
  )
}

export default Zoomproduct
