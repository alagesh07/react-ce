import React from 'react'

// export default function List()
// {
//     const animals=["dog","cat","lion","tiger"]
//     const result=animals.map((ani,index)=><li key={index}>{index} {ani}</li>)
//     return(
//         <div>
//             <ul>
//                 {result}
//             </ul>
//         </div>
//     )
// }
// function DisplayName(props)
// {
//     return(
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     )
// }

// export default function List()
// {
//     const studentName=["Panvith","Sumanth","Ashwin","Ajay"]
//     const stName=studentName.map((stu)=> <DisplayName name={stu}></DisplayName>)
//     return (
//         <div>{stName}</div>
//     )
// }

export default function List()
{
    const college=[{id:1,stuName:"abc",age:19},
        {id:2,stuName:"def",age:19},
        {id:3,stuName:"ghi",age:19}]
        const display=college.map((col)=><li key={col.id}>{col.id} {col.stuName} {col.age}</li>)
    return(
        <div>
            {display}
        </div>
    )
}