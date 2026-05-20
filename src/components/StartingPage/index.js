import { IoIosArrowForward } from "react-icons/io";
import { useData } from '../context/ReactContext'
import React, { useState, useRef, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { PiLessThan } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Tv from '../images/Tv.png'
import download from '../images/Download.png'
import Congragulations from '../images/Congragulations.png'
import { FaPlus } from "react-icons/fa6";
import Emoji from '../images/Emoji.png'
import './index.css'
import { Link } from "react-router-dom";
const Faqs=[{
  id:1,
  title:"What is Netflix ?",
  intial:false,
  paragraph:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
  breakedpaagraph:"  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
},{
   id:2,
  title:"How much does Netflix cost ?",
  intial:false,
  paragraph:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  breakedpaagraph:""
},{
  id:3,
  title:"Where can I watch ?",
  intial:false,
  paragraph:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  breakedpaagraph:"You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
},{
  id:4,
  title:"How do I cancel ?",
  intial:false,
  paragraph:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  breakedpaagraph:""
},{
  id:5,
  title:"What can I watch on Netflix ?",
  intial:false,
  paragraph:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  breakedpaagraph:""
},
{
  id:6,
  title:"Is Netflix good for kids ?",
  intial:false,
  paragraph:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
  breakedpaagraph:"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
}]

const Faqss=[{
  id:1,
  title:"Netflix क्या है ?",
  intial:false,
  paragraph:"Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.",
  breakedpaagraph:"आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!Netflix की कीमत कितनी है?मैं कहां देख सकता हूं?मैं कैसे कैंसल करूं?मैं Netflix पर क्या देख सकता/सकती हूं? क्या Netflix बच्चों के लिए ठीक है?"
},{
  id:2,
  title:"Netflix की कीमत कितनी है ?",
  intial:false,
  paragraph:"हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.",
  breakedpaagraph:""
},
{
  id:3,
  title:"मैं कहां देख सकता हूं ?",
  intial:false,
  paragraph:"कहीं भी, कभी भी देखें. तुरंत देखने के लिए वेब पर netflix.com पर जाकर अपने Netflix अकाउंट से साइन इन करें. आप Netflix ऐप ऑफ़र करने वाले इंटरनेट से जुड़े किसी भी डिवाइस से साइन इन कर सकते हैं जैसे कि आपका पर्सनल कंप्यूटर या स्मार्ट टीवी, स्मार्ट फ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल.",
  breakedpaagraph:"आप iOS या Android ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं."
},
{
  id:4,
  title:"मैं कैसे कैंसल करूं ?",
  intial:false,
  paragraph:"Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.",
  breakedpaagraph:""
},
{
  id:5,
  title:"मैं Netflix पर क्या देख सकता/सकती हूं ?",
  intial:false,
  paragraph:"Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.",
  breakedpaagraph:""
},
{
  id:6,
  title:"क्या Netflix बच्चों के लिए ठीक है ?",
  intial:false,
  paragraph:"आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं.",
  breakedpaagraph:"बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें."
}]

const StartingPage = () => {
  const { currentLanguage, changingLanguage } = useData()
  const [startCount, setStartCount] = useState(1)
  const [endCount, setEndCount] = useState(4)
  const [EnglishFaqs,setEnglishFaqs]=useState(Faqs)
  const [HindiFaqs,settingHindiFaqs]=useState(Faqss)

  const selectingElement = (e) => {
    changingLanguage(e.target.value)
  }

  const clickingLGreaterthanIcon = () => {
    setStartCount((endCount + 1))
    setEndCount((endCount + 4))
  }

  const clickingLessthanIcon = () => {
    setStartCount((startCount - 4))
    setEndCount((endCount - 4))
  }

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const clickingParticularCard=(id)=>{
    const mapping=EnglishFaqs.map(each =>{
      if(each.id === id){
        return(
         {id,
          intial:true,
          title:each.title,
          paragraph:each.paragraph,
          breakedpaagraph:each.breakedpaagraph
         }
        )
      }
      return each
    })
    setEnglishFaqs(mapping)
  }

   const closingParticularCard=(id)=>{
    const mapping=EnglishFaqs.map(each =>{
      if(each.id === id){
        return(
         {id,
          intial:false,
          title:each.title,
          paragraph:each.paragraph,
          breakedpaagraph:each.breakedpaagraph
         }
        )
      }
      return each
    })
    setEnglishFaqs(mapping)
  }
 const clickingParticularHindiCard=(id)=>{
    const mapping=HindiFaqs.map(each =>{
      if(each.id === id){
        return(
         {id,
          intial:true,
          title:each.title,
          paragraph:each.paragraph,
          breakedpaagraph:each.breakedpaagraph
         }
        )
      }
      return each
    })
    settingHindiFaqs(mapping)
 } 

 const closingParticularHindiCard=(id)=>{
   const mapping=HindiFaqs.map(each =>{
      if(each.id === id){
        return(
         {id,
          intial:false,
          title:each.title,
          paragraph:each.paragraph,
          breakedpaagraph:each.breakedpaagraph
         }
        )
      }
      return each
    })
    settingHindiFaqs(mapping)
 }

  return (
    <>
      {currentLanguage === "English" &&
        <div>
          <div className='background-of-starting-page'>
            <div className='flexing-of-netflix-heading-and-select-element'>
              <h1 className='NETFLIX-HEADING-AT-STARTING-PAGE'>NETFLIX</h1>
              <div className='margin-left-for-select-element'>
                <select className='starting-page-of-select-element' onChange={selectingElement}>
                  <option value="English">English</option>
                  <option value="Hindi">हिन्दी</option>
                </select>
                <Link to="/in/login-hindi"><button className='sign-in-button'>Sign In</button></Link>
              </div>
            </div>
            <h1 className='heading-of-starting-page'>Unlimited movies, TV shows and more</h1>
            <p className='paragraph-of-starting-page'>Starts at ₹149. Cancel at any time.</p>
            <h3 className='h3-of-starting-page'>Ready to watch? Enter your email to create or restart your membership.</h3>
            <form className='flexing-of-email-and-get-started-button'>
              <input type='email' placeholder='Email address' className='size-of-input-email-address' required />
              <button className='get-started-button' type="submit">Get Started <IoIosArrowForward className="size-of-forward-icon" /></button>
            </form>
          </div>
          <div className="below-backgroud-ofting-page-netflix">
            <h2 className="trending-now-button">Trending Now</h2>

            <div className="flexing-of-trending-now-images">



              {startCount === 1 && endCount === 4 &&
                <div className="flexing-of-trending-now-images">
                  <Popup trigger={<div className="background-image-for-trending-now-images-1"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/oqxAJKy0ii4"
                      frameborder="0"
                      title="SQUID-GAME"
                      allowfullscreen>
                    </iframe>

                  </Popup>
                  <Popup trigger={<div className="background-image-for-trending-now-images-2"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/kQF1gl7nLaU"
                      frameborder="0"
                      allowfullscreen
                      title="RAID-2">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-3">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/L-M-YNblEaw"
                      frameborder="0"
                      allowfullscreen
                      title="THE-GREAT-INDIAN-KAPIL">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-4">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/IC_2jSsWpZk"
                      frameborder="0"
                      allowfullscreen
                      title="AAP-JAISA-KOI">
                    </iframe>

                  </Popup>
                  <button><FaGreaterThan onClick={clickingLGreaterthanIcon} /></button>
                </div>}


              {startCount === 5 && endCount === 8 &&
                <div className="flexing-of-trending-now-images">
                  <button><PiLessThan onClick={clickingLessthanIcon} /></button>
                  <Popup trigger={<div className="background-image-for-trending-now-images-5"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/kAtfaaUgDRU"
                      frameborder="0"
                      title="SQUID-GAME"
                      allowfullscreen>
                    </iframe>

                  </Popup>
                  <Popup trigger={<div className="background-image-for-trending-now-images-6"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/BOZaRvNIdCw"
                      frameborder="0"
                      allowfullscreen
                      title="RAID-2">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-7">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/-I5kX9b9rGc"
                      frameborder="0"
                      allowfullscreen
                      title="THE-GREAT-INDIAN-KAPIL">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-8">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/77vRyWNqZjM"
                      frameborder="0"
                      allowfullscreen
                      title="AAP-JAISA-KOI">
                    </iframe>

                  </Popup>
                  {startCount === 5 && endCount === 8 && <button><FaGreaterThan onClick={clickingLGreaterthanIcon} /></button>}
                </div>}

              {startCount === 9 && endCount > 9 &&
                <div className="flexing-of-trending-now-images">
                  <button><PiLessThan onClick={clickingLessthanIcon} /></button>
                  <Popup trigger={<div className="background-image-for-trending-now-images-7">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/-I5kX9b9rGc"
                      frameborder="0"
                      allowfullscreen
                      title="THE-GREAT-INDIAN-KAPIL">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-8">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/77vRyWNqZjM"
                      frameborder="0"
                      allowfullscreen
                      title="AAP-JAISA-KOI">
                    </iframe>

                  </Popup>
                  <Popup trigger={<div className="background-image-for-trending-now-images-9"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/YV7FN78Dwxo"
                      frameborder="0"
                      title="SQUID-GAME"
                      allowfullscreen>
                    </iframe>

                  </Popup>
                  <Popup trigger={<div className="background-image-for-trending-now-images-10"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/wbEWbAKo29Q"
                      frameborder="0"
                      allowfullscreen
                      title="RAID-2">
                    </iframe>

                  </Popup>




                </div>}


            </div>
            <h2 className="more-reason-heading">More reasons to join</h2>
            <div className="flexing-of-more-ways-to-join">
              <div className="background-color-of-more-ways-to-join-image-1">
                <h3 className="enjoy-your-tv-heading">Enjoy on your TV</h3>
                <p className="more-ways-to-join-para-1">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                <img src={Tv} width={72} height={72} alt="tv" className="tv-image" />
              </div>
              <div className="background-color-of-more-ways-to-join-image-1">
                <h3 className="enjoy-your-tv-heading">Download your shows to watch offline</h3>
                <p className="more-ways-to-join-para-1">Save your favourites easily and always have something to watch.</p>
                <img src={download} width={72} height={72} alt="download" className="download-image" />
              </div>
              <div className="background-color-of-more-ways-to-join-image-1">
                <h3 className="enjoy-your-tv-heading">Watch everywhere</h3>
                <p className="more-ways-to-join-para-1">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
                <img src={Congragulations} width={72} height={72} alt="Congragulations" className="congragulations-image" />
              </div>
              <div className="background-color-of-more-ways-to-join-image-1">
                <h3 className="enjoy-your-tv-heading">Create profiles for kids</h3>
                <p className="more-ways-to-join-para-1">Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                <img src={Emoji} width={72} height={72} alt="emoji" className="emoji-image" />
              </div>
            </div>


             <h2 className="frequently-asked-questions-heading">Frequently Asked Questions</h2>
          
             

             <ul>
              {EnglishFaqs.map(each =>{
                  return(
                   
                       <li className={each.intial=== true?"styling-of-flex-of-each-card":""}>
                <div className="flexing-of-each-card">
                  <h1 className="what-is-netflix-heading">{each.title} </h1>
                  {each.intial=== false ?<FaPlus className="plus-button" onClick={()=>{clickingParticularCard(each.id)}}/>:<RxCross2 className="plus-button" onClick={()=>{closingParticularCard(each.id)}}/>}
                </div> 
                {each.intial&&<p className="card-paragraph-styling">{each.paragraph}
                  <br/>
                  {each.breakedpaagraph}
                </p>} 
              </li>
                    
                  )  
              })}
             </ul>
             <div>
              <h3 className="Ready-to-watch-heading">Ready to watch? Enter your email to create or restart your membership.</h3>
               <div className='flexing-of-email-and-get-started-button'>
              <input type='email' placeholder='Email address' className='size-of-input-email-address' required />
              <button className='get-started-button'>Get Started <IoIosArrowForward className="size-of-forward-icon" /></button>
            </div>
            <p className="questions-call-heading">Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743</a></p>
             </div>
          </div>
         
        </div>}

     {currentLanguage === "Hindi" &&
        <div>
          <div className='background-of-starting-page'>
            <div className='flexing-of-netflix-heading-and-select-element'>
              <h1 className='NETFLIX-HEADING-AT-STARTING-PAGE'>NETFLIX</h1>
              <div className='margin-left-for-select-element'>
                <select className='starting-page-of-select-element' onChange={selectingElement}>
                  <option value="Hindi">हिन्दी</option>
                  <option value="English">English</option>
                </select>
                <button className='sign-in-button-for-hindi'>साइन इन करें</button>
              </div>
            </div>
            <h1 className='heading-of-starting-page'>अनलिमिटेड फ़िल्में, टीवी शो, और बहुत कुछ</h1>
            <p className='paragraph-of-starting-page'>₹149 से शुरू होता है. कभी भी कैंसल करें.</p>
            <h3 className='h3-of-starting-page'>देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.</h3>
            <div className='flexing-of-email-and-get-started-button'>
              <input type='email' placeholder='ईमेल एड्रेस' className='size-of-input-email-address' required />
              <button className='get-started-button'>शुरू करें <IoIosArrowForward className="size-of-forward-icon" /></button>
            </div>
          </div>
          <div className="below-backgroud-ofting-page-netflix">
            <h2 className="trending-now-button">ट्रेंडिंग नाव</h2>

            <div className="flexing-of-trending-now-images" ref={scrollRef}>



              {startCount === 1 && endCount === 4 &&
                <div className="flexing-of-trending-now-images">
                  <Popup trigger={<div className="background-image-for-trending-now-images-1"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/oqxAJKy0ii4"
                      frameborder="0"
                      title="SQUID-GAME"
                      allowfullscreen>
                    </iframe>

                  </Popup>
                  <Popup trigger={<div className="background-image-for-trending-now-images-2"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/kQF1gl7nLaU"
                      frameborder="0"
                      allowfullscreen
                      title="RAID-2">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-3">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/L-M-YNblEaw"
                      frameborder="0"
                      allowfullscreen
                      title="THE-GREAT-INDIAN-KAPIL">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-4">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/IC_2jSsWpZk"
                      frameborder="0"
                      allowfullscreen
                      title="AAP-JAISA-KOI">
                    </iframe>

                  </Popup>
                  <button><FaGreaterThan onClick={clickingLGreaterthanIcon} /></button>
                </div>}


              {startCount === 5 && endCount === 8 &&
                <div className="flexing-of-trending-now-images">
                  <button><PiLessThan onClick={clickingLessthanIcon} /></button>
                  <Popup trigger={<div className="background-image-for-trending-now-images-5"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/kAtfaaUgDRU"
                      frameborder="0"
                      title="SQUID-GAME"
                      allowfullscreen>
                    </iframe>

                  </Popup>
                  <Popup trigger={<div className="background-image-for-trending-now-images-6"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/BOZaRvNIdCw"
                      frameborder="0"
                      allowfullscreen
                      title="RAID-2">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-7">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/-I5kX9b9rGc"
                      frameborder="0"
                      allowfullscreen
                      title="THE-GREAT-INDIAN-KAPIL">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-8">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/77vRyWNqZjM"
                      frameborder="0"
                      allowfullscreen
                      title="AAP-JAISA-KOI">
                    </iframe>

                  </Popup>
                  {startCount === 5 && endCount === 8 && <button><FaGreaterThan onClick={clickingLGreaterthanIcon} /></button>}
                </div>}

              {startCount === 9 && endCount > 9 &&
                <div className="flexing-of-trending-now-images">
                  <button><PiLessThan onClick={clickingLessthanIcon} /></button>
                  <Popup trigger={<div className="background-image-for-trending-now-images-7">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/-I5kX9b9rGc"
                      frameborder="0"
                      allowfullscreen
                      title="THE-GREAT-INDIAN-KAPIL">
                    </iframe>

                  </Popup>

                  <Popup trigger={<div className="background-image-for-trending-now-images-8">

                  </div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/77vRyWNqZjM"
                      frameborder="0"
                      allowfullscreen
                      title="AAP-JAISA-KOI">
                    </iframe>

                  </Popup>
                  <Popup trigger={<div className="background-image-for-trending-now-images-9"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/YV7FN78Dwxo"
                      frameborder="0"
                      title="SQUID-GAME"
                      allowfullscreen>
                    </iframe>

                  </Popup>
                  <Popup trigger={<div className="background-image-for-trending-now-images-10"></div>} modal>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/wbEWbAKo29Q"
                      frameborder="0"
                      allowfullscreen
                      title="RAID-2">
                    </iframe>

                  </Popup>




                </div>}


            </div>
            <h2 className="more-reason-heading">शामिल होने की ज़्यादा वजहें</h2>
            <div className="flexing-of-more-ways-to-join">
              <div className="background-color-of-more-ways-to-join-image-1">
                <h3 className="enjoy-your-tv-heading">अपने टीवी पर आनंद लें</h3>
                <p className="more-ways-to-join-para-1">स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.
</p>
                <img src={Tv} width={72} height={72} alt="tv" className="tv-image" />
              </div>
              <div className="background-color-of-more-ways-to-join-image-1">
                <h3 className="enjoy-your-tv-heading">ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें</h3>
                <p className="more-ways-to-join-para-1">अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.</p>
                <img src={download} width={72} height={72} alt="download" className="download-image-hindi" />
              </div>
              <div className="background-color-of-more-ways-to-join-image-1">
                <h3 className="enjoy-your-tv-heading">हर जगह देखें</h3>
                <p className="more-ways-to-join-para-1">बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.</p>
                <img src={Congragulations} width={72} height={72} alt="Congragulations" className="congragulations-image-hindi" />
              </div>
              <div className="background-color-of-more-ways-to-join-image-1">
                <h3 className="enjoy-your-tv-heading">बच्चों के लिए प्रोफ़ाइल बनाएं</h3>
                <p className="more-ways-to-join-para-1">बच्चों को अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जाने दें जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.</p>
                <img src={Emoji} width={72} height={72} alt="emoji" className="emoji-image-hindi" />
              </div>
               
            </div>
            <h2 className="frequently-asked-questions-heading">अक्सर पूछे जाने वाले सवाल</h2>
            <ul>
             {HindiFaqs.map(each =>{
                  return(
                   
                       <li className={each.intial=== true?"styling-of-flex-of-each-card":""}>
                <div className="flexing-of-each-card">
                  <h1 className="what-is-netflix-heading">{each.title} </h1>
                  {each.intial=== false ?<FaPlus className="plus-button" onClick={()=>{clickingParticularHindiCard(each.id)}}/>:<RxCross2 className="plus-button"onClick={()=>{closingParticularHindiCard(each.id)}}/>}
                </div> 
                {each.intial&&<p className="card-paragraph-styling">{each.paragraph}
                  <br/>
                  {each.breakedpaagraph}
                </p>} 
              </li>
                    
                  )  
              })}
            </ul>
            <h3 className="Ready-to-watch-heading">देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.</h3>
               <div className='flexing-of-email-and-get-started-button'>
              <input type='email' placeholder='ईमेल एड्रेस' className='size-of-input-email-address' required />
              <button className='get-started-button'>शुरू करें <IoIosArrowForward className="size-of-forward-icon" /></button>
            </div>
            <p className="questions-call-heading">कोई सवाल? <a href="tel:000-800-919-1743">000-800-919-1743</a> पर कॉल करें</p>
          </div>

        </div>}

    </>
  )
}
export default StartingPage