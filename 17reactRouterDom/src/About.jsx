import { useNavigate } from "react-router-dom";

function About(){
    const navigate= useNavigate();
    function goContact(){
        navigate("/contact")
    }
    return(
    <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora eius nam eum tempore a qui. Quibusdam esse placeat nihil animi earum! Tempora et nobis quidem culpa accusantium. Consequuntur, error?
    Perferendis esse in inventore totam quae. Libero officia maiores repudiandae sequi nobis veniam a cumque expedita sint quidem impedit facere saepe dolorum, eos fugiat ut cum voluptatem fuga commodi quas?
    Doloribus rerum et explicabo repudiandae praesentium iusto, soluta natus laborum ex accusamus hic ratione deserunt dolorem culpa debitis. Accusantium est fugit maxime quos dolore inventore magnam quidem expedita voluptas quis.
    Quis corrupti vitae provident earum eum facere eaque quam? Cum harum earum et, recusandae atque eaque dolorum nostrum laboriosam nemo, nam ratione quas aperiam libero ducimus numquam minima sit commodi?
    Beatae natus, accusantium voluptatum non nihil ullam iste blanditiis illo laborum, tempora assumenda dolore sit perferendis quos soluta nam reiciendis rem, praesentium mollitia accusamus aliquam consequuntur! Cumque eos placeat eaque!
    Porro magnam cum blanditiis illo. Nisi quod beatae, labore architecto tempora ab debitis, facilis reprehenderit accusamus ad voluptas repellat vitae praesentium quaerat et? Maiores repellendus perferendis in non, omnis voluptate?
    Delectus nulla nesciunt, maxime, autem ut similique veniam inventore architecto beatae vel, ipsum voluptatum accusantium officiis dolore cum. Nisi quia libero, nulla dolores amet incidunt mollitia ipsa necessitatibus nihil quibusdam?
    Nobis commodi impedit dolore illo, itaque inventore iste tempora quod mollitia sint nemo voluptate iusto, consequatur cupiditate esse dicta facilis, quae eos a ea non quo fugiat! Odio, ab perferendis!
    Quia placeat, temporibus eos sed dolores voluptate, magnam ut doloremque ratione a illum cupiditate porro cumque. Minima fugiat nihil sed possimus aliquid ex laboriosam soluta illo. Magnam nisi totam ut!
    Atque, possimus, laudantium nobis iusto repudiandae alias nostrum dolores voluptatem, inventore minus pariatur? Alias amet placeat dicta sed facere laboriosam nisi, facilis cupiditate neque minus deleniti, vero, repudiandae odit eligendi.</p>
        <button onClick={goContact}>Contact</button>
    </>
    )
}

export default About;