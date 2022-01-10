import React, { Fragment } from "react"
import styled from "styled-components"
import { People } from "../interfaces"

const StyledListOfInviting = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 3px solid gray;
    border-radius: 25px;
    margin: 10px;
`

const Content = styled.div`
    border-right: 1px solid gray;
    padding: 10px;
    &:last-child {
        border-right: unset;
    }
`

const StyledImage = styled.img`
    height: auto;
    width: 3.5rem;
    border-radius: 25px;
`

interface Props {
    people: People
}

const List: React.FC<Props> = ({ people }) => {
    return <Fragment>
        {people.map((p, i): JSX.Element => (<StyledListOfInviting key={i}>
            <Content>
                <StyledImage src={p.imageUrl} />
            </Content>
            <Content>
                <p>
                    {p.name}
                </p>
            </Content>
            <Content>
                <p>
                    {p.age}
                </p>
            </Content>
            <Content>
                <p>
                    {p.note}
                </p>
            </Content>
        </StyledListOfInviting>)) }
    </Fragment>
}

export default List
