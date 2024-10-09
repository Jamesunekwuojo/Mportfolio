
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Books.css"


const books = [
  {
    image: "/cover1.jpeg",
    header2: " 30 Lessons Life Taught Me Before 30",

    text: "Discovering purpose before I turned 30 changed my life and the lives of everyone who came in contact with me. Yet, I wouldn’t be saying the whole truth if I attribute it all to purpose discovery. It is a lot more than that",

    text2: "Through my journey of life, I have met people and I have had experiences that have since changed my views of life, and thankfully too, I have made notes of these turning points. ",
     
    button:"Get copy",
  },

  {
    image: "/cover2.jpg",
    header2: "Courage: How Ordinary People Achieve Extraordinary Results",
    text: "Are you a young professional, fresh graduate, or entrepreneur who often finds themselves hesitating to make daring decisions that could change your life for the better? Do you struggle with speaking up and dealing with superiors in the workplace? Are you a parent looking to instill courage in your children so they can face life's challenges head-on? If you answered yes to any of these questions, you're not alone. Many people face these issues, and it can be a significant barrier to personal and professional growth.",
    
    button:"Get copy",
  },

  {
    image: "/mindsetcover4.jpg",
    header2: "Mind Shift: The Secret and Power of Your Mind",
      
    text: "Imagine for a minute that you wake up one morning and see all you have dreamt of come to pass. You will come up with a broad smile with a sense of fulfilment. ",

    text2: "Let's come to reality - Are you sure your mind is ready for this?",

    button:"Get copy",
  },

  {
    image: "/knowledge.jpg",
    header2: "Productizing Your Knowledge",
    text: "Do you ever ask the question \"why is it that not everyone seems to be worried during the lockdown season\"? Some are smiling daily when they check their emails, look at their SMSs and receive phone calls because they are cashing in.",

    text2: "They may not be seen to be doing regular active works but are being rewarded by you because what they sell is digital yet valuable.",

    button:"Get copy",
  },

  {
    image: "/nysccover7.jpg",
    header2: "Making Productive Impact in Your NYSC Year",
    text: "Through this book, I am willing to make thousands of young people come into that same reality of the life they should live and stop living the dreams of others. Do you know anyone young person who wants to? If your answer is yes, don‟t hesitate to hand this book over to such. In case you are that person, feel free to read on. As a result of my inbreed passion, I speak, write and coach young people on subjects matters around purpose, potential, productivity, profiting and personal development.",

    text2:"You know what? I have never regretted it not even once. It..",
    button:"Get copy",
  },

  {
    image: "/moneyManager.png",
    header2: "Personal Money Manager Sheet",
    text: "If you earn money but wonder why they finish so easily without being accountable for where they go, then, there is one thing you are not doing. I use to be like you until I learnt the way to keep personal record of my spending and earnings which changed my financial story. Money runs away from those who mismanage them and flows more to those who can manage them. One secret that can make you wealthy is keeping your financial records easily and working on a budget.",

    text2: "In 2020, I began using this tool that made it so easy for...",
    button:"Get copy",
  },

  {
    image: "/wealth.jpeg",
    header2: "From Why To Wealth : How to Make Profit From Your Purpose",

    text: "Do you earnest desire to fulfil purpose but so worried about how to make money from it?",


    text2: "Have you had to do so many things for free but your audience look away when you make an offer to pay for something? ",

    text3:"Then the understanding of purpose financing is what you must go for.",

    text4: "Purpose financing looked so much like an urgent issue...",





    button:"Get copy",
  },

  {
    image: "/partnercover3.jpg",
    header2: "Purpose Before Partner: What No One Told You About Marriage",

    text: "AN OPEN LETTER TO EVERY LADY IN AFRICA WHO WANTS TO STOP BEING SERVED BREAKFASTS IN RELATIONSHIPS",

    text2: "Dear Titi, ",

    text3: "It has been a great time with you during these 5 years of love, happiness and joy.",

    text4: "What an angel you have been, a delight to be with and a treasure to have.",




    button:"Get copy",
  },

]

function About() {
  return (
    <Container className="p-4 mt-4 bookContainer"  style={{ backgroundColor: '#f8f9fa', borderRadius: '15px'   }}>
      <Row>
        {books.map((book, index) => (
          <Row key={index} className=" bookAd">
            <Col lg={6}>
            <Image 
            src={book.image}
            alt="book"
            fluid
            className="bookImage"
            />
            </Col>

            <Col lg={6} className=' mt-4'>
            <h2>{book.header2}</h2>
            <p id='text1'>{book.text}</p>
            <p id='text2'>{book.text2}</p>
            <p id='text3'>{book.text3}</p>
            <p id='text4'>{book.text4}</p>

            <Button className="book mt-4"><Link to="/shop" className="bookLink">{book.button}</Link></Button>


            </Col>

          </Row>
        ))} 
        
      </Row>
    </Container>
  );
}

export default About;
