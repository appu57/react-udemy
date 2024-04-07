import React from "react";
import "../main/main.css"

const title =[
    {titleName:"Angular Course" ,author:"angular",duration:33,price:500,discount:false,available:false},
    {titleName:"React Course" ,author:"React",duration:33,price:500,discount:true,available:true},
    {titleName:"Node JS Course" ,author:"Node JS",duration:33,price:500,discount:true,available:true},
    {titleName:"Express Js Course" ,author:"Express JS",duration:33,price:500,discount:false,available:true}
]

const verifyAvailableCourses = function(){ //if called within class then it may show error because in javascript "this" in normal function refers to local scope which in below code is button . Use arrow function because "this" refers to window scope
     title.coursesAvailable++; //within class while changing the any value in the component' state don't modify directly like the commented as react will not identify , so use this.setState to modify state value
};

const renderTableDataUsingMethod=function(available){
    //we can also use method to show the data instead of using map function
    if(available)
    {
        return <div className="add-to-cart">Add to Cart</div>
    }
    else{
        return <div className="notify">Notify Me</div>;
    }
};

const checkData=(data,index)=>{
    console.log(data);
}

const main = () =>{
    
    return (
     <div className="main">
         <h5 className="title">One Land to sell and purchase the courses</h5>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>duration</td>
                        <td>Price</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {title.map((data,index)=>{ //instead of ngFor in angular we use map function and return the format
                        return(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{data.titleName}</td>
                            <td>{data.author}</td>
                            <td>{data.duration}</td>
                            <td>{data.price}</td>
                            <td onClick={()=>checkData(data,index)}>{renderTableDataUsingMethod(data.available)}</td> 
            {/* on click we have to send details to the function so we can use arrow function within the onClick */}
                        </tr>
                        )
                    })}
                </tbody> 
            </table>
        </div>
         {/* <button onClick={verifyAvailableCourses}>Click</button> */}
     </div>
    );
}




export default main;