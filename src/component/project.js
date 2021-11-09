import Proj from '../images/proj1.jpg';
import Proj2 from '../images/proj2.jpg';
import Proj3 from '../images/proj3.jpg';
import Proj4 from '../images/proj4.jpg';

function Proje (){
    const projects= [{name:"project1",src:Proj},{name:"project2",src:Proj2},{name:"project3",src:Proj3},{name:"project4",src:Proj4}]
    return(
        <section id="projects">
        <h2 class="text-important">Projects</h2>
        <div class="projects-container">
{projects.map(el=> <div class="project-card">
            <img src={Proj} alt="project" />
            <h3>{el.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>)};


          </div>

      </section>
    )
}
export default Proje