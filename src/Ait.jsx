import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";



const Ait = () => {

    const {language} = useLanguage();

    return(
            <>
            <div>
      
              <div >
                <div className='part1'>
                  <div className='mainContent'>
                    <div className='part1'>
                      <div className='content1'>
                        <h1 className='ararat'>Ararat</h1>
                        <h3 className='text2'>IT School</h3>
                       {language === "am" && <p className='text3'>Բացահայտիր IT անսահման հնարավորությունները</p>}
                       {language === "en" && <p className='text3'>Discover the endless possibilities of IT</p>}
                       {language === "ru" && <p className='text3'>Откройте для себя безграничные возможности IТ</p>}
                       {language === "am" && <button>Դասընթացներ</button>}
                       {language === "en" && <button>Courses</button>}
                       {language === "ru" && <button>Курсы</button>}

                      </div>
                      <div className='man'>
                        <img className="manImg" src="https://aitschool.am/images/main_image.png" alt="Main Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                {language === 'am' && <h1 className='dasyntac'>Դասընթացներ</h1>}
                {language === 'en' && <h1 className="dasyntac">Courses</h1>}
                {language === "ru" && <h1 className="dasyntac">Курсы</h1>}
                  <div className='allClass'>
                    <div className='mainContent2'>
                      <div className='courseItem1'>
                        <img className='courseItem' src="https://api.aitschool.am/web_course.png"></img>
                        {language === "am" &&  <h1>WEB ԾՐԱԳՐԱՎՈՐՈՒՄ</h1>}
                        {language === "en" && <h1>PROGRAMMING</h1>}
                        {language === "ru" && <h1>ПРОГРАММИРОВАНИЕ</h1>}
                        {language === "am" && <p>6 ամիս</p>}
                        {language === "en" && <p>6 mont</p>}
                        {language === "ru" && <p>6 месяц</p>}
                      </div>
                    </div>
                    <div className='mainContent2'>
                        <div>
                          <img className='courseItem' src="https://api.aitschool.am/ui-ux.png"/>
                          <h1>UI/UX</h1>
                          {language === "am" &&  <p>2 ամիս</p>}
                          {language === "en" && <p>2 month</p>}
                          {language === "ru" && <p>2 месяц</p>}
                        </div>
                    </div>
                    <div className='mainContent2'>
                        <div className='courseItem1'>
                          <img className='courseItem'  src="https://api.aitschool.am/smm.png"/>
                          <h1>SMM</h1>
                          {language === "am" &&  <p>2 ամիս</p>}
                          {language === "en" && <p>2 month</p>}
                          {language === "ru" && <p>2 месяц</p>}
                        </div>
                    </div>
                    <div className='mainContent2'>
                      <div className='courseItem1'>
                        <img className='courseItem' src="https://api.aitschool.am/graphic-design.png"/>
                      </div>
                    </div>
                    <div className='mainContent2'>
                      <div className='courseItem1'>
                        <img className='courseItem'  src="https://api.aitschool.am/english.png"/>
                        {language === "am" &&<h1>Անգլերեն</h1>}
                        {language === "en" && <h1>English</h1>}
                        {language === "ru" && <h1>Английский</h1> }

                        {language === "am" &&  <p>4 ամիս</p>}
                          {language === "en" && <p>4 month</p>}
                          {language === "ru" && <p>4 месяц</p>}
                      </div>
                    </div>
                    <div className='mainContent2'>
                      <div className='courseItem1'>
                        <img className='courseItem' src="https://api.aitschool.am/3d-illustration-computer-keyboard-and-mouse-object-png.png"/>
                        {language === "am" && <h1>Համակարգչային գրագիտություն</h1>}
                        {language === "en" && <h1>Computer literacy</h1>}
                        {language === "en" && <h1>Компьютерная грамотность:</h1>}


                          {language === "am" && <p>2 ամիս</p>}
                          {language === "en" && <p>2 month</p>}
                          {language === "ru" && <p>2 месяц</p>}
                      </div>
                    </div>
                    <div className='mainContent2'>
                      <div className='courseItem1'>
                        <img className='courseItem' src="https://api.aitschool.am/kids.blog.webp"/>
                        {language === "am" && <p>8 ամիս</p>}
                        {language === "en" && <p>8 month</p>}
                        {language === "ru" && <p>8 месяц</p>}
                      </div>
                    </div>
                    <div className='mainContent2'>
                      <div className='courseItem1'>
                        <img className='courseItem' src="https://api.aitschool.am/free-linkedin-2-5645838-4695696.webp"></img>
                        <h1>LinkedIn Mastery</h1>
                        {language === "am" && <p>10 դաս</p>}
                        {language === "en" && <p>10 class</p>}
                        {language === "ru" && <p>10 уроков</p>}
                      </div>
                      </div>
                  </div>
                </div>
              </div>
      
              <div className='part2'>
                  <div>
                        <h1 className='masnachyux'>Մասնաճյուղեր</h1>
                    <div>
                        <div className='names'>
                      <div>
                        {language === "am" && <p>Ք. Արարատ</p>}
                        {language === "en" && <p>Ararat</p>}
                        {language === "ru" && <p>Apapam</p>}
                          

                      </div>
                      <div>
                        {language === "am" && <p>Ք. Երևան</p>}
                        {language === "en" && <p>Erevan</p>}
                        {language === "ru" && <p>Ереван</p>}
                    
                          </div>
                        </div>
                        <div className='mainPart'>
                        <div>
                          <img src="https://www.aitschool.am/images/office_ararat.jpg"/>
                        </div>
                        <div>
                          <img src="https://www.aitschool.am/images/office_yerevan.jpeg" />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
      
              <div>
                <div>
                {language === "am" && <h1 className='aIt'>Ինչ կտա ձեզ AIT-ն</h1>}
                {language === "en" && <h1 className='aIt'>What will AIT give you?</h1>}
                {language === "ru" && <h1 className='aIt'>Что вам даст AIT?</h1>}
                </div>
                <div>
                  <div className='allPart'>
                    <div className="all-important">
    <div  className='important'> 
                      <div>
                        <img src='https://www.aitschool.am/images/number1.svg'></img>
                      </div>
                      <div>
                      {language === "am" && <h2>Կրթություն</h2>}
                      {language === "en" && <h2>Education</h2>}
                      {language === "ru" && <h2>Образование</h2>}

                      {language === "am" &&  <p>Մասնակցի՛ր 10 ամսյա դասընթացին և <br/>ձեռք բեր ծրագրավորման հիմնարար<br/> գիտելիքներ: Ինչպես նաև կարող եք<br/> ուսանել Graphic Design, UI/UX Design, SMM<br/> և Անգլերեն</p>}
                      {language === "ru" &&  <p>Примите участие в 10-месячном курсе и <br/>получите базовые<br/> знания в области программирования. Также вы можете<br/> изучать графический дизайн, UI/UX дизайн, SMM<br/> и английский язык.</p>}
                      {language === "en" &&  <p>Take part in the 10-month course and <br/>acquire basic<br/> programming knowledge. Also you can<br/> study Graphic Design, UI/UX Design, SMM<br/> and English</p>}

                      </div>
                    </div>
                    <div  className='important imp2'>
                      <div>
                        <img src='https://www.aitschool.am/images/number2.svg'></img>
                      </div>
                      <div>
                      {language === "am" &&  <h2>Պրակտիկա</h2>}
                      {language === "en" &&  <h2>Practice</h2>}
                      {language === "ru" &&  <h2>Упражняться</h2>}


                        {language === "am" && <p>Դասընթացի ավարտից հետո անցեք<br/> փորձաշրջան դպրոցին կից գործող <br/>ծրագրավորման ընկերությունում։<br/> Կիրառի՛ր գիտելիքներդ՝ աշխատելով<br/> իրական նախագծերի վրա։</p>}
                        {language === "en" && <p>After completing the course, take a<br/> probationary period at a <br/>programming company affiliated with the school.<br/> Apply your knowledge by working<br/> on real projects.</p>}
                        {language === "ru" && <p>После прохождения курса пройдите<br/>испытательный срок в <br/>компании по программированию, связанной со школой.<br/>Примените свои знания, работая<br/> над реальными проектами.</p>}
                      </div>
                    </div>
                    <div className="important">
                    <div>
                      <img src="https://www.aitschool.am/images/number3.svg" />
                    </div>
                    <div>
                      <div>
                      {language === "am" &&  <h2>Աշխատանք</h2>}
                      {language === "en" &&  <h2>Work</h2>}
                      {language === "ru" &&  <h2>Работа</h2>}
                      {language === "am" && <p>Ստացի՛ր մեր թիմին միանալու<br /> հնարավորություն։ Մեր ուսանողները<br /> կազմում են մեր թիմի 80%ը։</p>}
                      {language === "en" && <p>Get a chance to join our team. Our students make up 80% of our team</p>}
                      {language === "ru" && <p>Получите шанс присоединиться к нашей команде. Наши студенты составляют 80% нашей команды
</p>}
                      </div>
                    </div>
                  </div>
                    </div>
                
                  <div>
                    <img className='earth' src='https://www.aitschool.am/images/globus.png'></img>
                  </div>
                  </div>
                </div>
              </div>
              
            </div>
          </>
    )
}

export default Ait;

