import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=> {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
            <Messages>
                <ChannelMessage
                    author="$yn'"
                    date="04/06/2022"
                    content="Aloooooooooooo!"
                />
                <ChannelMessage
                    author="Raycon'"
                    date="04/06/2022"
                    content="Salve!"
                />
                <ChannelMessage
                    author="Marcola'"
                    date="04/06/2022"
                    content={
                        <>
                            <Mention>@$yn'</Mention>, por favor me carrega no lolzinho!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type='text' placeholder='Conversar em #quests'/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};


export default ChannelData;