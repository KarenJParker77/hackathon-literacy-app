import React from 'react';

const Interface = ({screenView}) => {
    const bookData = [
        {name:"learning to read 1", img: "/img/book-one.jpg"},
        {name:"learning to read 2", img: "/img/book-two.jpg"},
        {name:"learning to read 3", img: "/img/book-3.jpg"},
        {name:"learning to read 4", img: "/img/book-4.jpg"},
        {name:"learning to read 5", img: "/img/book-5.jpg"},
        {name:"learning to read 6", img: "/img/book-6.png"},
    ]
    return ( 
        <>
            <div className="container card mt-5">
                <div className="row"> 
                    <div className="col-12 mt-4">
                        <h1>Ready to read</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in porttitor mi, nec sagittis neque. Pellentesque mollis tempor convallis. Nunc consectetur viverra vestibulum.</div>
                    </div>
                </div>
            <div className="row mt-3">
            
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="bookholder row">
                          <div className="col-md-3 mb-4 " >
                              <div className="book" onClick={() =>(screenView(1))} >
                                 <img src="/img/book-proj-1.jpg"/>
                              </div>
                                <div className="mt-3 text-center bold">Word match</div>
                            </div>
                          <div className="col-md-3 mb-4 " >
                                <div className="book" onClick={() =>(screenView(2))}>
                                    <img src="/img/book-proj-2.jpg"/>
                                </div>
                                <div className="mt-3 text-center bold">Learn how to read sentences</div>
                            </div>
                         {
                            bookData.map((book,index) => {
                                return(
                                    <div className="col-md-3 mb-4 " key={index}>
                                      <div className="book">
                                         <img src={book.img} />
                                    </div>
                                    <div className="mt-3 text-center bold">{book.name}</div>
                                    </div>
                                )
                            })
                         }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
     );
}
 
export default Interface;