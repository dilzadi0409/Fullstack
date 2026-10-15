import React from 'react'
import Card, { CourseCard } from '../Components/Card'

const Home = () => {
    return (
        <>

            <Card Title={"Mobile"} Price={200000} />
            <Card Title={"Laptop"} Price={500000} />
            <Card Title={"Mac"} Price={800000} />

            <CourseCard Title={"HTML"} Description={" Use CSS to change their layout."} />
            <CourseCard />

        </>
    )
}


export default Home
