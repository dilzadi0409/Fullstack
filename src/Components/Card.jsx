import React from 'react'

const Card = (props) => {
    return (
        <>
            <h1>Title:{props.Title}</h1>
            <h2>Price:{props.Price}</h2>
        </>

    )
}

export const CourseCard = ({ Title = "NO Title", Description = "NO Description" }) => {
    return (
        <>
            <h1>Title:{Title}</h1>
            <h2>Description:{Description}</h2>
        </>
    )
}






export default Card
