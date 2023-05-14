import './HomeInfoStyles.css'
import HomeData from "./HomeData";
import HomeInfoImg1 from "../../assets/homeInfoImg1.jpg";
import HomeInfoImg2 from "../../assets/homeInfoImg2.jpg";
import HomeInfoImg3 from "../../assets/todo1.jpg";

const HomeInfo = () => {

    return (
        <div className={'home-info'}>
            <h1>Always Choose Correct Path</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nam sit. Accusantium autem debitis
                doloremque doloribus esse impedit ipsa ipsum non rerum voluptatem. Alias dicta eius eligendi error et
                eum expedita iusto neque nihil odit quidem, sequi.</p>

            <HomeData
                className={'first-info'}
                heading={'Learn to invest'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aspernatur assumenda consequatur cumque eum fugiat illum ipsa ipsam libero, maiores mollitia obcaecati officiis perspiciatis praesentium, provident sed totam vitae! Placeat, ullam, voluptatibus! Aperiam culpa eaque eos est eveniet expedita laborum non obcaecati odio quae recusandae tenetur, ullam velit veniam'}
                img1={HomeInfoImg1}
                img2={HomeInfoImg2}
            />

            <HomeData
                className={'first-info-reverse'}
                heading={'Stay Up-to-Date with Market'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aspernatur assumenda consequatur cumque eum fugiat illum ipsa ipsam libero, maiores mollitia obcaecati officiis perspiciatis praesentium, provident sed totam vitae! Placeat, ullam, voluptatibus! Aperiam culpa eaque eos est eveniet expedita laborum non obcaecati odio quae recusandae tenetur, ullam velit veniam'}
                img1={HomeInfoImg3}
                img2={HomeInfoImg2}
            />
        </div>
    )
}

export default HomeInfo