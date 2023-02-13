import React from 'react'
import { QAArea, QASide, QAItem, QAList, QALi } from './QandA.elements'

const QandA = () => {
  return (
    <QAArea>
      <QASide>
        <QAItem>
          <QAList>
            <QALi>Q: Hello you there!</QALi>
            <QALi>A: Yes I am</QALi>
          </QAList>
        </QAItem>
        <QAItem>
          <QAList>
            <QALi>
              Q: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              aperiam molestias repellat nulla explicabo, doloremque quos vitae
              voluptate dolorum earum delectus tempore voluptas eos debitis iste
              accusantium ratione? Odio, dolorum.
            </QALi>
            <QALi>
              A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              adipisci facilis et voluptate unde voluptatem, sequi minima
              nostrum a ullam reiciendis sunt rem nihil ratione porro optio
              consequatur, nemo in.
            </QALi>
          </QAList>
        </QAItem>
      </QASide>
      <QASide>
        <QAItem>
          <QAList>
            <QALi>
              Q: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              aperiam molestias repellat nulla explicabo, doloremque quos vitae
              voluptate dolorum earum delectus tempore voluptas eos debitis iste
              accusantium ratione? Odio, dolorum.
            </QALi>
            <QALi>
              A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              adipisci facilis et voluptate unde voluptatem, sequi minima
              nostrum a ullam reiciendis sunt rem nihil ratione porro optio
              consequatur, nemo in.
            </QALi>
          </QAList>
        </QAItem>
        <QAItem>
          <QAList>
            <QALi>Q: Question</QALi>
            <QALi>A: Answer</QALi>
          </QAList>
        </QAItem>
      </QASide>
    </QAArea>
  )
}

export default QandA
