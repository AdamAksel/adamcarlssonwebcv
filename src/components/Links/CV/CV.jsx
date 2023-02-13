import React from 'react'
import { CVArea, CVItem, CVTitle, CVSide, CVText } from './CV.elements'

const CV = () => {
  return (
    <>
      <CVArea>
        <CVSide>
          <CVItem>
            <CVTitle>Basic Info</CVTitle>
            <CVText>
              I was born in Sweden in front of a computer, spent much of my life
              never wondering how the magic box that played games worked. Now I
              am remediating that. I used youtube for learning and built some
              medium sized projects. After which I joined an "Education for
              work" course focusing on Javascript and Java.
            </CVText>
          </CVItem>
          <CVItem>
            <CVTitle>Programming Languages I Feel Comfortable With</CVTitle>
            <CVText>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript/React</li>
              </ul>
            </CVText>
          </CVItem>
          <CVItem>
            <CVTitle>Programming Languages I Have Dabbled In</CVTitle>
            <CVText>
              <ul>
                <li>Python</li>
                <li>Node.js</li>
                <li>GDScript</li>
              </ul>
            </CVText>
          </CVItem>
          <CVItem>
            <CVTitle>Most Important Skills</CVTitle>
            <CVText>
              <ul>
                <li>Google</li>
                <li>Stack Overflow</li>
              </ul>
            </CVText>
          </CVItem>
        </CVSide>
        <CVSide>
          <CVItem>
            <CVTitle>Former work experience</CVTitle>
            <CVText>
              <ul>
                <li>Worked at the Danish Post Office for about a decade</li>
                <li>After That</li>
                <li>Some odd jobs, part time, at convenience stores.</li>
              </ul>
            </CVText>
          </CVItem>
          <CVItem>
            <CVTitle>Education</CVTitle>
            <CVText>
              Swedish education system, but don't hold that against me, I also
              complemented my lacking education afterwards by becomming an
              autodidact, much with the help of youtube. Unfortunately I learned
              mostly unmarketable skills like history, philosophy, and economic
              theory. Should you ever need a synopsis of the european wars of
              religion I'm your guy! Also, some courses in history and sociology
              at Malmö University, wasted time, but at least got to read some
              books.
            </CVText>
          </CVItem>
          <CVItem>
            <CVTitle>Contact</CVTitle>
            <CVText>
              <ul>
                <li>Full Name: Adam Aksel Karlsson</li>
                <li>Birth Date: 1987-04-04</li>
                <li>Mobile: 070 0404992</li>
                <li>Email: akseltheaustrian@gmail.com</li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/adam-karlsson-94b8a718a/'
                  >
                    LinkedIn
                  </a>{' '}
                </li>
              </ul>
            </CVText>
          </CVItem>
        </CVSide>
      </CVArea>
    </>
  )
}

export default CV
