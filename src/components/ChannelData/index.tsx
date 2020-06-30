import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // Este Effect faz o scroll das mensagens descer para a ultima mensagem enviada
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />

        <ChannelMessage
          author='Alexandre Finger'
          date='21/06/2020'
          content='Learning css3 + ReactJS + TypeScript'
        />


        <ChannelMessage
          author='Diego Fernandes'
          date='21/06/2020'
          content={
            <>
              <Mention>@Alexandre Finger</Mention>, me carrega no LoL e CS de novo
              por favor?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
