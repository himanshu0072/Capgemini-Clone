import './style.css'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



function AboutComp2() {
    return (
        <>
            <div className="inside_story_section">
                <div className="container">
                    <header>Inside Story</header>
                    <section className='first-col'>
                        <div className="img1">
                            <img src="https://www.capgemini.com/wp-content/uploads/2022/04/2022-03-03_Capgemini-Disability-Matters_1.jpg?w=1024&quality=90" alt="" />
                        </div><br />
                        <h3><HorizontalRuleIcon /> Diversity and inclusion</h3>
                        <div className="i1a">
                            <a href="#">Making better workplaces</a>
                        </div>
                        <p>How does a workplace ensure that ability never goes unnoticed and all employees can work towards
                            getting
                            the future they want? According to three Capgemini colleagues with different disabilities, it starts
                            with a culture of openness, inclusivity, and accessibility.</p>
                    </section>
                    <section className='second-col'>
                        <div className="img2">
                            <img src="https://www.capgemini.com/wp-content/uploads/2022/05/Mojave-without-shape.png?w=1024&quality=90" alt="" />
                        </div>
                        <h3><HorizontalRuleIcon />Environment</h3>
                        <div className="i2a">
                        <a href="#">Sustaining a national wonder with AI</a>
                    </div>
                    <div className="img2">
                        <img src="https://www.capgemini.com/wp-content/uploads/2022/05/Building-bridges.png?w=1024&quality=90" alt="" />
                    </div>
                    <h3><HorizontalRuleIcon /> Life at Capgemini</h3>
                    <div className="i2a"><a href="#">Building pride</a></div>
                    </section>
                    <div className="btn"><button>Read more stories <ArrowRightAltIcon /></button></div>

                </div>
            </div>

            <div className="explore_capgemini container">
            <header>Explore Capgemini</header>

                <div className="cards">
                    <div className="card_img">
                        <img src="https://www.capgemini.com/wp-content/uploads/2021/06/Capgemini_Careers.jpg?w=992&quality=90" />
                    </div>
                    <a href="#"><h1 className="head">Career with us</h1></a>

                </div>
                <div className="cards">
                <div className="card_img">
                        <img src="https://www.capgemini.com/wp-content/uploads/2022/03/Capgemini_Industries.jpg?w=992&quality=90" />
                    </div>
                    <a href="#"><h1 className="head">Our Industries</h1></a>
                </div>
                <div className="cards">
                <div className="card_img">
                        <img src="https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_Services.jpg?w=992&quality=90" />
                    </div>
                    <a href="#"><h1 className="head">Our Services</h1></a>

                </div>
            </div>

        </>

    );
}

export default AboutComp2;
